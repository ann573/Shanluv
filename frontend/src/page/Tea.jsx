import React, { useState } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from 'reactstrap'
import { NavLink,Link } from 'react-router-dom';
import Popup from '../shared/Popup'
import Slider from '../components/slider/Slider'

import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'

import "../styles/product.css"

const MilkTea = () => {
  let { data: products, loading, error } = useFetch(`${BASE_URL}/product`)
  products = products.filter((data)=>{
        return data.typeOf === 'tea'
  })
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleModal = (productId) => {
    setSelectedProduct(productId);
    setIsOpen(!isOpen);
  }
  return (
    <>
      <Slider />
      <Container>
        <Row>
          <Col lg='12'>
            <div className='mt-5 d-flex align-items-center justify-content-center'>
              <h1>Trà Shan Tuyết</h1>
            </div>
          </Col>
        </Row>

      </Container>

      <Container>
      <Row>
        <Col lg='12'>
          <div className="nav gap-3 ps-1">
            <Link to='/product'>
              Tất cả sản phẩm
            </Link>
            <NavLink to='/product/milk-tea' activeClassName="active">
              Trà sữa
            </NavLink>
            <NavLink to='/product/tea' activeClassName="active">
              Trà nguyên chất
            </NavLink>
          </div>
        </Col>
      </Row>
    </Container>

      <Container>
        {loading && <h4 className='text-center pt-5'>Loading....</h4>}
        {error && <h4 className='text-center pt-5'>{error}</h4>}
        {
          !loading && !error && <Row>
            {products.map((product) => (
              <Col lg='3' className='mb-1 mt-4' key={product._id}>
                <Card className='card-product'>
                  <img src={product.photo} alt="" />
                  <CardBody>
                    <CardSubtitle className='text-center card-sub'>
                      {product.typeOf === 'tea' ? 'Trà nguyên chất' : 'Trà sữa'}
                    </CardSubtitle>
                    <CardTitle>
                      <div className="titleProduct">
                        <h3>{product.title}</h3>
                      </div>
                    </CardTitle>
                    <CardText>
                      {product.desc}
                    </CardText>
                    <div className='price'>
                      <strong>{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</strong>
                    </div>
                    <Button className='btn-card' onClick={() => toggleModal(product._id)}>
                      Đặt ngay
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        }
        <Popup isOpen={isOpen} toggle={() => toggleModal(null)} productId={selectedProduct} />
      </Container>
    </>
  )
}

export default MilkTea