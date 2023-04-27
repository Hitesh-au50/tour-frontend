import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import logo from '../../assets/images/logo4.png'
import { Link } from 'react-router-dom'

const quick__links = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '/tours',
    display: 'Tours'
  }
]

const quick__links2 = [
  {
    path: '/gallery',
    display: 'Gallery'
  },
  {
    path: '/login',
    display: 'Login'
  },
  {
    path: '/register',
    display: 'Register'
  }
]

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='3'>
            <div className="logo1">
              <img src={logo} alt="" />
              <p>These famous minds knew exactly how addicting travel can be, and we want to share their insights with you.</p>

              <div className="social_links d-flex align-items-center gap-4">
                <span>
                  <Link to='#'><i class="ri-youtube-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-github-fill"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                </span>
                <span>
                  <Link to='#'><i class="ri-instagram-line"></i></Link>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='3'>
            <h5 className='footer_link-title'>Discover</h5>

            <ListGroup className='footer_quick-links'>
              {
                quick__links.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer_link-title'>Quick Links</h5>

            <ListGroup className='footer_quick-links'>
              {
                quick__links2.map((item, index) => (
                  <ListGroupItem key={index} className='ps-0 border-0'>
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))
              }
            </ListGroup>
          </Col>
          <Col lg='3'>
            <h5 className='footer_link-title'>Contact</h5>

            <ListGroup className='footer_quick-links'>

              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-3'>

                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-map-pin-line"></i></span>
                  Address:
                </h6>
                <p className='mb-0'>Mumbai,India</p>
              </ListGroupItem>

            </ListGroup>

            <ListGroup className='footer_quick-links'>

              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-3'>

                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p className='mb-0'>apna.safar@gmail.com</p>
              </ListGroupItem>

            </ListGroup>

            <ListGroup className='footer_quick-links'>

              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-3'>

                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-phone-fill"></i></span>
                  Phone:
                </h6>
                <p className='mb-0'>+0123456789</p>
              </ListGroupItem>

            </ListGroup>
          </Col>

          <Col lg='12'>
            <p className='copyright'>&copy; Copyright {year}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
