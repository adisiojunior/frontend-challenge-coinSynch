import styled from 'styled-components'
import theme from '@/styles/theme'
import { Button as ButtonComponet } from '@/components/Button'
import RectangleSubscribe from '@/assets/rectangle-subscribe.svg'

export const Wrapper = styled.div`
  width: 100%;
  background-image: url(${RectangleSubscribe.src}),
    linear-gradient(
      0.25turn,
      ${theme.colors.primary[500]},
      ${theme.colors.primary[700]}
    );
  background-position: right;
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
`

export const Title = styled.h2`
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.bold.h2};
  margin-bottom: 1rem;
`

export const Subtitle = styled.h4`
  color: ${theme.colors.primary[200]};
  font-size: ${theme.font.sizes.bold.h4};
  margin-bottom: 0.25rem;
`

export const Text = styled.text`
  color: ${theme.colors.white};
  font-size: ${theme.font.sizes.regular.body};
  font-weight: 400;
  max-width: 24.0625rem;
`

export const SubscribeContainer = styled.div`
  display: flex;
`

export const Description = styled.div`
  width: 100%;
  flex: 1;
`

export const FormContainer = styled.div`
  flex: 1;
  display: grid;
  width: 100%;
`

export const Form = styled.form`
  max-width: 24rem;
`

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 0.375rem;
  margin-top: 0.5rem;
  margin-bottom: 1.3125rem;
  padding: 1rem;
`

export const Button = styled(ButtonComponet)`
  width: 100%;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
`
