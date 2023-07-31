"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon, IconName } from "@/components/Icons/Icon";
import { CarouselContainer, CarouselItem, CarouselItemImage, CarouselWrapper, IconWrapper } from "./styles";

interface Items {
  image: string;
  icons: [IconName, IconName];
}

const GAP_SIZE = 112;
const CAROUSEL_SIZE = {
  width: 455,
  height: 300,
};

const ITEMS: Items[] = [
  { image: "/woman.svg", icons: ["bitcoin", "increase-chart"] },
  { image: "/man.svg", icons: ["laptop-mobile", "crypto"] },
  { image: "/woman2.svg", icons: ["bitcoin", "increase-chart"] },
];

const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % ITEMS.length);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const debouncedScrollNext = debounce(scrollNext, 200);

    const listener = (event: WheelEvent) => {
      event.preventDefault();
      debouncedScrollNext();
    };

    container?.addEventListener("wheel", listener);
    return () => container?.removeEventListener("wheel", listener);
  }, [scrollNext]);

  return (
    <CarouselContainer>
      <CarouselWrapper ref={containerRef} style={{ width: `${CAROUSEL_SIZE.width}px`, overflow: "hidden" }}>
        <div style={{ display: "flex", transition: "transform 0.3s", transform: `translateX(-${currentIndex * (CAROUSEL_SIZE.width + GAP_SIZE)}px)` }}>
          {ITEMS.map((item, index) => (
            <CarouselItem key={index} style={{ width: `${CAROUSEL_SIZE.width}px`, marginLeft: index > 0 ? `${GAP_SIZE}px` : "0" }}>
              <CarouselItemImage src={item.image} alt="" width={CAROUSEL_SIZE.width} height={CAROUSEL_SIZE.height} />
              <IconWrapper className="first-icon">
                <Icon name={item.icons[0]} />
              </IconWrapper>
              <IconWrapper className="second-icon">
                <Icon name={item.icons[1]} />
              </IconWrapper>
            </CarouselItem>
          ))}
        </div>
      </CarouselWrapper>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}>
        {ITEMS.map((_, index) => (
          <div
            key={index}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "#333" : "#ccc",
              margin: "0 4px",
            }}
          />
        ))}
      </div>
    </CarouselContainer>
  );
};

export default Carousel;
