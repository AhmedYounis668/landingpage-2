import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import img1 from '../Images/bg2.jpeg'
import img2 from '../Images/works-5.jpeg'
import CountUp from 'react-countup';
import Bounce from 'react-reveal/Bounce';
import Container from 'react-bootstrap/esm/Container'

export const ThreecolumnsPhotos = () => {
  return (
    <Container className='d-flex justify-content-center w-100'  >
      <Bounce>
    <div className='threecolumnimagesrow d-flex justify-content-center' style={{textAlign:'center'}}>
        <Col  className='boximage '   xs={12} md={5} style={{textAlign:'center'}}>
          <img  className='imagstyle  '  src={img1} loading='lazy' alt='image-1'/>
        </Col>
        <Col className='boximage ' style={{textAlign:'center'}} xs={12} md={5}>
        <div  style={{marginTop:'50px'}}>
        <h4 >Years in business</h4>

        <CountUp start={0} end={99} delay={0} scrollSpyOnce={true} enableScrollSpy={true} scrollSpyDelay={2}>
  {({ countUpRef }) => (
    <div style={{marginTop:'50px',fontSize:'50px'}}>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
        <h6  className='d-flex flex-wrap' style={{marginTop:'50px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  dummy text ever since the 1500s.</h6>

        </div>
         

        </Col>
        <Col className='boximage'  xs={12} md={2}>
        <img className='imagstyle'  src={img2} loading='lazy' alt='image-2'/>
        </Col>
    </div>
    </Bounce>
    </Container>
  )
}
