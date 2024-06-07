import React from 'react'
import {Col} from 'reactstrap'
import Cards from "../../shared/CardsBest";
import productData from "../../assets/data/products";
const ProductListBest = () => {
  return (
    <>
      {productData.map((product) => (
        <Col lg="3" className="mb-4" key={product.id}>
          <Cards product={product} />
        </Col>
      ))}
    </>
  )
}

export default ProductListBest