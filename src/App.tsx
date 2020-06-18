import React from 'react';
import { Navbar, Container, CardDeck, Col, Card } from 'react-bootstrap';
import { BeenhereOutlined, MemoryOutlined, SupervisorAccountOutlined } from '@material-ui/icons';
import './App.scss';
import Section, { sectionType } from './components/structural/section';
import bannerImage from './imgs/banner.jpg';
import victorianClassRoomImage from './imgs/victorian-classroom.jpg';
import dropOffSchool from './imgs/drop-off-school.jpg';
import getCert from './imgs/get-cert.jpg';
import individual from './imgs/individuality.jpg';

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
            <CardDeck>
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
            </CardDeck>
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
        <Container>
          <CardDeck>
            <Card className="no-border" border="light"><Card.Body>
              <div className="round-image">
                <img src={victorianClassRoomImage} alt="the victorian classroom" />
              </div>
              <h3>Modern classrooms remain unchanged since Victorian times.</h3>
              <p>
                The classroom, has changed very little in 100 years and, although methods,
                reviews, technology and examinations have changed many times, attitudes and certifications have
                remained the same.
            </p>
            </Card.Body></Card>
            <Card className="no-border" border="light"><Card.Body>
              <div className="round-image">
                <img src={dropOffSchool} alt="the victorian classroom" />
              </div>
              <h3>Parents must wait, then do nothing.</h3>
              <p>
                From the moment a child is born, the educational system demands that a parent wait,
                understandably. But when a child does start their educational journey, they do so in
                relative isolation from their parents
            </p>
            </Card.Body></Card>
          </CardDeck>
        </Container>
      </Section>

      <Section className="text-center bg-light">
        <Container>
          <CardDeck>

            <Card className="no-border bg-light" border="light"><Card.Body>
              <div className="round-image">
                <img src={getCert} alt="the victorian classroom" />
              </div>
              <h3>No Unified Record.</h3>
              <p>
                Every time a person or child moves between educational institutions and activities. The
                record of achievement is started anew. It is not common practice to share such records,
                they are by no means added to and are, therefore, difficult - if not impossible - to
                aggregate and useless as an asset to the child
            </p>
            </Card.Body></Card>

            <Card className="no-border bg-light" border="light"><Card.Body>
              <div className="round-image">
                <img src={individual} alt="the victorian classroom" />
              </div>
              <h3>Individuality is lost.</h3>
              <p>
                Educators, coaches and mentors that care and provide tutoring to many children at the
                same time are, understandably, restricted to using generics and greater good methods to
                teach, care for and track children. This makes it difficult to cater to individuals in any way
            </p>
            </Card.Body></Card>

          </CardDeck></Container>
      </Section>
    </div>
  );
}

export default App;
