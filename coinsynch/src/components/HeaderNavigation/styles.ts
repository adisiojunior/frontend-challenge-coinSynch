import styled from 'styled-components'
import theme from '@/styles/theme'
import Link from 'next/link'

export const Wrapper = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Links = styled.div``

export const Buttons = styled.div``

export const LinkComponent = styled(Link)`
  margin-left: 2.5rem;
  text-decoration: none;
  //font-size: ${theme.font.sizes.regular.label};
  color: ${theme.colors.textBase};
  text-align: center;
`

export const Logo = styled.img`
  width: 7.75rem;
  height: 1.3125rem;
  margin-right: 2.5rem;
`

export const CarouselWrapper = styled.div`
  /* Adicione os estilos conforme necessário */
  .xl\:mr-14 {
    /* Estilos para a classe xl:mr-14 */
  }
  .xl\:static {
    /* Estilos para a classe xl:static */
  }
  /* ... e assim por diante para as demais classes */

  /* Estilos para a div interna */
  display: flex;
  items: center;
  justify-content: center;
  height: 9rem; /* Ajuste o valor de acordo com o desejado */
  border-bottom: 1px solid ${theme.colors.secondary["200"]};
  border-top: 1px solid ${theme.colors.secondary["200"]};
`;
