import styled from 'styled-components';
import theme from '@/styles/theme'

export const CarouselItemWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const SymbolText = styled.span`
  color: ${({ theme }) => theme.colors.secondary['800']};
`;

export const PriceText = styled.span`
  color: ${({ theme }) => theme.colors.textBase};
`;

export const PercentageText = styled.span`
  color: ${({ theme, positive }) => (positive ? theme.colors.tertiary['500'] : theme.colors.quartenary['500'])};
  margin-right: 8px;
`;
