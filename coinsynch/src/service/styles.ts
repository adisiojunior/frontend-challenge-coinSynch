import styled from 'styled-components';
import theme from '@/styles/theme'

export const CardTopCryptos = styled.div`
  width: 100%;
  text-align: center;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    tr {
      display: grid; /* Alteramos para grid layout */
      grid-template-columns: 1fr 2fr 2fr 2fr 1fr; /* Definimos o layout de 5 colunas com tamanhos proporcionais */
      align-items: center;
      padding: 1rem;
      color: ${theme.colors.secondary['500']};

      th {
        text-align: start;
      }
    }
  }

  tbody {
    tr {
      color: ${theme.colors.textBase};
      display: grid; /* Alteramos para grid layout */
      grid-template-columns: 1fr 2fr 2fr 2fr 1fr; /* Definimos o layout de 5 colunas com tamanhos proporcionais */
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid ${theme.colors.secondary['300']};

      td {
        text-align: start;
        display: flex; /* Adicionamos flex para alinhar a imagem e o texto na segunda coluna */
        align-items: center;
        gap: 5px;
      }
    }

    tr:last-child {
      border-bottom: none;
    }
  }

  button {
    width: 80px;
    height: 32px;
    padding: 8px 16px;
    border-radius: 32px;
    background-color: ${theme.colors.tertiary['700']};
    color: ${theme.colors.white};
    border: none;
    animation: ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.tertiary['800']};
    }
  }
`;

export const Red = styled.span`
  color: ${theme.colors.quartenary['700']};
`;

export const Green = styled.span`
  color: ${theme.colors.tertiary['700']};
`;

export const CryptoSymbol = styled.p`
  color: ${theme.colors.secondary['500']};
`;

export const CryptoName = styled.p`
  color: ${theme.colors.textBase};
`;

export const TableHeader = styled.th`
  /* Estilos para o cabeçalho da tabela */
  /* styleName: Regular/label; */
  //font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: ${theme.colors.secondary['500']};
`;

export const TextButton = styled.span`
  //font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: ${theme.colors.primary['500']};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;