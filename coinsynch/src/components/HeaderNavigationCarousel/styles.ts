import styled from 'styled-components'
import theme from '@/styles/theme'
import { Button as ButtonComponet } from '@/components/Button'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 6.25rem;
`

export const DescriptionContainer = styled.div`
  width: 100%;
  flex: 1;
`

export const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
`

export const Image = styled.img`
  width: 24rem;
  display: flex;
  justify-content: center;
`

export const Title = styled.h1`
  color: ${theme.colors.primary.main};
  font-size: ${theme.font.sizes.bold.h1};
  max-width: 36.875rem;
  margin-bottom: 1.5rem;
`

export const Text = styled.h5`
  color: ${theme.colors.textBase};
  font-size: ${theme.font.sizes.regular.h5};
  font-weight: 400;
  max-width: 36.875rem;
  margin-bottom: 2rem;
`

export const Button = styled(ButtonComponet)`
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 4.8125rem;
  padding-right: 4.8125rem;
  font-size: ${theme.font.sizes.bold.body};
  font-weight: 700;
  width: 17.375rem;
`

export const Rectangle = styled.img`
  width: 100%;
  margin-top: 3.5rem;
`

export const Frames = styled.div`
  display: flex;
  margin-top: 5rem;
`