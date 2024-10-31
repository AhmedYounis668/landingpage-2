import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Zoom from 'react-reveal/Zoom';

export const Contact = () => {
  return (
    <Container style={{marginTop:'110px',width:'100%',textAlign:'center'}}>
        <Zoom>
         <div className='contactaddress'>contact@domainname.com</div>
         <Row style={{width:'100%',textAlign:'center'}} className='d-flex justify-content-center mt-4'>
         <div class="button-86" role="button">Use The Form</div>
          
          <h4 className='mt-4 cex'>Cex © 2020 All Rights Reserved.</h4>
         </Row>
         </Zoom>
    </Container>
  )
}
