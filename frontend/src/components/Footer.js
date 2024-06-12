import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="py-5" style={{backgroundColor: "#1F2A51"}}>
            <Container>
                {/* <div> */}
                <div className="d-flex flex-column flex-sm-row justify-content-between">
                    {/* <p style={{color: "white"}}>© 2024 Company, Inc. All rights reserved.</p> */}
                    {/* <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
                    </ul> */}
                    <p>
                        <h4 className="text-light" style={{float: "left"}}>Nest</h4>
                        <h4 className="text-danger" style={{float: "left"}}>NERD</h4>
                    </p>
                    {/* <span style={{color: "white"}}><h5><b>Nest</b></h5></span><span style={{color: "red"}}><b>NERD</b></span> */}
                </div>
                {/* <hr/> */}
                {/* <hr/> */}
                <Row>
                    <Col xs={6} md={3} className="mb-3">
                        <p className="text-light">Web ini menawarkan berita terbaru, ulasan mendalam, wawancara dengan pengembang game, dan panduan bermain.  dikenal dengan konten yang komprehensif dan berkualitas tinggi, menjadikannya sumber terpercaya bagi para gamer.</p>
                        {/* <h5 style={{color: "white"}}>Section</h5> */}
                        {/* <Nav className="flex-column">
                            <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-light">Home</Nav.Link></Nav.Item>
                            <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-light">Features</Nav.Link></Nav.Item>
                            <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-light">Pricing</Nav.Link></Nav.Item>
                            <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-light">FAQs</Nav.Link></Nav.Item>
                            <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-light">About</Nav.Link></Nav.Item>
                        </Nav> */}
                    </Col>
                    <Col xs={6} md={3} className="mb-3">
                        <h5 className="text-danger">Service</h5>
                        <Nav className="flex-column">
                            <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-light">Games</Nav.Link></Nav.Item>
                            <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-light">Announced</Nav.Link></Nav.Item>
                            <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-light">Solution</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={6} md={3} className="mb-3">
                        <h5 className="text-danger">Information</h5>
                        <Nav className="flex-column">
                            <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-light">+6283.....</Nav.Link></Nav.Item>
                            <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-light">nestnerd@gmail.com</Nav.Link></Nav.Item>
                            <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-light">104, cilandak, jakarta selatan</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={6} md={3} className="mb-3">
                        <h5 className="text-danger">Legality</h5>
                        <Nav className="flex-column">
                            <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-light">Personal policy</Nav.Link></Nav.Item>
                            <Nav.Item className="mb-2"><Nav.Link href="#" className="p-0 text-light">Term&condition</Nav.Link></Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                
                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
                    <p className="text-light">© 2024 Webwizz.</p>
                    {/* <ul className="list-unstyled d-flex">
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
                        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
                    </ul> */}
                </div>
            </Container>
        </footer>
    );
};

export default Footer;