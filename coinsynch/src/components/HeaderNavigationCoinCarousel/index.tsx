import { useEffect, useState } from "react";
import { Coin } from "@/interfaces/IQuotesTypes";
import { TopCoinsCarouselWrapper, CarouselContainer } from "./styles";
import CarouselItem from "./CarouselItem";

function getTop10Coins() {
  return fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
    {
      next: {
        revalidate: 60
      }
    }
  )
  .then(response => response.json())
  .catch(error => {
    console.error(error);
    return [];
  });
}

export function HeaderNavigationCoinCarousel() {
  const [formattedCoins, setFormattedCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const startCarousel = () => {
      if (formattedCoins.length > 0 && isHovering) {
        const interval = setInterval(() => {
          setCurrentIndex(prevIndex => (prevIndex + 1) % formattedCoins.length);
        }, 5000); // Troque o valor 5000 para o intervalo de tempo desejado (em milissegundos)
        return () => clearInterval(interval);
      }
    };

    getTop10Coins().then(coins => {
      const numberFormatter = new Intl.NumberFormat("en-US", {
        signDisplay: "exceptZero",
        maximumFractionDigits: 2
      });

      const formattedCoins = coins.map(coin => ({
        ...coin,
        symbol: coin.symbol.toLocaleUpperCase(),
        percentage_24h: `${numberFormatter.format(coin.market_cap_change_percentage_24h)}%`,
        price: coin.current_price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })
      }));

      setFormattedCoins(formattedCoins);
      setLoading(false);

      startCarousel(); // Iniciar o carrossel somente após obter os dados das moedas
    });
  }, [isHovering]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <TopCoinsCarouselWrapper>
      <CarouselContainer>
        {formattedCoins.map((coin, index) => (
          <CarouselItem key={coin.id} coin={coin} active={index === currentIndex} />
        ))}
      </CarouselContainer>
    </TopCoinsCarouselWrapper>
  );
}

export default HeaderNavigationCoinCarousel;
