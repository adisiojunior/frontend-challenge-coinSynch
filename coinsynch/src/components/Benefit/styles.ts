import styled from 'styled-components'
import theme from '@/styles/theme'

export const BenefitWrapper = styled.div`
  cursor: pointer;
  width: 17.5rem;
  height: 16.75rem;
  border-radius: 0.375rem;
  padding: 1.5rem;
  background-color: ${theme.colors.white};
  box-shadow: 0px 12px 24px 0px #0000000d;
  margin-right: 2rem;
  margin-bottom: 2rem;
`

export const Title = styled.h4`
  color: ${theme.colors.textBase};
  font-size: ${theme.font.sizes.bold.h4};
  line-height: 2rem;
  margin-bottom: 0.5rem;
`

export const Subtitle = styled.div`
  color: ${theme.colors.primary.main};
  font-size: ${theme.font.sizes.bold.body};
  font-weight: 700;
  line-height: 1.5rem;
  margin-bottom: 0.25rem;
`

export const Text = styled.label`
  color: ${theme.colors.textBase};
  font-size: ${theme.font.sizes.regular.label};
  line-height: 1.5rem;
`
export const Icon = styled.img`
  width: 3.1875rem;
  height: 3.1875rem;
`
