"use client"
import useFetch from '@/Hook/useFetch'
import React, { useEffect } from 'react'

interface Quote {
  asset_id: string,
  price_usd: number
}

const Quote = () => {
  const { quotes }: any = useFetch()

  return (
    <ul className='quote_time-real'>
      {
        quotes && quotes.map((name: QuotesTypes) => (
          <li key={name.id}>
            <p>{name.symbol.toLocaleUpperCase()}</p>
            <p>{'R$' + `${name.current_price.toLocaleString('pt-BR')}`}</p>
            <p
              className={`${name.price_change_percentage_24h < 0 ? 'red' : 'gren'}`}
            >
              {name.price_change_percentage_24h > 0 ?
                `${'+' + name.price_change_percentage_24h}`
                :
                name.price_change_percentage_24h}
            </p>
          </li>
        ))
      }
    </ul>
  )
}

export default Quote