import { Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about" className="about-mf route">
      <div className="container">
        <Row>
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">About Me</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div className="row">
                <Col md={6}>
                  <img
                    src="img/avatar.jpg"
                    className="img-fluid b-shadow-a"
                    width="50%"
                    alt=""
                    style={{ borderRadius: 8 }}
                  />
                  <h3 style={{ margin: "2rem auto" }}>Po-Hsiang Hsu</h3>
                  <Row
                    style={{
                      textAlign: "start",
                      margin: "auto",
                      width: "100%",
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
                      <p>D.O.B</p>
                      <p>Email</p>
                      <p>Phone</p>
                      <p>Major</p>
                    </Col>
                    <Col xs="auto">
                      <p>
                        Feb. 22, 1999 (
                        {Math.round(
                          (Date.now() - 919654380000) / 1000 / 3600 / 24 / 365
                        ) + " y/o"}
                        )
                      </p>
                      <p>sam880222@gmail.com</p>
                      <p>0983-320-260</p>
                      <p>Computer Science</p>
                    </Col>
                  </Row>
                </Col>
                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0">
                    <div className="title-box-2">
                      <h5>Skills</h5>
                      <span>HTML</span> <span className="pull-right">85%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "85%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>CSS3</span> <span className="pull-right">75%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "75%" }}
                          aria-valuenow="75"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>PHP</span> <span className="pull-right">50%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "50%" }}
                          aria-valuenow="50"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <span>JAVASCRIPT</span>{" "}
                      <span className="pull-right">90%</span>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "90%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </div>
    </section>
  );
};

export default About;
