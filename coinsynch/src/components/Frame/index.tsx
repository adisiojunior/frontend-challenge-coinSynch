import React from 'react'

import * as S from './styles'

type Props = {
  className?: string
  children: React.ReactNode
}

const Frame: React.FC<Props> = ({ className, children }) => (
  <S.FrameWrapper className={className}>{children}</S.FrameWrapper>
)

export { Frame }