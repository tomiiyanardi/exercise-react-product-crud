import {Container, Nav, Navbar} from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';

 const Header = () => {

  const navigate = useNavigate();

  return (
    <Navbar expand="lg" style={{backgroundColor:'grey', padding:'20px'}}>
      <Container>
        <Navbar.Brand onClick={() => navigate ('/')}><img src='src/assets/images/logo.png' style={{height: "40px", width:"40px", marginRight:"10px"}}/>React-Vite-TypeScript</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate ('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate ('/components')}>Componentes</Nav.Link>
            <Nav.Link onClick={() => navigate ('/admin')}>Administración</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
} 

export default Header;