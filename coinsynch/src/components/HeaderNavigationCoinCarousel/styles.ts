import styled, { css, keyframes} from 'styled-components';
import theme from '@/styles/theme'

export const TopCoinsCarouselWrapper = styled.div`
  height: 100%;
  max-width: 320px;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;


const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const CarouselContainer = styled.div<{ currentIndex: number }>`
  display: flex;
  animation: ${scrollAnimation} 10s linear infinite;
  transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

export const CarouselItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SymbolText = styled.span`
  color: ${theme.colors.textBase};
`;
export const PriceText = styled.span`
  color: ${theme.colors.tertiary['500']};
`;
