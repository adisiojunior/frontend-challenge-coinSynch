import styled from 'styled-components';
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

export const CarouselContainer = styled.div.attrs(props => ({
  style: {
    transform: `translateX(-${props.currentIndex * 100}%)`,
  },
}))`
  /* Estilos do carousel */
  /* ... */

  /* Estilos do contêiner que será animado */
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  transition: transform 0.5s ease-in-out;
`;

export const CarouselItemLabel = styled.div`
  display: flex;
  gap: 2rem;
  color: ${theme.colors.secondary['800']};

  .text-default {
    color: ${theme.colors.textBase};
  }

  .text-tertiary-500 {
    color: ${theme.colors.tertiary['500']};
  }

  .text-quartenary-500 {
    color: ${theme.colors.quartenary['500']};
  }
`;