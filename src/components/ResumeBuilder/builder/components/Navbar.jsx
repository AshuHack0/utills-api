import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import axios from 'axios';




const getUser = async () => {
  try {
    const response = await axios.get('https://myfuse.in/dashboard/api.php', {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.status === 200) {
      throw new Error('Network response was not ok');
    }

    const data = response.data;
    console.log('Data fetched successfully:', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};


function MyResponsiveNavbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserAndSetUser = async () => {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error('Error setting user:', error);
      }
    };

    fetchUserAndSetUser();
  }, []);
  

   

  return (
    <Navbar style={{ backgroundColor: '#232D3F' }} expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="https://myfuse.in/home">
          <h1 style={{ fontSize: '30px', fontWeight: '600', letterSpacing: '0.8px' }}>
            MyFuse<span style={{ color: '#f96f59' }}>.</span>In
          </h1>
          
            <div style={{width:'4rem' , position:'absolute' , top:'2.5rem' ,  }} ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168.67 33.93"><defs><linearGradient id="badge_1" x1="135.795" y1="16.965" x2="24.21" y2="16.965" gradientUnits="userSpaceOnUse"><stop stop-color="#A066FF"></stop><stop offset="1" stop-color="#666CFF"></stop></linearGradient></defs><path d="M168.6,6.17c0.24-1.54-0.2-3.11-1.21-4.3C166.37,0.68,164.89,0,163.33,0h-8.64c-1.77,0-3.4,0.88-4.39,2.31 C149.33,0.91,147.72,0,145.93,0h-8.29c-0.75,0-1.46,0.17-2.11,0.45C134.86,0.16,134.14,0,133.39,0h-6.62c-1.37,0-2.63,0.53-3.58,1.4 C122.21,0.5,120.93,0,119.6,0h-6.56c-0.77,0-1.5,0.18-2.17,0.48c-0.68-0.31-1.44-0.48-2.2-0.48h-6.62c-0.81,0-1.57,0.2-2.26,0.52 C99.08,0.19,98.29,0,97.49,0h-8.64c-1.77,0-3.4,0.88-4.39,2.31C83.49,0.91,81.88,0,80.08,0h-8.29c-0.68,0-1.34,0.13-1.94,0.37 C69.24,0.13,68.58,0,67.91,0H52.14c-1.89,0-3.57,1-4.52,2.53C45.01,0.68,41.78,0,38.53,0h-8.7c-1.71,0-3.24,0.82-4.23,2.1 C23.12,0.59,20.16,0,17.17,0H8.95C6.32,0,4.09,1.91,3.68,4.5L0.07,27.38c-0.24,1.54,0.2,3.11,1.21,4.3c1.02,1.19,2.5,1.87,4.06,1.87 h6.59c2.62,0,4.86-1.91,5.27-4.51l0.52-3.31c1.22-0.1,2.42-0.3,3.59-0.64l-0.36,2.29c-0.24,1.54,0.2,3.11,1.21,4.3 c1.02,1.19,2.5,1.87,4.06,1.87h6.53c1.23,0,2.37-0.43,3.28-1.15c0.92,0.72,2.07,1.15,3.28,1.15h6.66c0.44,0,0.87-0.06,1.29-0.16 c0.41,0.1,0.84,0.16,1.28,0.16h16.32c0.57,0,1.12-0.11,1.65-0.28c0.54,0.18,1.11,0.28,1.69,0.28h5.85c1.01,0,1.96-0.29,2.78-0.79 c0.81,0.49,1.76,0.79,2.76,0.79h2.18c1.01,0,1.97-0.29,2.8-0.8c0.83,0.52,1.8,0.8,2.8,0.8h6.53c0.81,0,1.57-0.2,2.26-0.52 c0.71,0.34,1.49,0.52,2.3,0.52h6.62c2.07,0,3.89-1.2,4.77-2.98c2.99,2.51,6.9,3.36,10.71,3.36c3.32,0,6.55-0.66,9.31-2.42 c0.04,0.06,0.08,0.12,0.13,0.17c1.02,1.19,2.5,1.87,4.06,1.87h5.85c1.01,0,1.96-0.29,2.78-0.79c0.81,0.49,1.76,0.79,2.76,0.79h2.18 c1.01,0,1.97-0.29,2.8-0.8c0.83,0.52,1.8,0.8,2.8,0.8h6.53c2.62,0,4.85-1.91,5.27-4.5L168.6,6.17z" fill="#fff"></path><path d="M 8.9492188 5.3300781 L 5.3300781 28.210938 L 11.919922 28.210938 L 13.130859 20.470703 L 16.039062 20.470703 C 21.799062 20.470703 25.640625 17.559375 25.640625 11.859375 C 25.620625 7.829375 22.649922 5.3300781 17.169922 5.3300781 L 8.9492188 5.3300781 z M 52.140625 5.3300781 L 48.519531 28.210938 L 64.839844 28.210938 L 65.640625 23.160156 L 55.849609 23.160156 L 56.519531 18.929688 L 63.910156 18.929688 L 64.609375 14.320312 L 57.259766 14.320312 L 57.859375 10.390625 L 67.109375 10.390625 L 67.910156 5.3300781 L 52.140625 5.3300781 z M 71.789062 5.3300781 L 68.179688 28.210938 L 74.029297 28.210938 L 76.310547 13.880859 L 79.570312 28.210938 L 81.740234 28.210938 L 89.609375 13.880859 L 87.339844 28.210938 L 93.869141 28.210938 L 97.490234 5.3300781 L 88.849609 5.3300781 L 82.550781 17.460938 L 80.080078 5.3300781 L 71.789062 5.3300781 z M 102.05078 5.3300781 L 98.429688 28.210938 L 105.05078 28.210938 L 108.66992 5.3300781 L 102.05078 5.3300781 z M 113.05078 5.3300781 L 110.9707 18.359375 C 109.8807 25.169375 113.58906 28.599609 120.53906 28.599609 C 126.82906 28.599609 130.16039 25.719064 131.15039 19.539062 L 133.39062 5.3300781 L 126.76953 5.3300781 L 124.63086 18.960938 C 124.15086 21.970937 123.22086 23.439453 120.63086 23.439453 C 117.91086 23.439453 116.9793 21.869063 117.5293 18.539062 L 119.60938 5.3300781 L 113.05078 5.3300781 z M 137.63086 5.3300781 L 134.01953 28.210938 L 139.86914 28.210938 L 142.15039 13.880859 L 145.41016 28.210938 L 147.58984 28.210938 L 155.46094 13.880859 L 153.18945 28.210938 L 159.7207 28.210938 L 163.33008 5.3300781 L 154.68945 5.3300781 L 148.39062 17.460938 L 145.92969 5.3300781 L 137.63086 5.3300781 z M 29.820312 5.3398438 L 26.210938 28.220703 L 32.740234 28.220703 L 34.019531 20.029297 L 35.560547 20.029297 L 39.300781 28.220703 L 45.960938 28.220703 L 41.640625 18.779297 C 44.700625 17.969297 46.910156 15.670078 46.910156 11.830078 C 46.940156 7.8000782 44.099531 5.3398436 38.519531 5.3398438 L 29.820312 5.3398438 z M 14.720703 10.199219 L 16.480469 10.199219 C 18.430469 10.199219 19.419922 11.029609 19.419922 12.599609 C 19.409922 14.839609 18.140781 16.019531 15.800781 16.019531 L 13.820312 16.019531 L 14.720703 10.199219 z M 35.580078 10.259766 L 37.660156 10.259766 C 39.550156 10.259766 40.54 11.030859 40.5 12.630859 C 40.51 14.810859 39.229297 15.769531 37.029297 15.769531 L 34.720703 15.769531 L 35.580078 10.259766 z" fill="url(#badge_1)"></path></svg></div>
     
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://myfuse.in/login-con/index.php" style={{ color: 'white' }}>
              Home
            </Nav.Link>
          </Nav>
          <Nav>
          {/* <Nav.Link href="https://myfuse.in/login-con/index.php" style={{ color: 'white' }}>
              Login
            </Nav.Link>
            <Nav.Link href="https://myfuse.in/login-con/index.php" style={{ color: 'white' }}>
              Create Account
            </Nav.Link> */}
            <NavDropdown title={<span style={{ color: 'white' }}>{user ? user.name : 'Unknown User'}</span>} id="basic-nav-dropdown">
              <NavDropdown.Item href="https://myfuse.in/login-con/index.php">Logout</NavDropdown.Item>
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
