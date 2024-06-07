import React, { useState, useEffect, useContext } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { CartContext } from '../context/CartContext';
import './popup.css';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const Popup = ({ isOpen, toggle, productId }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  const { addToCart } = useContext(CartContext);
  const { data: product } = useFetch(productId ? `${BASE_URL}/product/${productId}` : null);

  useEffect(() => {
    if (product) {
      setPrice(product.price);
    }
  }, [product]);

  useEffect(() => {
    if (product) {
      let basePrice = product.price;
      if (selectedOption === 'M') {
        basePrice += 10000;
      }
      setPrice(basePrice * quantity);
    }
  }, [selectedOption, quantity, product]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleOptionClick1 = (option) => {
    setSelectedOption1(option);
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
      const cartItem = {
        id: product.id,
        title: product.title,
        photo: product.photo,
        size: selectedOption,
        type: selectedOption1,
        quantity,
        price: price / quantity, 
      };
      addToCart(cartItem);
      handleClose();
  };

  const handleClose = () => {
    setSelectedOption('');
    setSelectedOption1('');
    setQuantity(1);
    toggle();
  };


  return (
    <Modal isOpen={isOpen} toggle={handleClose} centered>
      <ModalHeader  toggle={handleClose}>
        <h5 className='title_popup'>{product ? product.title : " "}</h5>
      </ModalHeader>
      <ModalBody>
        <img src={product ? product.photo : " "} className='pic' alt="product" />
        <div className="booking">
          <div className='option'>
            <span className='option'><strong>Kích cỡ:</strong></span>
            <span className={selectedOption === 'S' ? 'sizeSelected' : 'size'} onClick={() => handleOptionClick('S')}>S</span>
            <span className={selectedOption === 'M' ? 'sizeSelected' : 'size'} onClick={() => handleOptionClick('M')}>M</span>
          </div>
          <div className="option">
            <span className='option'><strong>Kiểu uống:</strong></span>
            <span className={selectedOption1 === 'Nóng' ? 'sizeSelected' : 'size'} onClick={() => handleOptionClick1('Nóng')}>Nóng</span>
            <span className={selectedOption1 === 'Lạnh' ? 'sizeSelected' : 'size'} onClick={() => handleOptionClick1('Lạnh')}>Lạnh</span>
          </div>
          <div className="option">
            <span className='option'><strong>Số lượng:</strong></span>
            <input type="number" min='1' value={quantity} onChange={handleQuantityChange} />
          </div>
          <div className="option">
            <span className='option'><strong>Giá tiền:</strong></span>
            <span className='price_popup'>{product
              ? <strong>{price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</strong>
              : ''}</span>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <button onClick={handleAddToCart} className='btn_popup'>Đặt hàng</button>
        <button onClick={handleClose} className='btn_popup'>Hủy</button>
      </ModalFooter>
    </Modal>
  );
};

export default Popup;
