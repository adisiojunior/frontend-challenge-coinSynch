import styled, { css } from 'styled-components'

type Props = {
  variant?: 'text' | 'contained'
}

export const ButtonWrapper = styled.button<Props>`
  ${({ theme, variant }) => css`
    cursor: pointer;
    font-size: ${theme.font.sizes.regular.label};
    width: 6.25rem;
    border-radius: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
    background-color: ${variant == 'contained'
      ? `${theme.colors.primary.main}`
      : `${theme.colors.white}`};
    color: ${variant == 'contained'
      ? `${theme.colors.white}`
      : `${theme.colors.textBase}`};

    & + & {
      margin-left: 1.5rem;
    }
  `}
`