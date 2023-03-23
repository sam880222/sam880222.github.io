import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="about-mf route">
      <Container style={{ maxWidth: 750 }}>
        <Col>
          {/* <div className="box-shadow-full"> */}
          <Row>
            <Col
              md={5}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="img/avatar.png"
                className="img-fluid b-shadow-a"
                width="70%"
                alt=""
                style={{ borderRadius: 8, maxWidth: 300 }}
              />
            </Col>
            <Col
              md={7}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h4
                style={{
                  marginTop: "1rem",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                About Me
              </h4>
              <div
                style={{
                  backgroundColor: "#66b3ff",
                  height: 2,
                  width: "90%",
                  margin: "auto",
                }}
              />
              <Row
                className="personal-info"
                style={{
                  textAlign: "start",
                  margin: "1rem auto",
                  width: "100%",
                  maxWidth: 400,
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <Col
                  xs="auto"
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  <p>Name</p>
                  <p>Age</p>
                  <p>Email</p>
                  <p>Phone</p>
                </Col>
                <Col xs="auto">
                  <p>Po-Hsiang Hsu（許博翔）</p>
                  <p>
                    {Math.round(
                      (Date.now() - 919654380000) / 1000 / 3600 / 24 / 365
                    )}
                  </p>
                  <p>sam880222@gmail.com</p>
                  <p>0983-320-260</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  );
};

export default About;
