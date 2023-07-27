import React from 'react'

import * as S from './styles'

type Props = {
  className?: string
  children: React.ReactNode
  variant?: 'text' | 'contained'
  type?: 'button' | 'submit'
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  className,
  children,
  variant = 'contained',
  type = 'button',
  onClick
}) => (
  <S.ButtonWrapper
    type={type}
    variant={variant}
    onClick={onClick}
    className={className}
  >
    {children}
  </S.ButtonWrapper>
)

export { Button }