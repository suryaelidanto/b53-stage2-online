import React, { useContext } from 'react'
import { productContext } from '../context/product'

const CardProduct = (): React.JSX.Element => {
  const { product } = useContext(productContext)

  return (
    <div>
      <div style={{ width: "250px", backgroundColor: "red" }}>

        <img src={product.image} alt='card-image' style={{ width: "100%" }} />
      </div>

      <ProductDescription />
    </div>
  )
}

const ProductDescription = () => {
  const { product } = useContext(productContext)

  return (
    <div>
      <p>{product.title}</p>
      <p>Rp.{product.price}</p>
    </div>
  )
}

export default CardProduct