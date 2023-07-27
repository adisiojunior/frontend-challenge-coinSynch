import { REACT_URL_COINGECKO } from '@/env'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useCoinAPIFetch = () => {
  // const [items, setItems]: any = useState('')
  const [quotes, setQuote]: any = useState('')

  const fetchDate = async () => {
    try {
      const { data } = await axios.get(`${REACT_URL_COINGECKO}`)

      // setItems(data)

      setQuote(data)
    } catch (err) {
      console.log("Error ==>", err)
    }
  }

  useEffect(() => {
    fetchDate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    // items,
    quotes
  }
}

export default useCoinAPIFetch