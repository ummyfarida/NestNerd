import { Container, Row, Col, Nav, Form, Button, Card, ListGroup, InputGroup, FormControl } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Comment = () => {
  return (
    <>
      <NavBar />
      {/* <Container fluid> */}
        {/* <Image 
          src="https://cdn.oneesports.id/cdn-data/wp-content/uploads/sites/2/2020/08/MobileLegendsBangBang_MLBB_appstore_officialart.jpg"
          style={{width: "100%"}}/> */}
      {/* </Container> */}
        <div style={{backgroundColor: "#1F2A51"}}>
            <Container>
                <Form
                    className="d-flex"
                    >
                    <Form.Control
                        type="search"
                        placeholder="What are you thinking about ?"
                        className="me-2"
                        style={{borderRadius: "100px", marginTop: "50px"}}
                        aria-label="Search"/>
                    <Button 
                        variant="light"
                        style={{marginTop: "50px"}}
                        >Search</Button>
                </Form>
                <p></p>
                <Card style={{ width: '550px', height: '550px'   }}>
      <Card.Img variant="top" src="..."  />
      <Card.Body>
        <Card.Title>yunxie</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </Container>
      </div>
      <Footer />
    </>
  );
};

export default Comment;