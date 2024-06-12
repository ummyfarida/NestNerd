import NavBar from '../components/NavBar';
import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

const Profile = () => {
  return (
    <>
      <NavBar />
      <Container className="mt-3 text-center">
      <Row className="justify-content-center">
        <Col md="auto">
          <h2>Profile</h2>
          <Image 
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ8r6F-gQstI7QqwC2d7hBjTR9vlLf2N5FfS2Fjcq3-8uQ3VWs7" 
            roundedCircle 
            alt="Profile Picture" 
            width={150} 
            height={150} 
          />
          <p>Moon Ga Young</p>
          <Button variant="warning" >Edit Profile</Button>
        </Col>
      </Row>
      <p></p>
      <Form>
        <Row className="mb-3">
          <Col>
            <Form.Control 
              type="" 
              placeholder="What are u think?" 
              name="" 
              className="form-control" 
            />
          </Col>
        </Row>
        <Button variant="btn btn-primary" >Post</Button>
      </Form>
    </Container>
    </>
    
  );
};

export default Profile;