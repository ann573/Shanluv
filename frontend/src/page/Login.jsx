import React, { useState, useContext } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { BASE_URL } from '../utils/config';
import '../styles/login.css';

const Login = () => {
  window.scrollTo({ top: 30, behavior: 'smooth' });

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [isPassWordVisible, setPassWordVisible] = useState(true);
  const clickPasswordVisibility = () => {
    setPassWordVisible(!isPassWordVisible);
  };

  const handleChange = (e) => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await fetch(`http://localhost:4000/api/v1/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
      });
      const result = await res.json();
      console.log(result.data);
      dispatch({ type:'LOGIN_SUCCESS', payload: {user: result.data} });

      navigate('/');
      
    } catch (error) {
      dispatch({ type:'LOGIN_FAILURE', payload: error.message });
    }
  };

  return (
    <div className="fullpage">
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Row>
          <Col lg='5'>
            <div className="login-form text-center">
              <h2>Đăng nhập</h2>
              <form className="formdangnhap justify-content-center align-items-center">
                <div className='mb-3'>
                  <label>Tên đăng nhập:</label>
                  <input type="text"
                    id='username'
                    value={credentials.username}
                    onChange={handleChange} />
                </div>
                <div className='password mb-3'>
                  <label>Mật khẩu:</label>
                  <input type={isPassWordVisible ? "password" : "text"}
                    className='password'
                    id='password'
                    value={credentials.password}
                    onChange={handleChange} />
                  <span onClick={clickPasswordVisibility}>
                    <i className={isPassWordVisible ? "ri-eye-off-line" : "ri-eye-line"}></i>
                  </span>
                </div>
                <button onClick={handleClick}>Đăng nhập</button>
                <label className='text text-center'>Chưa có tài khoản? <Link to='/register'>Đăng ký</Link></label>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
