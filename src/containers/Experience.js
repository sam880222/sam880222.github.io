import { Col, Row } from "react-bootstrap";

const Experience = () => {
  return (
    <section id="experience" className="services-mf route">
      <div className="container">
        <Row>
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Experience</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </Row>
        <div className="timeline">
          <span className="timeline-item">
            <p style={{ whiteSpace: "nowrap", marginBottom: "0.25rem" }}>
              <span className="h4 me-4">Garmin</span>
              <span
                className="title-s fst-italic"
                style={{ fontWeight: "normal" }}
              >
                July 2022 – Jan. 2023
              </span>
            </p>
            <p className="title-s fst-italic">DI team iOS app intern</p>
            <p className="work-description">
              – Develop the app for the Garmin Golf eco-system on <b>iOS</b>{" "}
              using <b>SwiftUI</b>.
            </p>
            <p className="work-description">
              – Implement some 3D view functions embedded in the app with{" "}
              <b>Unity</b>.
            </p>
          </span>
          <span className="timeline-item">
            <p style={{ whiteSpace: "nowrap", marginBottom: "0.25rem" }}>
              <span className="h4 me-4">Tomofun</span>
              <span
                className="title-s fst-italic"
                style={{ fontWeight: "normal" }}
              >
                July 2020 – Nov. 2021
              </span>
            </p>
            <p className="title-s fst-italic">RD team Android app intern</p>
            <p className="work-description">
              – Develop the Android app with <b>Android Studio</b> using{" "}
              <b>Kotlin</b>.
            </p>
            <p className="work-description">
              – Polished skills in version controlling, coding style, and
              object-oriented programming.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
