import '../App.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Button} from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar className="justify-content-center" bg="light" variant="light">
      <Nav className="">
        <Link to="/">
        <Button className='mx-1' variant="secondary">Home</Button>{' '}
        </Link>
        <Link to="/portfolio">
          <Button className='mx-1' variant="secondary">Portfolio</Button>{' '}
        </Link>
        <Link to="/contact">
          <Button className='mx-1' variant="secondary">Contact</Button>{' '}
        </Link>
      </Nav>
    </Navbar>

  );
}

export default Navigation;