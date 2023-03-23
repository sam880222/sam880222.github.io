import { Col, Row } from "react-bootstrap";

const Education = () => {
  return (
    <section
      className="services-mf route"
      id="education"
      style={{ marginTop: "-5rem" }}
    >
      <div
        className="bg-image"
        style={{
          backgroundImage: "url(img/education.png)",
          position: "relative",
        }}
      >
        <div class="overlay-mf"></div>
        <div
          className="container"
          style={{ zIndex: 1, position: "relative", padding: "3rem 0px" }}
        >
          <Row>
            <Col>
              <div className="title-box text-center">
                <h3 className="title-a">Education</h3>
                <div className="line-mf"></div>
              </div>
              <h4>National Taiwan University</h4>
              <span
                className="title-s"
                style={{
                  fontStyle: "italic",
                  fontStretch: "condensed",
                  fontWeight: "normal",
                }}
              >
                Computer Science & Information Engineering
              </span>
              <h5 className="mt-4">Master’s Degree</h5>
              <span className="me-4">GPA: 4.19/4.3</span>
              <span className="fst-italic">Since Sep. 2021</span>
              <h5 className="mt-4">Bachelor’s Degree</h5>
              <span className="me-4">GPA: 4.2/4.3 (top 4%)</span>
              <span className="fst-italic">Sep. 2017 – June</span>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Education;
