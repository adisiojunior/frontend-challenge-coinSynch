"use client"
import Container from '@/components/Container'
import { Table } from '@/components/Table'
import useFetch from '@/Hook/useFetch'
import Image from 'next/image'
import { useState } from 'react'


import * as S from './styles'
import CoinInfoTableService from '@/service/CoinInfoTableService'


function TopCryptos() {
  return (
    <Container>
      <S.TopCryptosContainer id="criptos">
        <S.Title>Top Cryptos</S.Title>
        <CoinInfoTableService />
      </S.TopCryptosContainer>
    </Container>
  )
}

export default TopCryptos
