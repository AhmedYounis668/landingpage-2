import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import { Photosessioncard } from './Photosessioncard'
import img1 from '../Images/works-2.jpeg'
import img2 from '../Images/works-1.jpeg'
import img3 from '../Images/works-3.jpeg'
import img4 from '../Images/works-8.jpeg'
import img5 from '../Images/about-bg-2.jpeg'
import img6 from '../Images/works-6.jpeg'
import { Potosessioncardbig } from './Potosessioncardbig'
import Roll from 'react-reveal/Roll';

export const PhotoSession = () => {
  return (
    <Container>
      <Roll>
          <Row>
        <Col xs={12} md={6}>
        
      <Photosessioncard title='Logo Discription' img={img1}/> 

        </Col>


        <Col xs={12} md={6}>

        <Photosessioncard title='Web Discription' img={img2}/>       

        </Col>
   
        <Col xs={12} md={12}>

<Potosessioncardbig title='Web Discription' img={img3}/>       

</Col>

<Col style={{marginTop:'50px'}} xs={12} md={6}>

        <Photosessioncard title='Web Discription' img={img4}/>       

        </Col>

        <Col style={{marginTop:'50px'}} xs={12} md={6}>
        
      <Photosessioncard  title='Logo Discription' img={img5}/> 

        </Col>

        <Col style={{marginTop:'10px'}} xs={12} md={12}>

<Potosessioncardbig title='Web Discription' img={img6}/>       

</Col>
      </Row>
      </Roll>
    </Container>
  )
}
