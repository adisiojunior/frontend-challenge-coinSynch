import { Coin } from "@/interfaces/IQuotesTypes";

interface CarouselItemProps {
  coin: Coin;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ coin }) => {
  return (
    <div className="!label flex gap-2">
      <span className="text-secondary-800">{coin.symbol}</span>
      <span className="text-default">{coin.price}</span>
      <span className={coin.market_cap_change_percentage_24h >= 0 ? "text-tertiary-500" : "text-quartenary-500"}>
        {coin.percentage_24h}
      </span>
    </div>
  );
};

export default CarouselItem;