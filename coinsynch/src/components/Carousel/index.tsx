"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { cx } from "class-variance-authority";
import { debounce } from "@/utils/debounce";
import { Icon, IconName } from "@/components/Icons/Icon";
import { CarouselContainer, CarouselItem, CarouselItemImage,  CarouselWrapper,  IconWrapper } from "./styles";

interface Items {
    image: string
    icons: [IconName, IconName]
}

const GAP_SIZE = 112;
const CAROUSEL_SIZE = {
    width: 215,
    height: 280,
    // width: 385,
    // height: 500,
}
const MIN_DELAY = 4;
const MAX_DELAY = 6;

const ITEMS: Items[] = [
    { image: "/woman.svg", icons: ["bitcoin", "increase-chart"] },
    { image: "/man.svg", icons: ["laptop-mobile", "crypto"] },
    { image: "/woman2.svg", icons: ["bitcoin", "increase-chart"] },
]

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
  
    const steps = ITEMS.map((__, index) => (CAROUSEL_SIZE.width + GAP_SIZE) * index);
  
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
        <CarouselWrapper ref={containerRef}>
          <CarouselWrapper style={{ transform: `translateX(-${80 * currentIndex}%)` }}>
            {ITEMS.map((item, index) => (
              <CarouselItem key={index} className={currentIndex !== index ? "inactive-item" : "active-item"}>
                <CarouselItemImage src={item.image} alt="" width={0} height={0} />
                <IconWrapper className="first-icon">
                  <Icon name={item.icons[0]} />
                </IconWrapper>
                <IconWrapper className="second-icon">
                  <Icon name={item.icons[1]} />
                </IconWrapper>
              </CarouselItem>
            ))}
          </CarouselWrapper>
        </CarouselWrapper>
      </CarouselContainer>
    );
  };
  
  export default Carousel;