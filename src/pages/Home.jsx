import React from 'react'
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
// my own
import heroImg from '../assets/images/home1.jpg'
import heroImg02 from '../assets/images/home2.jpg'
import heroImg05 from '../assets/images/home5.jpg'
import heroImg04 from '../assets/images/home4.jpg'
// end
import heroImg03 from '../assets/images/hero-video1.mp4'
import heroImg06 from '../assets/images/hero-video04.mp4'
import worldImg from '../assets/images/logo4.png'
// import Subtitle from './../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import experienceImg from '../assets/images/experience1.png'
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return (
    <>
      {/*============ hero section start ============*/}
      <section>
        <Container>
          <Row>
            <Col lg='2'>
              <div className="hero_img-box  mt-5">
                <img src={heroImg04} alt='' controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box hero_video-box mt-4">
                <video src={heroImg06} alt="" autoPlay={true} loop muted />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box">
                <img src={heroImg05} alt='' />
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero_img-box">
                <img src={heroImg} alt='' controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box hero_video-box mt-4">
                <video src={heroImg03} alt="" autoPlay={true} loop muted />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero_img-box mt-5">
                <img src={heroImg02} alt='' />
              </div>
            </Col>
            <Col lg='12'>
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-centre">
                  {/* <Subtitle subtitle={'know before you go'} /> */}
                  <h1 class="heading3">
                    <span>K</span>
                    <span>N</span>
                    <span>O</span>
                    <span>W</span> &nbsp;
                    <span>B</span>
                    <span>E</span>
                    <span>F</span>
                    <span>O</span>
                    <span>R</span>
                    <span>E</span> &nbsp;
                    <span>Y</span>
                    <span>O</span>
                    <span>U</span> &nbsp;
                    <span>G</span>
                    <span>O</span>
                  </h1>
                  <img src={worldImg} alt='' />
                </div>
                <h1>Work, Travel, Save, Repeat,{' '}<span className='highlight'>love</span>
                </h1>
                <p>Between vacations, many daydream about what adventures the next trip holds. You can spend your days switching back and forth from looking at your favorite travel photos to trying to go about your day to day life. But a few friendly reminders that the next adventure is closer than you think can help you put your wanderlust to rest. And one of the best distractions comes with this list of travel quotes.</p>
              </div>

            </Col>
            {/* searchbar component */}
            <SearchBar />
            {/* end  */}
          </Row>
        </Container>
      </section>
      {/*============ hero section ends ===========*/}
      <section>
        <Container>
        {/* services section started */}
          <Row>
            <Col lg='3'>
              <h5 className="services_subtitle">Our services</h5>
              <h2 className='services_title'>We offer you our best </h2>
            </Col>
            {/* servicelist component call */}
            <ServiceList />
            {/* end */}
          </Row>
        </Container>
      </section>
      {/* service section ended */}

      {/*========== featured tour started ===========*/}
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              {/* <Subtitle subtitle={"Explore"} /> */}
              <h1 class="heading1">
                    <span>E</span>
                    <span>X</span>
                    <span>P</span>
                    <span>L</span>
                    <span>O</span>
                    <span>R</span>
                    <span>E</span>
                  </h1>
              <h2 className='featured_tour-title'> Features tours</h2>
            
            </Col>
            {/* images gallery section started */}
            <FeaturedTourList />
            {/* end */}
          </Row>
        </Container>
      </section>


      {/*============ featured tour ends ============*/}

      {/* ======== experience section start ============ */}

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience_content">
                {/* <Subtitle subtitle={'Experience'} /> */}
                <h1 class="heading1">
                    <span>E</span>
                    <span>X</span>
                    <span>P</span>
                    <span>E</span>
                    <span>R</span>
                    <span>I</span>
                    <span>E</span>
                    <span>N</span>
                    <span>C</span>
                    <span>E</span>
                  </h1>

                <h2>With all our efforts and love <br /> we will serve you</h2>
                <p>“When preparing to travel, lay out all your clothes and all your money. Then take half the clothes and twice the money.” – Susan Heller <br />
                  Vacation calories don’t count. Right .</p>
              </div>

              <div className="counter_wrapper d-flex align-item-center gap-5">
                <div className="counter_box">
                  <span>12k+</span>
                  <h6>Successful trip</h6>
                </div>
                <div className="counter_box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter_box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience_img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ======== experience section end ============ */}

      {/* =========== gallery section start ============ */}

      <section>
        <Container>
          <Row>
            <Col lg="12">
              {/* <Subtitle subtitle={'Gallery'} /> */}
              <h1 class="heading1">
                    <span>G</span>
                    <span>A</span>
                    <span>L</span>
                    <span>L</span>
                    <span>E</span>
                    <span>R</span>
                    <span>Y</span>
                  </h1>
              <h2 className="gallery_title">
                Our tour gallery
              </h2>
            </Col>
            <Col lg='12'>
            {/* component of images */}
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* =========== gallery section end ============ */}

      {/* ============= testimonial section start =============== */}

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {/* <Subtitle subtitle={'Fans Love'} /> */}
              <h1 class="heading1">
                    <span>F</span>
                    <span>A</span>
                    <span>N</span>
                    <span>S</span> &nbsp;
                    <span>L</span>
                    <span>O</span>
                    <span>V</span>
                    <span>E</span>
                  </h1>
              <h2 className="testimonial_title">
                What our clients say about us
              </h2>
            </Col>
            <Col lg='12'>
            {/* comment component called */}
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>

      {/* ============= testimonial section end =============== */}
{/* subscribe  */}
      <Newsletter />
    </>
  )
}

export default Home
