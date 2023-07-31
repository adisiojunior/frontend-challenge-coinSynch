import React from 'react';
import { Coin } from "@/interfaces/IQuotesTypes";
import { CarouselItemWrapper, SymbolText, PriceText, PercentageText } from "./styles";

interface CarouselItemProps {
  coin: Coin;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ coin }) => {
  return (
    <CarouselItemWrapper>
      <SymbolText>{coin.symbol}</SymbolText>
      <PriceText>{coin.current_price}</PriceText>
      <PercentageText positive={coin.market_cap_change_percentage_24h >= 0 ? "true" : "false"}>
        {coin.market_cap_change_percentage_24h}%
      </PercentageText>
    </CarouselItemWrapper>
  );
};

export default CarouselItem;
