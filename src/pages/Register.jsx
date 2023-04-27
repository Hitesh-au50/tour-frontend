import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/register.css'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Register = () => {

  const [credentials, setCredentials] = useState({
    userName: undefined,
    email: undefined,
    password: undefined
  })

  const { dispatch } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleChange = e => {
    setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }


  const handleClick = async e => {
    e.preventDefault()

    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      const result = await res.json()

      if (!res.ok) {
        alert(result.message)
        navigate('/register')
      }
      else {
        dispatch({ type: 'REGISTER_SUCCESS' })
        navigate('/login')
      }

    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <section>
      <div className="wrapper">
        <Container className='main'>
          <Row className='dow'>
            <Col md='6' className='side-image'>
              {/* ============ Image ============= */}
              <div className="text">
                <p>join us <i>:APNA SAFAR</i></p>
              </div>
            </Col>


            <Col md='6' className='right'>
              <div className="input-box">
                {/* <header>Register</header> */}
                <header class="heading2">
                    <span>R</span>
                    <span>E</span>
                    <span>G</span>
                    <span>I</span>
                    <span>S</span>
                    <span>T</span>
                    <span>E</span>
                    <span>R</span>
                  </header>
                <Form onSubmit={handleClick} >
                  <FormGroup className='input-field'>
                    <input type="text" className='input' required id='username' onChange={handleChange} />
                    <label htmlFor="username">Username</label>
                  </FormGroup>
                  <FormGroup className='input-field'>
                    <input type="email" className='input' required id='email' onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                  </FormGroup>
                  <FormGroup className='input-field'>
                    <input type="password" className='input' required id='password' onChange={handleChange} />
                    <label htmlFor="password">Password</label>
                  </FormGroup>
                  <Button className='submit' type='submit'>Create Account</Button>
                </Form>
                <div className="signin">
                  <p>Already have an account? <Link to='/login'>Login</Link> </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}


export default Register
