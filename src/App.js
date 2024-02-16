import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./components/Sidebar";
import Player from "./components/Player";
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SavedSongs from "./components/SavedSong";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="px-0">
        <Row>
          <Col xs={2}>
            <SideBar />
          </Col>
          <Col>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/saved" element={<SavedSongs />} />
            </Routes>
            <Player />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
