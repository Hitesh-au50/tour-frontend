import React, { useState, useContext } from 'react'
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import { AuthContext } from '../context/AuthContext'
import { BASE_URL } from '../utils/config'

const Login = () => {

  const [credentials, setCredentials] = useState({
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

    dispatch({ type: 'LOGIN_START' })

    try {

      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      })

      const result = await res.json()
      if (!res.ok) {
        alert(result.message)
        navigate('/login')
      }
      else {
        dispatch({ type: 'LOGIN_SUCCESS', payload: result.data })
        navigate('/')
      }


    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message })
    }
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="login_container d-flex justify-content-center">
              <div className="box">
                <span className="borderLine"></span>
                <Form onSubmit={handleClick}>
                  <h2>Login</h2>
                  <FormGroup className='inputBox'>
                    <input type="email" required id='email' onChange={handleChange} />
                    <span>Email</span>
                    <i></i>
                  </FormGroup>
                  <FormGroup className='inputBox'>
                    <input type="password" required id='password' onChange={handleChange} />
                    <span>Password</span>
                    <i></i>
                  </FormGroup>
                  <Button className='btn' type='submit'>Login</Button>
                  <div className='links d-flex justify-content-between'>
                    <p>Don't have an account?  </p> <Link to='/register'>Create</Link>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login