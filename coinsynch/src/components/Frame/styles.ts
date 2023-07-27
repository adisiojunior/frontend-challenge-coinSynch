import styled from 'styled-components'
import theme from '@/styles/theme'

export const FrameWrapper = styled.div`
  cursor: pointer;
  font-size: ${theme.font.sizes.regular.h5};
  line-height: 2rem;
  width: 6.25rem;
  border-radius: 0.25rem;
  padding: 0.25rem 1rem 0.25rem 1rem;
  text-align: center;
  background-color: ${theme.colors.primary[100]};
  color: ${theme.colors.primary.main};

  & + & {
    margin-left: 3rem;
  }
`