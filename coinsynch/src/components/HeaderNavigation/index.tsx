import Container from '@/components/Container'
import { Button } from '@/components/Button'
import LogoCoinSynch from '@/assets/coin-synch.svg'

import * as S from './styles'
import { Suspense, useState } from 'react'
import HeaderNavigationCoinCarousel from '@/components/HeaderNavigationCoinCarousel'
import SignIn from '@/components/Auth/modalAuth/signin'

function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        console.log("Clicado!!")
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
  return (
    <Container>
      <S.Wrapper>
        <S.Logo src={LogoCoinSynch.src} alt="CoinSynch Logo"></S.Logo>
        <S.Links>
          <S.LinkComponent href="#about">About Us</S.LinkComponent>
          <S.LinkComponent href="#criptos">Top Cryptos</S.LinkComponent>
        </S.Links>
        <S.CarouselWrapper>
          <Suspense fallback="Loading...">
            <HeaderNavigationCoinCarousel />
          </Suspense>
        </S.CarouselWrapper>

        <S.Buttons>
          <Button variant="text" onClick={openModal}>Sign in</Button>
          {isOpen && <SignIn />}
          <Button variant="contained">Sign up</Button>
        </S.Buttons>
      </S.Wrapper>
    </Container>
  )
}

export default HeaderNavigation;
