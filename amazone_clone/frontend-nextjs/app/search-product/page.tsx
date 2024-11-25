"use client"

import { useLocalStorage } from '@uidotdev/usehooks'
import { handleProduct } from './Root'

const page = (props:any) => {
  return (
    <>
        {handleProduct(props)}
    </>
  )
}

export default page