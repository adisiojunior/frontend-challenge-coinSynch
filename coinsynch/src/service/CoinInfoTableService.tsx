"use client"
import useFetch from '@/Hooks/useCoinAPIFetch'
import Image from 'next/image'
import { useState } from 'react'
import { CardTopCryptos, Red, Green, CryptoSymbol, CryptoName, TableHeader, TextButton } from './styles'

const CoinInfoTableService = () => {
  const { quotes }: any = useFetch()

  return (
    <CardTopCryptos>
      <table>
        <thead>
          <tr>
            <TableHeader>#</TableHeader>
            <TableHeader>Crypto</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Change</TableHeader>
            <TableHeader>Trade</TableHeader>
          </tr>
        </thead>
        <tbody>
          {
            quotes && quotes.map((name: QuotesTypes) => (
              
              <tr key={name.id}>
                <td>
                  <p key={name.id}>{name.market_cap_rank}</p>
                </td>
                <td>
                  <Image
                    src={name.image}
                    alt=''
                    width={20}
                    height={20}
                  />
                  <CryptoName key={name.name}>{name.name}</CryptoName>
                  <CryptoSymbol key={name.symbol}>{name.symbol.toUpperCase()}</CryptoSymbol>
                </td>
                <td>
                  <CryptoName key={name.id}>US$ {name.current_price.toLocaleString('pt-BR')}</CryptoName>
                </td>
                <td>
                <p key={name.id}>
                    {/* Utilize os componentes estilizados Red e Green */}
                    {name.price_change_percentage_24h > 0 ? (
                      <Green>{`+${name.price_change_percentage_24h}`}</Green>
                    ) : (
                      <Red>{name.price_change_percentage_24h}</Red>
                    )}
                  </p>
                </td>
                <td>
                  <p key={name.id}>
                    <button>Buy</button>
                  </p>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <TextButton>View more +</TextButton>

    </CardTopCryptos>
  )
}

export default CoinInfoTableService