import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import img1 from '../Images/services-bg-1.jpeg'
import img2 from '../Images/services-bg-2.jpeg'
import CountUp from 'react-countup'
export const FourSections = () => {
  return (
    <Container style={{textAlign:'center',marginTop:'100px'}}>
        <Row>
        <Col  xs={12} md={6} style={{height:'460px'}}>
        <div style={{marginTop:'10px'}}>
        <h4>BRAND</h4>
        <h2 className='my-3'>DESIGN</h2>
        <CountUp start={0} end={100} delay={0} scrollSpyOnce={true} enableScrollSpy={true} scrollSpyDelay={2}>
  {({ countUpRef }) => (
    <div style={{marginTop:'50px',fontSize:'50px'}}>
      <span ref={countUpRef} /><span>%</span>
    </div>
  )}
</CountUp>
        <h5  className='d-flex flex-wrap justify-content-center text4section'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h5>
        </div>
        
        </Col>
        <Col  xs={12} md={6}><img className='imagstyle4section' src={img1} alt='image-here' loading='lazy'/></Col>
      </Row>
      <Row className='row2foursections'>
        <Col  xs={12} md={6}>
        <img className='imagstyle' src={img2} alt='image-here' loading='lazy'/>
        </Col>
        <Col  xs={12} md={6}>
        <div style={{marginTop:'60px'}}>
        <h4>Corporate</h4>
        <h2 className='my-3'>Identity
        </h2>
        <CountUp start={0} end={100} delay={0} scrollSpyOnce={true} enableScrollSpy={true} scrollSpyDelay={2}>
  {({ countUpRef }) => (
    <div style={{marginTop:'10px',fontSize:'50px'}}>
      <span ref={countUpRef} /><span>%</span>
    </div>
  )}
</CountUp>

        <h5  className='d-flex flex-wrap justify-content-center text4section'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h5>
        </div>
        </Col> 
      </Row>
    </Container>
  )
}
