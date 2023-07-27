import Container from '@/components/Container'
import HappyWoman from '@/assets/happy-woman.svg'
import Rectangle from '@/assets/rectangle.svg'

import * as S from './styles'
import { Frame } from '@/components/Frame'
import Carousel from '@/components/Carousel'

function HeaderNavigationCarousel() {
  return (
    <>
      <Container>
        <S.Wrapper>
          <S.DescriptionContainer>
            <S.Title>Lorem ipsum dolor sit amet, consectetur</S.Title>
            <S.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </S.Text>
            <S.Button variant="contained">SIGN UP NOW</S.Button>
            <S.Frames>
              <Frame>Cryptos</Frame>
              <Frame>NFTs</Frame>
              <Frame>Games</Frame>
            </S.Frames>
          </S.DescriptionContainer>
          <S.ImageContainer>
            <Carousel />
          </S.ImageContainer>
        </S.Wrapper>
      </Container>
      <S.Rectangle src={Rectangle.src}></S.Rectangle>
    </>
  )
}

export default HeaderNavigationCarousel