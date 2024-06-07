import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import {useParams} from 'react-router-dom'
import products_list from '../assets/data/products-list'
import '../styles/productdetail.css'
const ProductDetail = () => {

    const {id} = useParams()
    const product = products_list.find(product=>product.id === id)

  return (
    <section>
        <Container>
            <Row>
                <Col lg='8'>
                    <img src={product.photo} alt="" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default ProductDetail