import React,{ useEffect } from "react";
import { Container, Row, Col } from "reactstrap";

import Slider from "../components/slider/Slider";
import ProductListBest from "../components/product-list/ProductListBest";
import ImagesGallery from "../components/imagesgallery/ImagesGallery";
import "../styles/home.css";
import Aos from 'aos'
import 'aos/dist/aos.css'

import buptra from '../assets/images/buptra.jpg'
import caycothu from '../assets/images/caycothu.jpg'
import draft from '../assets/images/draft.jpg'

const Home = () => {

  window.scrollTo({ top: 0, behavior: 'smooth' })
  
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <>
        <Row>
          <Col lg='12'>
            <div className='slider'>
              <Slider></Slider>
            </div>
          </Col>
        </Row>
      {/*                    */}
      <section>
        <Container>
          <Row>
            <Col lg='3' data-aos ='fade-up-right'>
              <div className="benefits bg-light d-flex flex-column align-items-center text-center">
                <div className="d-flex justify-content-center">
                <i class="emoji-benefit ri-first-aid-kit-line"></i>
                </div>
                <h6>Chống oxy hóa</h6>
                <p>Giàu chất chống oxy hóa như polyphenol, catechin và flavonoid, giúp bảo vệ cơ thể khỏi 
                  sự tổn thương của các gốc tự do và nguy cơ các bệnh tim mạch, ung thư và tiểu đường.</p>
              </div>
            </Col>
            <Col lg='3' data-aos ='fade-up-left'>
            <div className="benefits bg-white d-flex flex-column align-items-center text-center" >
                <div className="d-flex justify-content-center">
                <i class="emoji-benefit ri-emotion-line"></i>
                </div>
                <h6>Giảm căng thẳng</h6>
                <p>Trà Shan Tuyết chứa L-theanine, một loại axit amino có thể giúp giảm căng thẳng, cải thiện tâm trạng và tăng cường tập trung</p>
              </div>
            </Col>
            <Col lg='3' data-aos ='fade-up-right'>
            <div className="benefits bg-light d-flex flex-column align-items-center text-center">
                <div className="d-flex justify-content-center">
                <i class="emoji-benefit ri-open-arm-line"></i>
                </div>
                <h6>Giảm cân</h6>
                <p>Tăng cường quá trình trao đổi chất, đốt cháy chất béo và 
                  giảm cảm giác đói, giúp trong quá trình giảm cân.</p>
              </div>
            </Col>
            <Col lg='3' data-aos ='fade-up-left'>
            <div className="benefits bg-white d-flex flex-column align-items-center text-center">
                <div className="d-flex justify-content-center">
                <i class="emoji-benefit ri-heart-pulse-line"></i>
                </div>
                <h6>Tim mạch</h6>
                <p>Các nghiên cứu cho thấy rằng việc uống trà có thể giảm nguy cơ mắc các bệnh tim mạch, 
                  bao gồm cả bệnh nhồi máu cơ tim và đột quỵ.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*     */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <h1 className="align-items-center text-center" data-aos='fade'>Top sản phẩm bán chạy</h1>
            </Col>
            </Row>
            <Row data-aos='fade-right'>
            <ProductListBest/>
          </Row>
        </Container>
      </section>
      {/* ==================================================== */}
      <section>
        <Row>
          <div className="buptra d-flex align-items-center text-center p-3" data-aos='fade'>  
            <img src={buptra}  data-aos='fade-left' />
            <div className="text-content" data-aos='fade-up'>
              <h3 className="">Búp trà Shan Tuyết</h3>
              <p>Tận tụy trong việc tuyển chọn những búp trà ngon là yếu tố quan trọng để tạo ra những tách trà tinh tế và đậm đà hương vị.
                Quá trình này bắt đầu từ việc lựa chọn những lá trà tươi mới, không tì vết và đạt chất lượng cao nhất.</p>
            </div>
          </div>
      </Row>  
      <Row>
        <Col lg="12">
          <div className="caycothu d-flex align-items-center text-center p-3 bg-light" data-aos='fade'>
            {/* Sử dụng order để đổi vị trí của hình ảnh và văn bản */}
            <div className="text-content order-1" data-aos='fade-up'>
              <h3>Cây trà Shan Tuyết</h3>
              <p>
              Những cây Trà cổ vẫn hiên ngang đứng vững, trên những cành trắng mốc vết thời gian, búp chè non mạnh mẽ vươn mình. 
                Để tạo nên đặc sản Trà Shan tuyết cổ thụ - thức quà thiên nhiên thuần khiết.
              </p>
            </div>
            <img src={caycothu} alt="" className="order-2"  data-aos='fade-left' />
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg="12">
          <div className="buptra d-flex align-items-center text-center p-3" data-aos='fade'>
            <img src={draft} className='draft' data-aos='fade-left'/>
            <div className="text-content" data-aos='fade-up'>
              <h3 >Ước mơ</h3>
              <p >Bản vẽ nhỏ ban đầu có thể chỉ là một ý tưởng mờ nhạt trên giấy, nhưng với sự nỗ lực, 
                nó có thể biến thành một cửa hàng thực sự đầy sức sống. Từng chi tiết từ bản vẽ được hiện thực hóa, 
                từ cách bố trí không gian, trang trí nội thất, đến việc tạo nên trải nghiệm độc đáo cho khách hàng.</p>
            </div>
          </div>
        </Col>
      </Row>
      </section>
      {/*  ==================================== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <h3 data-aos='flip-left'>Cùng xem một chút về sản phẩm của chúng tôi</h3>
            </Col>
            <Col lg='12' data-aos='slide-up'>
              <ImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home