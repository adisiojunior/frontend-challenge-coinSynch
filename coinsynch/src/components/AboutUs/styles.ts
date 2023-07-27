import styled from 'styled-components'
import theme from '@/styles/theme'
import { Button as ButtonComponet } from '@/components/Button'

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 7.5rem;
  padding-bottom: 8.125rem;
  background: linear-gradient(to bottom, ${theme.colors.white}, #f7f7f7);
`

export const AboutUsContainer = styled.div`
  display: flex;
`

export const BenefitsContainer = styled.div`
  flex: 1;
`

export const BenefitsLine1 = styled.div`
  display: flex;
`

export const BenefitsLine2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 6.5rem;
`

export const DescriptionContainer = styled.div`
  flex: 1;
  padding-top: 9.625rem;
`

export const Subtitle = styled.h5`
  color: ${theme.colors.primary.main};
  font-size: ${theme.font.sizes.bold.h5};
  margin-bottom: 0.25rem;
`

export const Title = styled.h2`
  color: ${theme.colors.textBase};
  font-size: ${theme.font.sizes.bold.h2};
  margin-bottom: 1rem;
`

export const Text = styled.div`
  color: ${theme.colors.textBase};
  font-size: ${theme.font.sizes.regular.body};
  font-weight: 400;
  line-height: 1.5rem;
  width: 25.375rem;
`

export const Button = styled(ButtonComponet)`
  margin-top: 2.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2.78rem;
  padding-right: 2.78rem;
  font-size: ${theme.font.sizes.regular.body};
  font-weight: 700;
  width: auto;
`
