import { Container, Row, Col, Nav, Navbar, NavDropdown, InputGroup, Form, Button, Image } from 'react-bootstrap';
import { FaBeer, FaComment, FaSearch } from "react-icons/fa";
// import { IconContext } from "react-icons";

const NavBar = () => {
  return (
    <>
        <Container style={{backgroundColor: "#1F2A51", padding: "20px"}} fluid>
            <Row>
                <Col className="d-flex" xs={9} md={9}>
                    <span style={{color: "white"}}><h3><b>Nest</b></h3></span><span style={{color: "red"}}><h3><b>NERD</b></h3></span>
                </Col>
                <Col className="d-flex align-items-center" xs={3} md={3}>
                    <InputGroup>
                        <Form.Control
                            type="text"
                        />
                        <InputGroup.Text>
                            <FaSearch variant="outline-secondary"/>
                        </InputGroup.Text>
                    </InputGroup>
                    <FaComment className="fa-thin" style={{color: "white", width: "30px", height: "30px", marginLeft: "10px"}}/>
                    <Image
                        src="https://64.media.tumblr.com/24760174ab3922071fd4b0713ec6097c/902dc3d362047da0-64/s1280x1920/35fe3f48862901bb43d3fec11c02664968252f05.jpg"
                        style={{ width: "30px", height: "30px", marginLeft: "10px"}}
                        roundedCircle
                    />
                </Col>
            </Row>
            <Row>
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
                    {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
            </Row>
        </Container>
        {/* <Navbar style={{backgroundColor: "#1F2A51"}}>
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
        </Navbar> */}
    </>
  );
};

export default NavBar;