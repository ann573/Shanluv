import React, { useContext } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import { CartContext } from '../../context/CartContext';
import './cart.css';

const CartModal = ({ isOpen, toggle }) => {
  const { cartItems, clearCart, removeItem } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price*item.quantity, 0);

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalHeader toggle={toggle}>Giỏ hàng của bạn</ModalHeader>
      <ModalBody>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng trống.</p>
        ) : (
          cartItems.map((item,index) => (
            <div key={item.id} className="cart-item">
              <img src={item.photo} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h5>{item.title}</h5>
                <span>Size: {item.size}</span><br />
                <span>Kiểu uống: {item.type}</span><br />
                <span>Số lượng: {item.quantity}</span><br />
                <span>Giá: {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
              </div>
              <i class="ri-delete-bin-line trash" onClick={()=>removeItem(index)}></i>
            </div>
          ))
        )}
        {cartItems.length > 0 && (
          <div className="cart-total">
            <h5>Tổng tiền: {totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
          </div>
        )}
      </ModalBody>
      {cartItems.length > 0 && (
        <ModalFooter>
          <Button color="danger" onClick={clearCart}>Xóa toàn bộ</Button>
          <Button color="success" onClick={clearCart}>Thanh toán</Button>
        </ModalFooter>
      )}
    </Modal>
  );
};

export default CartModal;
