import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/Sidebar";
import Player from "./components/Player";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Container fluid className="px-0">
      <Row>
        <Col xs={2}>
          <SideBar />
        </Col>
        <Col>
          <HomePage />
          <Player />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
