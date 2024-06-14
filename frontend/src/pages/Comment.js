import { Container, Row, Col, Nav, Form, Button, Image, Card } from 'react-bootstrap';
// import { Image } from 'react-bootstrap';
import { FaBeer } from "react-icons/fa";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Comment = () => {
    return (
        <>
            <NavBar />
            <Container style={{backgroundColor: "#1c2955", padding: "50px"}} fluid>
                <Row>
                    <Col xs={12} md={12}>
                        <Form
                            className="d-flex justify-content-center"
                            >
                            <Form.Control
                                // type="search"
                                placeholder="What are you thinking about ?"
                                // className="me-8"
                                style={{width: "30%", borderRadius: "30px"}}
                                aria-label="Search"/>
                            <Button 
                                variant="light"
                                // style={{marginTop: "50px"}}
                                style={{borderRadius: "30px", marginLeft: "10px"}}
                                >Post</Button>
                        </Form>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col className="border border-primary" xs={6} md={6} style={{backgroundColor: "#323232", padding: "20px", borderRadius: "10px"}}> 
                        <Row className="align-items-center">
                            <Col xs={1} md={1}>
                                <Image
                                    src="https://64.media.tumblr.com/24760174ab3922071fd4b0713ec6097c/902dc3d362047da0-64/s1280x1920/35fe3f48862901bb43d3fec11c02664968252f05.jpg"
                                    // src="holder.js/171x180"
                                    style={{ width: "50px", height: "50px"}}
                                    roundedCircle/>
                            </Col>
                            <Col xs={11} md={11}>
                                <Row>
                                    <Col xs={12} className="text-white">
                                        Go Youn Jung
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={12}className="text-white">
                                        45 minutes ago
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={12} md={12} className="text-white">
                                Slot mid bang capek solo
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={12} md={12}>
                            <Image
                                src="https://i.pinimg.com/originals/3a/d8/0e/3ad80e2eb85353611580968463e4e04d.jpg"
                                // roundedCircle
                                // className="mr-3"
                                style={{ width: "100%"}}
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xs={1} md={1}>1</Col>
                            <Col xs={8} md={8}>blank</Col>
                            <Col xs={1} md={1}>2</Col>
                            <Col xs={1} md={1}>3</Col>
                            <Col xs={1} md={1}>4</Col>
                        </Row>
                    </Col>
                    <Col className="border border-primary" xs={6} md={6} style={{backgroundColor: "#818181", padding: "20px", borderRadius: "10px"}}>
                        <Row>
                            <Col xs={12} md={12} className="text-white">
                                Lihat komentar lain ...
                            </Col>
                        </Row>
                        <br/>
                        <Row className="align-items-center">
                            <Col xs={1} md={1}>
                                <Image
                                    src="https://pbs.twimg.com/media/FLW5yaPVQAAZr49?format=jpg&name=large"
                                    // src="holder.js/171x180"
                                    style={{ width: "50px", height: "50px"}}
                                    roundedCircle/>
                            </Col>
                            <Col xs={11} md={11} className="text-white">
                                Zayn Malik
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6} className="text-white">
                                Share username bang
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} md={2} className="text-white">
                                04.28
                            </Col>
                            <Col xs={2} md={2} className="text-white">
                            </Col>
                            <Col xs={1} md={1} className="text-white">
                                Reply
                            </Col>
                            <Col xs={1} md={1} className="text-white">
                                Love
                            </Col>
                        </Row>
                        <br/>
                        <Row className="align-items-center">
                            <Col xs={1} md={1}>
                                <Image
                                    src="https://i.pinimg.com/564x/11/fa/7f/11fa7f91682fc3f6e8664dcc088acbe8.jpg"
                                    // src="holder.js/171x180"
                                    style={{ width: "50px", height: "50px"}}
                                    roundedCircle/>
                            </Col>
                            <Col xs={11} md={11} className="text-white">
                                Nickola
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={6} className="text-white">
                                Give me ur id .. 
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} md={2} className="text-white">
                                05.28
                            </Col>
                            <Col xs={2} md={2} className="text-white">
                            </Col>
                            <Col xs={1} md={1} className="text-white">
                                Reply
                            </Col>
                            <Col xs={1} md={1} className="text-white">
                                Love
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Comment;