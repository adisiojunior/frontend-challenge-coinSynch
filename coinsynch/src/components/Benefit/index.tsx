import React from 'react'

import * as S from './styles'

type Props = {
  className?: string
  title: string
  subtitle: string
  children: React.ReactNode
  icon: string
}

const Benefit: React.FC<Props> = ({
  className,
  title,
  subtitle,
  children,
  icon
}) => (
  <S.BenefitWrapper className={className}>
    <S.Icon src={icon} />
    <S.Subtitle>{subtitle}</S.Subtitle>
    <S.Title>{title}</S.Title>
    <S.Text>{children}</S.Text>
  </S.BenefitWrapper>
)

export { Benefit }
