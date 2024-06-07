import React, { useContext, useState } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import logo from "../../assets/images/logo.jpg";
import "./header.css";
import CartModal from "../cart/Cart";

const nav_links = [
  { path: "/home", display: "Trang chủ" },
  { path: "/product", display: "Sản phẩm" },
  { path: "/about", display: "Về chúng tôi" },
];

const Header = () => {
  const location = useLocation();
  const btnClass = location.pathname === '/login' ? 'primary__btn' : 'secondary__btn';
  const btnClass1 = location.pathname === '/register' ? 'primary__btn' : 'secondary__btn';

  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const toggleCartModal = () => {
    setCartModalOpen(!isCartModalOpen);
  };

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <Link to="/home"><img src={logo} alt="logo" /></Link>
            </div>
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? "active_link" : ""}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="d-flex align-items-center gap-4">
              {user ? (
                <>
                  <h5 className="mb-0">{user.username}</h5>
                  <div className="shopping" onClick={toggleCartModal}>
                    <i className="ri-shopping-cart-line"></i>
                    <span className="quantity-cart">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
                  </div>
                  <Button className="btn btn-dark" onClick={logout}>Đăng xuất</Button>
                </> 
              ) : (
                <>
                  <Button className={btnClass}><Link to="/login">Đăng nhập</Link></Button>
                  <Button className={btnClass1}><Link to="/register">Đăng ký</Link></Button>
                </>
              )}
            </div>
          </div>
        </Row>
      </Container>
      <CartModal isOpen={isCartModalOpen} toggle={toggleCartModal} />
    </header>
  );
};

export default Header;
