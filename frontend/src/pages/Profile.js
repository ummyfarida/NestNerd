import { Container, Row, Col, Nav, Form, Button, Image } from 'react-bootstrap';
// import { Image } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Profile = () => {
    return (
        <>
            <NavBar />
            <Container style={{backgroundColor: "#1c2955", padding: "50px"}} fluid>
                <Row>
                    <Col xs={12} md={12} className="text-white">
                        <h1>Profile</h1>
                        <Image
                                    src="https://64.media.tumblr.com/24760174ab3922071fd4b0713ec6097c/902dc3d362047da0-64/s1280x1920/35fe3f48862901bb43d3fec11c02664968252f05.jpg"
                                    // src="holder.js/171x180"
                                    style={{ width: "100px", height: "100px"}}
                                    roundedCircle/>
                                    <br/>
                                    <h2>goo young jo</h2>
                                    
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Profile;