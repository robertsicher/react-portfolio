import '../App.css';
import {Navbar,Container} from 'react-bootstrap';

function Footer() {
  return (
    <div className="fixed-bottom">  
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Footer</Navbar.Brand>
            </Container>
        </Navbar>
    </div>

  );
}

export default Footer;
