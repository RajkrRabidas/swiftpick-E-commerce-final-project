import React from 'react'
import Hero from '../Components/Hero/Hero'
import Item from '../Components/Item/Item'
import Newsletter from '../Components/Newsletter/Newsletter'
import Testtimonial from '../Components/Testimonial/Testtimonial'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Item/>
      <ProductDisplay/>
      <Testtimonial/>
      <Newsletter/>
    </div>
  )
}

export default Shop
