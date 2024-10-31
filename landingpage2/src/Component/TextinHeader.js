import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Bounce from 'react-reveal/Bounce';

export const TextinHeader = () => {
  return (
    <Container className='textheadercontainer'>
      <Bounce>

        <Row  className='d-flex justify-content-center w-100' style={{textAlign:'center'}}><div className='divider'></div> </Row>
<Row style={{marginTop:'50px',textAlign:'center'}}>
    <h4 className='textinfo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text <span style={{color:'red'}}>ever since the 1500s.</span></h4>
</Row>
</Bounce>

    </Container>
  )
}
