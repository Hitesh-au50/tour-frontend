import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import v1 from '../assets/images/v1.mp4'
import v3 from '../assets/images/v3.mp4'
import v4 from '../assets/images/v4.mp4'
import Newsletter from '../shared/Newsletter';

import '../styles/about.css';

function About() {



  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='4'>
              <div className="hero_img-box hero_video-box">
                <video src={v1} alt='' autoPlay={true} loop muted />
              </div>

            </Col>
            <Col lg='4'>
              <div className="hero_img-box hero_video-box mt-4">
                <video src={v3} alt="" autoPlay={true} loop muted />
              </div>

            </Col>
            <Col lg='4'>
              <div className="hero_img-box hero_video-box mt-5">
                <video src={v4} alt="" autoPlay={true} loop muted />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='history'>
                {/* <h1>Our history</h1> */}
                <h1 class="heading1">
                    <span>H</span>
                    <span>I</span>
                    <span>S</span>
                    <span>T</span>
                    <span>O</span>
                    <span>R</span>
                    <span>Y</span>
                  </h1>
                <p>Apna Safar....World Travel  is an Indian based company that helps our citizens with the travelling process. Thanks to our technology, we develop an web site capable to identify which type of places you need to visit and ensure the less waiting time and less amount for you when applying for it.

                  Our team also, will manually review your application in case our system identify your case a very special one. They have been expertly trained and they are capable to ensure you will get your tour in the less time needed.And gonna enjoy alot </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='history'>
                {/* <h1>Our Mission</h1> */}
                <h1 class="heading1">
                    <span>O</span>
                    <span>U</span>
                    <span>R</span> &nbsp;
                    <span>M</span>
                    <span>I</span>
                    <span>S</span>
                    <span>S</span>
                    <span>I</span>
                    <span>O</span>
                    <span>N</span>
                  </h1>
                <p>Our mission is to touch the horizon where our capabilities may successfully meet the requirements of our clients,that too with ultimate transparency and cost effectiveness</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='history'>
                {/* <h1>Our Vision</h1> */}
                <h1 class="heading1">
                    <span>O</span>
                    <span>U</span>
                    <span>R</span> &nbsp;
                    <span>V</span>
                    <span>I</span>
                    <span>S</span>
                    <span>I</span>
                    <span>O</span>
                    <span>N</span>
                  </h1>
                <p>To sow the seed of par-excellence sevices with customer centric approach and reap the trust of world wide clients.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className='history'>
        <h2>Thank you for giving us the opportunity to serve you our services......</h2>
      </div>
      <Newsletter />

    </>
  )
}

export default About