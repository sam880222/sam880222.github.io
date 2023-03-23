import { Container, Row, Col, Figure } from "react-bootstrap";

const SkillItem = ({ skill: { icon, title, description } }) => {
  return (
    <Col md={6} xl={3}>
      <div class="service-box">
        <div class="service-ico">
          <span class="ico-circle">
            <img width="70%" src={icon} alt={title} />
          </span>
        </div>
        <div class="service-content">
          <h4>{title}</h4>
          <p class="s-description text-center">{description}</p>
        </div>
      </div>
    </Col>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <Row>
          <Col>
            <div
              className="title-box text-center"
              style={{ marginBottom: "1rem" }}
            >
              <h3 className="title-a">Skills</h3>
              <div className="line-mf"></div>
            </div>
          </Col>
        </Row>
        <Row>
          {skillList.map((skill) => (
            <SkillItem skill={skill} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

class Skill {
  constructor(icon, title, description) {
    this.icon = icon;
    this.title = title;
    this.description = description;
  }
}

const skillList = [
  new Skill("/img/programming.png", "Programming", "C, C++, Python, Java"),
  new Skill(
    "/img/app.png",
    "App Development",
    "Android (Kotlin), iOS (SwiftUI)"
  ),
  new Skill("/img/web.png", "Web Development", "ReactJS, NodeJS, MongoDB"),
  new Skill("/img/game.png", "Game Development", "Unity (C#)"),
];

export default Skills;
