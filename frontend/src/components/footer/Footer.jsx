import React from "react";
import "./footer.css";

import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/images/logo.jpg";

const quick__links = [
  {
    path: "/home",
    display: "Trang chủ",
  },
  {
    path: "/product",
    display: "Sản phẩm",
  },
  {
    path: "/about",
    display: "Về chúng tôi",
  },
];

const quick__links2 = [
  {
    path: "/login",
    display: "Đăng nhập",
  },
  {
    path: "/register",
    display: "Đăng ký",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
          </Col>

          <Col lg="3">
            <h5 className="footer_link-title">Khám phá</h5>
            <ListGroup className="footer_quick-links">
              {quick__links.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Phím tắt</h5>
            <ListGroup className="footer_quick-links">
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className="ps-0 border-0">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3">
            <h5 className="footer_link-title">Liên hệ</h5>
            <ListGroup className="footer_quick-links">
              <ListGroupItem className="ps-0 border-0 align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-cente gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <span>Address:</span>
                </h6>
                <p className="mb-0 address"> <b>CS1:</b> 5/10/121 Chùa Láng, Đống Đa, Hà Nội <br />
                <b>CS2:</b> 02 Tô Hiến Thành, Hai Bà Trưng, Hà Nội <br />
                <b>CS3:</b> Comming Soon...
                </p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-cente gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <span>Email:</span>
                </h6>
                <p className="mb-1">shanluv.freshtea@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-cente gap-2">
                  <span>
                    <i className="ri-phone-fill"></i>
                  </span>
                  <span>Phone number:</span>
                </h6>
                <p className="mb-1">+84 3320 44444</p>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col lg='12'>
          <div className="social_links d-flex align-item-center justify-content-center gap-4">
                <span>
                  <a href="https://www.tiktok.com/@trasuashanluv">
                    <i className="ri-steam-line"></i>
                </a>
                </span>
                <span>
                  <a href="https://www.facebook.com/shanluv">
                    <i className="ri-facebook-circle-line"></i>
                  </a>
                </span>
                <span>
                  <a href="https://www.instagram.com/shanluv.freshtea/">
                    <i className="ri-instagram-line"></i>
                  </a>
                </span>
              </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
