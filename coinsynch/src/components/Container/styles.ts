
import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    width: 100%;
    padding-left: 7rem;
    padding-right: 7rem;
    margin: 0 auto;
  `}
`;