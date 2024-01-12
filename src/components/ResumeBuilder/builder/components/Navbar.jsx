import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function MyResponsiveNavbar() {
  return (
    <Navbar style={{ backgroundColor: '#232D3F' }} expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="https://myfuse.in/home">
          <h1 style={{ fontSize: '30px', fontWeight: '600', letterSpacing: '0.8px' }}>
            MyFuse<span style={{ color: '#f96f59' }}>.</span>In
          </h1>
          <div style={{ width: '4rem', position: 'absolute', top: '2.5rem' }}>
            {/* Your SVG Code */}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://myfuse.in/home" style={{ color: 'white' }}>
              Home
            </Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={<span style={{ color: 'white' }}>Ashutosh Kumar</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyResponsiveNavbar;
