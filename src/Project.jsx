import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';






const Project = () => {

  return (
    <div>
      <div className='container-fluid md-12 aa '>
      
      
          <Navbar expand="md ab " className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><h1><b>Estore.</b></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-md-0 "
            style={{ maxHeight: '100px',  }}
            navbarScroll
          >&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <Nav.Link href="#action1"><b> Home</b></Nav.Link>
            <Nav.Link href="#action2"> <b>Categore</b></Nav.Link>
            <NavDropdown title=<b>Latest</b> id="navbarScrollingDropdown">

              <NavDropdown.Item href="#action3"><b>Product List</b></NavDropdown.Item>
              <NavDropdown.Item href="#action4"> <b>Product Details</b>
              </NavDropdown.Item>
            </NavDropdown>
              <NavDropdown title=<b>Blog</b> id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><b>Blog</b></NavDropdown.Item>
              <NavDropdown.Item href="#action4"><b>Blog Details</b>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title=<b>Pages</b> id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3"><b>Login</b></NavDropdown.Item>
              <NavDropdown.Item href="#action4"><b>Card</b>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5"> <b>Element</b></NavDropdown.Item>
              <NavDropdown.Item href="#action6"><b>About</b></NavDropdown.Item>
              <NavDropdown.Item href="#action7"><b>Confirmation</b></NavDropdown.Item>
              <NavDropdown.Item href="#action8"><b>Shopping Cart</b></NavDropdown.Item>
              <NavDropdown.Item href="#action9"><b>Product Checkout</b></NavDropdown.Item>


            </NavDropdown>
            <Nav.Link href="#action1"><b>Contact</b></Nav.Link>
          </Nav>
          <Form className="d-flex pe-5"> 
            <Form.Control
              type="search"
              placeholder="Search products"
              className="me-2"
              aria-label="Search"
            />&nbsp; &nbsp; &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="48" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
             <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.6 7.6 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
            </svg> &nbsp; &nbsp; &nbsp;
            <svg  xmlns="http://www.w3.org/2000/svg" width="38" height="48" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
            </svg >&nbsp; &nbsp; &nbsp; &nbsp;
            <Button variant="primary">Sigin</Button>
            
          

          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div className='container-fluid md-12 bb pt-5'>
      <div className='row'>
        <div className=' col ba'>
          <img src='https://preview.colorlib.com/theme/estore/assets/img/hero/hero_man.png'></img>

        </div>
       <div className=' col  bc ps-5'>
        <h1><i> 60% Discount</i></h1>
        <p style={{ fontSize:'90px', fontWeight:'bold'}}><i> Winter</i></p>
        <p style={{ fontSize:'90px', fontWeight:'bold'}}><i> Collection</i></p>

        <h3><i>Best Cloth Collection By 2024</i></h3>
        <Button variant="primary">Shop Now</Button>

          
         </div>
  
      </div> 
    </div>
    <div className='container-fluid md-12 '>
    <div className='row  text-center bd'>
        <h1><b>Shop by category</b></h1>
    </div>
    </div>

  <div className='container-fluid md-12 '>
   <div className='row  cf text-center'>
   <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat1.jpg" />
        <Card.Body >
          <Card.Title><i><h2>Owmen's</h2></i></Card.Title>
          <Card.Text>
          <p style={{ fontSize:'30px' }}><i> Best Deals<br></br>New Collection</i></p>

            
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat2.jpg" />
        <Card.Body>
          <Card.Title><i><h2>Winter Cloths</h2></i></Card.Title>
          <Card.Text>
          <p style={{ fontSize:'30px' }}><i> Best Deals<br></br>New Collection</i></p>

          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://preview.colorlib.com/theme/estore/assets/img/categori/cat3.jpg" />
        <Card.Body>
          <Card.Title><i><h2>Man's Cloths</h2></i></Card.Title>
          <Card.Text>
          <p style={{ fontSize:'30px' }}><i> Best Deals<br></br>New Collection</i></p>

          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>


    

      </div>
      
    </div>
    <div className='container-fluid md-12 fa'>
    <Navbar >
        <Container>
          <Navbar.Brand href="#home"><h1><i><b>Latest Products</b></i></h1></Navbar.Brand>
          <Nav className="fb">
            <Nav.Link href="#home"><b>All</b></Nav.Link>
            <Nav.Link href="#features"><b>New</b></Nav.Link>
            <Nav.Link href="#pricing"><b>Featured</b></Nav.Link>
            <Nav.Link href="#pricing"><b>Offered</b></Nav.Link>

          </Nav>
        </Container>
      </Navbar>

  </div>
  <div className='container-fluid hh'>
    <div className='row md-12  pt-5 text-center'>
    <div class="card-group">
  <div class="card">
    <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/product4.png" class="card-img-top" alt="..."></img>
    <div class="card-body">
      <h5 class="card-title"><i>Green Dress with details <br></br><br></br>$40.00 $60.00</i> </h5>
    </div>
  </div>
  <div class="card">
    <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/product5.png" class="card-img-top" alt="..."></img>
    <div class="card-body">
    <h5 class="card-title"><i>Green Dress with details <br></br><br></br>$40.00 $60.00</i> </h5>

    </div>
  </div>
  <div class="card">
    <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/product6.png" class="card-img-top" alt="..."></img>
    <div class="card-body">
    <h5 class="card-title"><i>Green Dress with details <br></br><br></br>$40.00 $60.00</i> </h5>

    </div>
  </div>
</div>
<div class="card-group">
 <div class="card">
  <div className='hh text-start ps-5 pt-5'><Button variant="danger">New</Button></div>

    <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/product2.png" class="card-img-top" alt="..."></img>
    <div class="card-body">
    <h5 class="card-title"><i>Green Dress with details <br></br><br></br>$40.00 $60.00</i> </h5>

    </div>
  </div>
  <div class="card">
  <div className='hh text-start ps-5 pt-5'><Button variant="danger">New</Button></div>

    <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/product3.png" class="card-img-top" alt="..."></img>
    <div class="card-body">
    <h5 class="card-title"><i>Green Dress with details <br></br><br></br>$40.00 $60.00</i> </h5>

    </div>
  </div>
  <div class="card">

  <div className='hh text-start ps-5 pt-5'><Button variant="danger">New</Button></div>

    <img src="https://preview.colorlib.com/theme/estore/assets/img/categori/product1.png" class="card-img-top " alt="..."></img>
    <div class="card-body">
    <h5 class="card-title"><i>Green Dress with details <br></br><br></br>$40.00 $60.00</i> </h5>


    </div>
  </div>
</div>
 </div>
</div>

<div className='container-fluid'>
 <div className='row ha md-12'>
  <div className='col hd md-6 ps-5 '>
  <img src='https://preview.colorlib.com/theme/estore/assets/img/categori/card-man.png'></img>
    

  </div>
  <div className='col md-6'>
  <p style={{ fontSize:'60px' }}><b> Find The Best Product <br></br>From Our Shop </b></p>
  <p>Designers who are interesten creating state of the.</p>
  <br></br><br></br>
  <p style={{ fontSize:'60px',}}><b> New Collections</b></p>

  <Button variant="dark">Shop Now</Button>
 
    <br></br><br></br> <br></br><br></br> 

 &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
 &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  
  
 <img src='https://preview.colorlib.com/theme/estore/assets/img/categori/card-shape.png'></img>


  </div>
    


  </div>
</div>
<div className='container-fluid bg-white'>
<div className='row ia ps-5'>
  <div className='col  ib md-4 pt-5'>
  <p style={{ fontSize:'40px' }}><b> Best Collection <br></br>Of This Month </b></p>
  <p>Designers who are interesten crea.</p>
  <br></br><br></br>
 <Button variant="primary">Shop Now</Button>
 <br></br>  <br></br>  <br></br>
 <p style={{ fontSize:'40px' }}><b> Pants Collection</b></p>
 <br></br><br></br>


 <img src='https://preview.colorlib.com/theme/estore/assets/img/collection/collection1.png'></img>

  </div>

  <div className='col md-4'>
    <img src='https://preview.colorlib.com/theme/estore/assets/img/collection/collection2.png'></img>
  
  </div>
  <div className='col  ic md-4 pt-5'>
    <p style={{ fontSize:'40px', color:'blue' }}><b> Menz Winter Jackets</b></p><br></br><br></br>
    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
    <Button variant="warning">T-Shirts</Button>
    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;

   <img src='https://preview.colorlib.com/theme/estore/assets/img/collection/collection3.png'></img><br></br>
    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <br></br><br></br>
    <Button variant="dark">Order Now</Button>
    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;

    <img src='https://preview.colorlib.com/theme/estore/assets/img/collection/collection5.png'></img><br></br>
    <br></br><br></br>



    <Button variant="danger">Winter Jackets</Button>
    &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 

    <img src='https://preview.colorlib.com/theme/estore/assets/img/collection/collection4.png'></img>
    

  </div>


  
</div>
</div>

<div className='container-fluid'>
<div className='row ja md-12 ps-5'>
 <div className='col  jb md-6 ps-5'>
   <p style={{ fontSize:'50px' }}><b> <i>Get Our <br></br>Latest Offers News</i></b></p>
   <p style={{ fontSize:'20px' }}>Subscribe New Latter</p>




  
  
  </div> 
 <div className='col  jc md-6 pt-5 ps-5'>
  <input type='text' placeholder='Your email here'></input>
  <Button variant="primary">Shop Now</Button>

  </div> 

</div>
</div>

<div className='container-fluid'>
  <div className='row jd md-12 ps-5 pe-5'>
   <div className='col je md-4'>
    <div class='card ps-5 pt-5'>
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
    </svg>

    <div class='card-body'>
      <div class='card-title pt-3'>
      <p style={{ fontSize:'20px' }}><b>Free Shipping Method</b></p>
      <p>aorem ixpsacdolor sit<br></br> ameasecur adipisicing elitsf<br></br> edasd.</p>


      </div>
    </div>
    </div>
    </div> 
   <div className='col je md-4'>
    <div class='card ps-5 pt-5'>
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
    </svg>
   <div class='card-body'>
      <div class='card-title pt-3'>
      <p style={{ fontSize:'20px' }}><b>Secure Payment System</b></p>
      <p>aorem ixpsacdolor sit<br></br> ameasecur adipisicing elitsf<br></br> edasd.</p>



      </div>
      
    </div>
    </div>

    </div> 
   <div className='col je md-4'>
    <div class="card ps-5 pt-5">
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
    <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
    <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
    </svg>
   <div class='card-body'>

      <div class='card-title pt-3'>
      <p style={{ fontSize:'20px' }}><b>Secure Payment System</b></p>
      <p>aorem ixpsacdolor sit<br></br> ameasecur adipisicing elitsf<br></br> edasd.</p>




      </div>
    </div>
    </div>

    </div> 

  </div>
</div>

<div className=' container-fluid'>
  <div className='row ka md-12 ps-5 '>
    <div className='col kb md-3'>
      <img src='https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery1.jpg' className='img-fluid'></img>
    </div>
    <div className='col kb md-2 '>
    <img src='https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery2.jpg' className='img-fluid'></img>

    </div>
    <div className='col kb md-2'>
    <img src='https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery3.jpg' className='img-fluid'></img>

    </div>
    <div className='col kb md-2'>
    <img src='https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery4.jpg' className='img-fluid'></img>

    </div>

    <div className='col kb md-3'>
    <img src='https://preview.colorlib.com/theme/estore/assets/img/gallery/gallery5.jpg' className='img-fluid'></img>

    </div>

  </div>
</div>

<div className='container-fluid'>
<div className='row la md-12 ps-5 pe-5'>
  <div className='col md-3 ps-5 '>
    <h1><b> Estore.</b></h1><br></br>
    <p style={{ fontSize:'17px',color:'grey' }}><b>Lorem ipsum dolor sit amet,<br></br>
    consectetur adipisicing elit.<br></br>
    dolor ratione reiciendis hic,<br></br> quos dicta aut? Odio.</b></p>

    

  </div>
  <div className='col md-3 a'>
  <p style={{ fontSize:'22px' }}><b>Quick Links</b></p><br></br>
  <p style={{color:'grey'}}>
  <a> <b>About</b></a><br></br><br></br>
  <a><b> Offers & Discounts</b></a><br></br><br></br>
  <a><b> Get Coupon</b></a><br></br><br></br>
  <a> <b> Support</b></a></p>
  




  </div>
  <div className='col md-3'>
  <p style={{ fontSize:'22px' }}><b>New Products</b></p><br></br>
  <p style={{color:'grey'}}>

  <a> <b>Woman Cloths</b></a><br></br><br></br>
  <a> <b>Fashion Accessoreies</b></a><br></br><br></br>
  <a> <b>Man Accessoreies</b></a><br></br><br></br>
  <a> <b>Rubber Made Toys</b></a><br></br></p>


  </div>
  <div className='col md-3'>
  <p style={{ fontSize:'22px' }}><b>Support</b></p><br></br>
  <p style={{color:'grey'}}>

  <a> <b>Frequently Asked Questions</b></a><br></br><br></br>
  <a> <b>Terms & Conditions</b></a><br></br><br></br>
  <a> <b>Privacy Policy</b></a><br></br><br></br>
  <a> <b>Privacy Policy</b></a><br></br><br></br>
  <a> <b>Report a Payment Isssue</b></a></p>



  



  </div>


</div>
</div>

<div className=' container-fluid'>
  <div className='row jj'>
  <p style={{ fontSize:'18px', color:"grey" }}><b>Copyright ©2024 All rights reserved | This template is made with &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-heart" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>&nbsp;  by Colorlib

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;






<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-twitter" viewBox="0 0 16 16">
  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
</svg>&nbsp;&nbsp;&nbsp;

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>&nbsp;&nbsp;&nbsp;

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-behance" viewBox="0 0 16 16">
  <path d="M4.654 3c.461 0 .887.035 1.278.14.39.07.711.216.996.391s.497.426.641.747c.14.32.216.711.216 1.137 0 .496-.106.922-.356 1.242-.215.32-.566.606-.997.817.606.176 1.067.496 1.348.922s.461.957.461 1.563c0 .496-.105.922-.285 1.278a2.3 2.3 0 0 1-.782.887c-.32.215-.711.39-1.137.496a5.3 5.3 0 0 1-1.278.176L0 12.803V3zm-.285 3.978c.39 0 .71-.105.957-.285.246-.18.355-.497.355-.887 0-.216-.035-.426-.105-.567a1 1 0 0 0-.32-.355 1.8 1.8 0 0 0-.461-.176c-.176-.035-.356-.035-.567-.035H2.17v2.31c0-.005 2.2-.005 2.2-.005zm.105 4.193c.215 0 .426-.035.606-.07.176-.035.356-.106.496-.216s.25-.215.356-.39c.07-.176.14-.391.14-.641 0-.496-.14-.852-.426-1.102-.285-.215-.676-.32-1.137-.32H2.17v2.734h2.305zm6.858-.035q.428.427 1.278.426c.39 0 .746-.106 1.032-.286q.426-.32.53-.64h1.74c-.286.851-.712 1.457-1.278 1.848-.566.355-1.243.566-2.06.566a4.1 4.1 0 0 1-1.527-.285 2.8 2.8 0 0 1-1.137-.782 2.85 2.85 0 0 1-.712-1.172c-.175-.461-.25-.957-.25-1.528 0-.531.07-1.032.25-1.493.18-.46.426-.852.747-1.207.32-.32.711-.606 1.137-.782a4 4 0 0 1 1.493-.285c.606 0 1.137.105 1.598.355.46.25.817.532 1.102.958.285.39.496.851.641 1.348.07.496.105.996.07 1.563h-5.15c0 .58.21 1.11.496 1.396m2.24-3.732c-.25-.25-.642-.391-1.103-.391-.32 0-.566.07-.781.176s-.356.25-.496.39a.96.96 0 0 0-.25.497c-.036.175-.07.32-.07.46h3.196c-.07-.526-.25-.882-.497-1.132zm-3.127-3.728h3.978v.957h-3.978z"/>
</svg>&nbsp;&nbsp;&nbsp;
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg>





</b></p>


 
  </div>
</div>






  

</div>
  


    
  )
}

export default Project
