import React, { useEffect, useState } from 'react';
import { Coin } from '@/interfaces/IQuotesTypes';
import {
  TopCoinsCarouselWrapper,
  CarouselContainer,
  CarouselItemWrapper,

} from './styles';
import CarouselItem from './CourelItem/CarouselItem';

async function fetchCoinsData(): Promise<Coin[]> {
  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    );

    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    
    const data: Coin[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export function HeaderNavigationCoinCarousel() {
  const [formattedCoins, setFormattedCoins] = useState<Coin[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const coins = await fetchCoinsData();
      const numberFormatter = new Intl.NumberFormat('en-US', {
        signDisplay: 'exceptZero',
        maximumFractionDigits: 2,
      });

      const formattedCoins = coins.map(coin => ({
        ...coin,
        symbol: coin.symbol.toLocaleUpperCase(),
        percentage_24h: `${numberFormatter.format(coin.market_cap_change_percentage_24h)}%`,
        price: coin.current_price.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        }),
      }));

      setFormattedCoins(formattedCoins);
    }

    fetchData();
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % formattedCoins.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (formattedCoins.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <TopCoinsCarouselWrapper>
      <CarouselContainer currentIndex={currentIndex}>
        {formattedCoins.map((coin, index) => (
          <CarouselItemWrapper key={coin.id}>
            <CarouselItem
              coin={coin} // Certifique-se de passar a propriedade coin corretamente
              className={currentIndex === index ? 'active-item' : 'inactive-item'}
            />
          </CarouselItemWrapper>
        ))}
      </CarouselContainer>
    </TopCoinsCarouselWrapper>
  );
}

export default HeaderNavigationCoinCarousel;
