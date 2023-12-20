import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import  Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Packages from './pages/Packages';
import About from './pages/About';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Signup from './pages/Signup';

import { FaShoppingCart } from "react-icons/fa";
import { Dropdown, NavbarCollapse,Badge,FormControl } from 'react-bootstrap';


function App() {
  return (
    <div >
     <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
      <Container>
        <Navbar.Brand>
          <Link to="/" className='navbar-brand text-success fw-semibold'>
            DI Tur 
            </Link>
          </Navbar.Brand>
          
          


          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
                  <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
                  <Nav.Link href='/paskages' className='text-uppercase'>Packages</Nav.Link>
                  <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>
                  <Nav.Link href='/contact' className='text-uppercase'>Contact</Nav.Link>
                  <Nav.Link href='/shop' className='text-uppercase'>Shop</Nav.Link>
                 
                  <Nav.Link href='/login' className='text-uppercase'>Login/Register</Nav.Link>
                  
                  

            </Nav>
            </Navbar.Collapse> 
      </Container>
      </Navbar>


      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/paskages' element={<Packages/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/shop' element={<Shop/>}/>
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/> 
        
      </Routes>

      
      

    </div>
  );
}

export default App;
