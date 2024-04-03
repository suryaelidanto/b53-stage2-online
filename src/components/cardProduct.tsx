import React from 'react'
import { IProduct } from '../interface/product'

const CardProduct = (props: IProduct) : React.JSX.Element => {
  return (
    <div>
      <div style={{width: "250px", backgroundColor: "red"}}>

      <img src={props.image} alt='card-image' style={{width: "100%"}}/>
      </div>

      <div>
        <p>{props.title}</p>
        <p>Rp.{props.price}</p>
      </div>
    </div>
  )
}

export default CardProduct