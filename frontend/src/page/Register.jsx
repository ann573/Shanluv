  import React, { useState, useContext } from 'react';
  import { Container, Row, Col } from "reactstrap";
  import { Link, useNavigate } from 'react-router-dom';
  import '../styles/login.css';

  import { AuthContext } from '../context/AuthContext';
  import { BASE_URL } from '../utils/config';

  const Register = () => {
    window.scrollTo({ top: 30, behavior: 'smooth' });

    const [isPassWordVisible, setPassWordVisible] = useState(true);
    const [credentials, setCredentials] = useState({
      username: undefined,
      password: undefined,
    });



    const clickPasswordVisibility = () => {
      setPassWordVisible(!isPassWordVisible);
    };

    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = e => {
      setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
      console.log(e.target.id);
    };

    const handleClick = async e => {
      e.preventDefault();
      try {
        const res = await fetch(`http://localhost:4000/api/v1/auth/register`, {
          method: 'post',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(credentials)
        });
        const result = await res.json();

        navigate('/login');
      } catch (error) {
        console.log(error.message);
      }
    };

    return (
      <div className="fullpage">
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Row>
            <Col lg='5'>
              <div className="login-form text-center">
                <h2>Đăng ký</h2>
                <form className="formdangnhap justify-content-center align-items-center">
                  <div className='mb-3'>
                    <label>Tên đăng nhập:</label>
                    <input type="text" id="username" value={credentials.username} onChange={handleChange} />
                  </div>
                  <div className='password mb-3'>
                    <label>Mật khẩu:</label>
                    <input
                      type={isPassWordVisible ? "password" : "text"} className='password'
                      value={credentials.password}
                      id = "password"
                      onChange={handleChange} />
                    <span onClick={clickPasswordVisibility}> <i className={isPassWordVisible ? "ri-eye-off-line" : "ri-eye-line"}></i> </span>
                  </div>
                  <button onClick={handleClick}>Đăng ký</button>
                  <label className='text text-center'>Đã có tài khoản? <Link to='/login'>Đăng nhập</Link></label>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  export default Register;
