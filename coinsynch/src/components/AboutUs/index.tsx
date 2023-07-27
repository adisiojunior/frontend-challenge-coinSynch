import { Benefit } from '@/components/Benefit'
import Container from '@/components/Container'
import Bitcoin from '@/assets/bitcoin.svg'
import Sync from '@/assets/sync.svg'
import Graphic from '@/assets/graphic.svg'
import Computer from '@/assets/computer.svg'

import * as S from './styles'

function AboutUs() {
  return (
    <S.Wrapper>
      <Container>
        <S.AboutUsContainer id="about">
          <S.BenefitsContainer>
            <S.BenefitsLine1>
              <Benefit
                icon={Bitcoin.src}
                title="Cypto Solutions"
                subtitle="For your company"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{' '}
              </Benefit>
              <Benefit
                icon={Sync.src}
                title="Cypto Solutions"
                subtitle="For your company"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{' '}
              </Benefit>
            </S.BenefitsLine1>

            <S.BenefitsLine2>
              <Benefit
                icon={Graphic.src}
                title="Cypto Solutions"
                subtitle="For your company"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{' '}
              </Benefit>
              <Benefit
                icon={Computer.src}
                title="Cypto Solutions"
                subtitle="For your company"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam,{' '}
              </Benefit>
            </S.BenefitsLine2>
          </S.BenefitsContainer>

          <S.DescriptionContainer>
            <S.Subtitle>Lorem ipsum</S.Subtitle>
            <S.Title>Lorem ipsum</S.Title>
            <S.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor
            </S.Text>
            <S.Button variant="contained">Sign up now</S.Button>
          </S.DescriptionContainer>
        </S.AboutUsContainer>
      </Container>
    </S.Wrapper>
  )
}

export default AboutUs
