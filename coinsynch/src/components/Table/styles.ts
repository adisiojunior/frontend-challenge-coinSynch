import styled from 'styled-components'
import theme from '@/styles/theme'

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${theme.colors.textBase};
  font-size: ${theme.font.sizes.regular.body};
  height: 4rem;

  tr:nth-of-type(2n + 2) {
    background: ${theme.colors.secondary[100]};
  }
  th {
    font-size: ${theme.font.sizes.regular.label};
    color: ${theme.colors.secondary.main};
  }
  td,
  th {
    text-align: left;
    vertical-align: middle;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  td {
    height: 4rem;
  }
`
