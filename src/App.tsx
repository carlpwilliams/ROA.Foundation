import React, { Component } from 'react';
import { Navbar, Container, CardDeck, Col, Card } from 'react-bootstrap';
import { BeenhereOutlined, MemoryOutlined, SupervisorAccountOutlined } from '@material-ui/icons';
import './App.scss';
import Section, { sectionType } from './components/structural/section';
import bannerImage from './imgs/banner.jpg';
import victorianClassRoomImage from './imgs/victorian-classroom.jpg';
import dropOffSchool from './imgs/drop-off-school.jpg';
import getCert from './imgs/get-cert.jpg';
import individual from './imgs/individuality.jpg';
import talent from './imgs/talent.jpg';
import onlineClass from './imgs/online-class.jpg';

import ReactGA from 'react-ga';

const pdf = require('./whitepaper/Whitepaper_ROASc-Draft-4.pdf');


export class App extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {

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
                  <ReactGA.OutboundLink
                    eventLabel="readWhitepaper"
                    to="https://docs.google.com/document/d/1Gg-Sisbz4hs8VoSB8ogcuOmNJHRZBF4wT6vHofMCBIM/edit?usp=sharing"
                    target="_blank"
                  >
                    Read the Whitepaper
                  </ReactGA.OutboundLink>

                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </header>
        <Section type={sectionType.banner} bannerImage={bannerImage}>
          <div className="text-center">
            <h1>Record of Achievement Smart Contract (ROASc)</h1>
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
            <ReactGA.OutboundLink className=" btn btn-outline-primary btn-rounded"
              eventLabel="readWhitepaper"
              to="https://docs.google.com/document/d/1Gg-Sisbz4hs8VoSB8ogcuOmNJHRZBF4wT6vHofMCBIM/edit?usp=sharing"
              target="_blank"
            >
              Read the Whitepaper
                  </ReactGA.OutboundLink>

          </div>
        </Section>
        <Section>
          <Container> <h2>The Problem</h2></Container></Section>
        <Section className="text-center">
          <Container>

            <CardDeck>
              <Card className="no-border" border="light"><Card.Body>
                <div className="round-image">
                  <img src={victorianClassRoomImage} alt="the victorian classroom" />
                </div>
                <h4>Modern classrooms remain unchanged since Victorian times.</h4>
                <p>
                  The classroom, has changed very little in 100 years and, although methods,
                  reviews, technology and examinations have changed many times, attitudes and certifications have
                  remained the same.
            </p>
              </Card.Body></Card>
              <Card className="no-border" border="light">
                <Card.Body>
                  <div className="round-image">
                    <img src={dropOffSchool} alt="the victorian classroom" />
                  </div>
                  <h4>Parents must wait, then do nothing.</h4>
                  <p>
                    From the moment a child is born, the educational system demands that a parent wait,
                    understandably. But when a child does start their educational journey, they do so in
                    relative isolation from their parents
            </p>
                </Card.Body>
              </Card>
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
                <h4>No Unified Record.</h4>
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


        <Section className="text-center">
          <Container>
            <CardDeck>
              <Card className="no-border" border="light"><Card.Body>
                <div className="round-image">
                  <img src={talent} alt="the victorian classroom" />
                </div>
                <h4>Talent or outstanding achievements are remaining undetected.</h4>
                <p>
                  Possibly the greatest shame of modern education and child progression. Current established places of learning can not, and in most cases will not, cater for any student that does not fall firmly within the 'middle of the road' scholastically.
                </p>
              </Card.Body>
              </Card>

              <Card className="no-border" border="light">
                <Card.Body>
                  <div className="round-image">
                    <img src={onlineClass} alt="the victorian classroom" />
                  </div>
                  <h4>Multiple forms of education or progression.</h4>
                  <p>
                    As technology and online courses and events become more and more popular, there is no single repository for achievement.
                  </p>
                </Card.Body>
              </Card>
            </CardDeck>
          </Container>
        </Section>
      </div>
    );
  }


}
export default App;
