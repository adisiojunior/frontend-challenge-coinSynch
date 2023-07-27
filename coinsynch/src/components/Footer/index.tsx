import Container from '@/components/Container'
import * as S from './styles'

import LogoCoinSynch from '@/assets/coin-synch.svg'

function Footer() {
  return (
    <S.Wrapper>
      <Container>
        <S.FooterContainer>
          <S.Text> Copyright @ 2023 - All rights reserved</S.Text>

          <S.Logo src={LogoCoinSynch.src} alt="CoinSynch Logo"></S.Logo>
        </S.FooterContainer>
      </Container>
    </S.Wrapper>
  )
}

export default Footer
