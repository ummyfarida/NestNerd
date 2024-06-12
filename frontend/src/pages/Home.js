import { Container, Row, Col, Nav, Form, Button } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <NavBar />
      {/* <Container fluid> */}
        <Image 
          src="https://cdn.oneesports.id/cdn-data/wp-content/uploads/sites/2/2020/08/MobileLegendsBangBang_MLBB_appstore_officialart.jpg"
          style={{width: "100%"}}/>
      {/* </Container> */}
      <div style={{backgroundColor: "#1F2A51"}}>Home</div>
      <div class="border border-dark" style={{backgroundColor: "#FFFFFF"}}>
        tess
      </div>
      <Footer />
    </>
  );
};

export default Home;