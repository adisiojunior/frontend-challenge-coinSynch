import styled from "styled-components";

const MIN_DELAY = 4;
const MAX_DELAY = 6;

export const CarouselContainer = styled.div`
  position: absolute;
  top: 100px;
  right: 0;
  width: 640px;
  height: 500px;
  @media (max-width: 767px) {
    width: 388px;
    height: 280px;
  }
`;

export const CarouselWrapper = styled.div`
  overflow-x: hidden;
  padding-left: 10px;
`;

export const CarouselItem = styled.div`
  position: relative;
`;

export const CarouselItemImage = styled.img`
  max-width: none;
  width: 384px;
  height: 499px;
  @media (max-width: 767px) {
    width: 215px;
    height: 278px;
  }
`;

export const IconWrapper = styled.div`
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  animation: float;
  animation-duration: ${(Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY)}s;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  @media (max-width: 767px) {
    width: 10px;
    height: 10px;
  }
  background-color: #edf2f7;
  border-radius: 10px;
  position: absolute;
  &.first-icon {
    top: 20px;
    left: -10px;
  }
  &.second-icon {
    top: 80px;
    right: -10px;
  }
`;

export const ActiveItem = styled.div`
  opacity: 1;
`;

export const InactiveItem = styled.div`
  opacity: 0.5;
`;