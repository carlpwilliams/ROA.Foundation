import React from 'react';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { BeenhereOutlined, MemoryOutlined, SupervisorAccountOutlined } from '@material-ui/icons';
import './App.scss';
import Section, { sectionType } from './components/structural/section';
import bannerImage from './imgs/banner.jpg';
const pdf = require('./whitepaper/Whitepaper_ROASc-Draft-4.pdf');



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              ROASc
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <a
                  href={pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the Whitepaper
                </a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </header>
      <Section type={sectionType.banner} bannerImage={bannerImage}>
        <div className="text-center">
          <h1>Record of achievement Smart Contract (ROASc)</h1>
          <Section>
            <Row>
              <Col>
                <MemoryOutlined className="banner-icon" />
                <h3>Institutional Citizen memory</h3>
                <p className="sub-title">Event based, provable memory</p></Col>
              <Col>
                <BeenhereOutlined className="banner-icon" /><h3>Record of achievement</h3>
                <p className="sub-title">Non-interferable peer to peer achievement ledger</p>
              </Col>
              <Col>
                <SupervisorAccountOutlined className="banner-icon" />
                <h3>Inheritable asset</h3>
                <p className="sub-title">Educational funding or inheritance</p>
              </Col>
            </Row>
          </Section>

          <a
            className=" btn btn-outline-primary btn-rounded"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Whitepaper
        </a>
        </div>
      </Section>
      <Section className="text-center">
test
      </Section>
    </div>
  );
}

export default App;
