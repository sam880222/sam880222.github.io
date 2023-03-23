import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import * as Icon from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

const ProjectItem = ({
  project: { name, type, date, link, video, imgs = [] },
}) => {
  return (
    <div
      className="col-xxl-3 col-lg-4 col-md-6"
      style={{ padding: "0px 1rem 4rem" }}
    >
      <Card
        style={{
          backgroundColor: "#181818",
          padding: 0,
          overflow: "hidden",
          borderRadius: "1rem",
        }}
      >
        {!video ? (
          <Carousel
            pause={false}
            style={{ aspectRatio: "16/9", backgroundColor: "#242424" }}
            controls={imgs.length > 1}
            indicators={imgs.length > 1}
          >
            {imgs.map((img, i) => (
              <Carousel.Item key={img}>
                <img
                  className="d-block w-100"
                  src={img}
                  alt={"slide " + i}
                  style={{ aspectRatio: "16/9", objectFit: "cover" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <iframe
            width="100%"
            // height="315"
            style={{ aspectRatio: "16/9" }}
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
        <Card.Body style={{ textAlign: "start", position: "relative" }}>
          <Card.Title style={{ textDecoration: "none" }}>{name}</Card.Title>
          <Card.Text style={{ marginBottom: "0.75rem" }}>{type}</Card.Text>
          <Card.Text
            style={{
              fontStyle: "italic",
              fontSize: 14,
              color: "#c9c9c9",
              marginBottom: 0,
            }}
          >
            {date}
          </Card.Text>
          <a
            target="_blank"
            rel="noreferrer"
            href={link}
            style={{
              padding: 8,
              position: "absolute",
              right: "0.5rem",
              bottom: "0.5rem",
            }}
          >
            <Icon.BoxArrowUpRight size={18} />
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectItem;
