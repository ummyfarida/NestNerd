import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar style={{backgroundColor: "#1F2A51"}}>
        <Container fluid>
            <Navbar.Brand href="/"><span style={{color: "white"}}><b>Nest</b></span><span style={{color: "red"}}><b>NERD</b></span></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                    <Nav.Link href="/" style={{color: "white"}}><b>Home</b></Nav.Link>
                    <Nav.Link href="/profile" style={{color: "white"}}><b>Profile</b></Nav.Link>
                    <Nav.Link href="#action2" style={{color: "white"}}><b>News</b></Nav.Link>
                    <Nav.Link href="#action2" style={{color: "white"}}><b>Comunity</b></Nav.Link>
                    <Nav.Link href="#action2" style={{color: "white"}}><b>Forum</b></Nav.Link>
                    <Nav.Link href="#action2" style={{color: "white"}}><b>Games</b></Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"/>
                    <Button variant="light">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default NavBar;