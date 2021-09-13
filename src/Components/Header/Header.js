import {Container, Navbar} from 'react-bootstrap'
import './Header.css';

function Header() {
    return(
        <div className ='Header'>
        <Navbar fixed = "top" bg = "dark" variant="dark">
            <Container>
                <Navbar.Brand href = "#">Navbar Header</Navbar.Brand>
            </Container>
        </Navbar>
        </div>
    );
}
export default Header;
