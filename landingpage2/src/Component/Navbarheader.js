import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 import logo from '../Images/logo-dark.png'
 import { NavBarHook } from './NavBarHook';

export const Navbarheader = () => {
     const [,,,,,,]=NavBarHook();
  return (
    <div>
         <Navbar  expand="lg" className="navbarstyle d-none d-md-block" id='nav1'>
      <Container className=' d-flex justify-content-center navcontainer'  >
      <Row className='d-flex w-100' >
        {/* <Col sm={2} md={2} className=' d-flex justify-content-center' style={{padding:'0px',color:'white'}}><img id='logo' className='logoheader' src={logo} alt='logo' loading='lazy'/></Col> */}

        <Col    sm={12}  className=' d-flex justify-content-center flex-wrap w-100' > 
        
        {/* ===== */}
        <div id='leftside'  className='d-flex  justify-content-start mx-2 ' style={{width:'20%'}} >
        <div className='navlink' >Home</div>
            <div className='navlink'>About</div>
            <div className='navlink' >Services</div>

            </div>

            <div  id='logocontainer' style={{textAlign:'center'}} ><img id='logoappear'  className='logoheader' src={logo} alt='logo' loading='lazy'/></div>

{/* ===== */}
            <div className='d-flex  justify-content-end ' >
            <div className='navlink' >Works</div>
            <div className='navlink' >News</div>
            <div className='navlink' >Contact</div>
            </div>
            </Col>
      </Row>
         

         
      </Container>

    </Navbar>



     {/* ==========================================================mobile screen */}




     <Navbar  expand="lg" className="navbarstyle d-block d-md-none" id='nav2'>
      <Container className=' d-flex justify-content-center navcontainer'  >
      <Row className='d-flex w-100' >
        <Col sm={12}  className=' d-flex justify-content-center' style={{padding:'0px',color:'white'}}><img id='logo' className='logoheader' src={logo} alt='logo' loading='lazy'/></Col>

        <Col    sm={12}  className=' d-flex justify-content-center flex-wrap w-100'  > 
        
        {/* ===== */}
        <div className='navlink' >Home</div>
            <div className='navlink'>About</div>
            <div className='navlink' >Services</div>


            {/* <div  id='logocontainer' style={{textAlign:'center'}} ><img id='logoappear'  className='logoheader' src={logo} alt='logo' loading='lazy'/></div> */}

{/* ===== */}
            <div className='navlink' >Works</div>
            <div className='navlink' >News</div>
            <div className='navlink' >Contact</div>
            </Col>
      </Row>
         

         
      </Container>

    </Navbar>



{/* ============================================================ */}

    </div>


        //     <header class="container-fluid a " id='nav1'>
        //     <div class="text-center hidden-xs">
        //         {/* <!-- navigation start --> */}
        //         <nav class="header-navigation fadeIn-element" >
        //             <a  className="link-underline-menu" href="#top">Home</a>
        //             <a class="link-underline-menu" href="#about">About</a>
        //             <a class="link-underline-menu" href="#services">Services</a>
        //             <span class="logo-holder closed"><a href="#top"><img style={{border:'2px solid yellow'}} alt="Logo" src={logo} /></a></span>
        //             <a class="link-underline-menu" href="#works">Works</a>
        //             <a class="link-underline-menu" href="#news">News</a>
        //             <a class="link-underline-menu" href="#contact">Contact</a>
        //         </nav>
        //         {/* <!-- navigation end --> */}
        //     </div>
            
        // </header>
  )
}
