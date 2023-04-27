import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/subscribe.jpg'

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="newsletter_content">
                            <h2>Register our page for getting useful travelling information</h2>

                            <div className="newsletter_input">
                                <input type="email" placeholder='Enter your email' />
                                <button className="btn newsletter_btn">Subscribe</button>
                            </div>
                            <p>Perhaps travel cannot prevent bigotry, but by demonstrating that all peoples cry, laugh, eat, worry, and die, it can introduce the idea that if we try and understand each other, we may even become friends</p>
                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="newsletter_img">
                            <img src={maleTourist} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter