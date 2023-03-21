import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  return (
    <section id="projects" className="portfolio-mf route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">Projects</h3>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {projectList.map((p) => (
            <ProjectItem project={p} key={p.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

class Project {
  constructor(name, type, date, link, video = null, ...imgs) {
    this.name = name;
    this.type = type;
    this.date = date;
    this.link = link;
    this.video = video;
    this.imgs = imgs;
  }
}

const projectList = [
  new Project(
    "NTU Rating 想鑑你",
    "Full Stack Web Development",
    "Since Jan. 2021",
    "https://rating.myntu.me/",
    null,
    ...[...Array(5).keys()].map((_, i) => `/img/projects/rating/${i + 1}.png`)
  ),
  new Project(
    "TripTeddy",
    "iOS App Design & Development",
    "Sep. - Dec. 2022",
    "https://trip-teddy.github.io/",
    "https://www.youtube.com/embed/epDwjOPLheA"
  ),
  new Project(
    "臺灣意象：帝國眼中的臺灣風物（客家文化館）",
    "AR Experience Development",
    "Sep. - Oct. 2022",
    "https://thcdc.hakka.gov.tw/1241/1258/7372/85683/post",
    null,
    ...[...Array(3).keys()].map(
      (_, i) => `/img/projects/npm_hakka/${i + 1}.png`
    )
  ),
  new Project(
    "臺灣意象：帝國眼中的臺灣風物（科工館）",
    "AR Experience Development",
    "Feb. - Mar. 2022",
    "https://www.npm.gov.tw/News-Content.aspx?sno=04012930&l=1&type=03000096&idstr=MDMwMDAwOTY=",
    null,
    ...[...Array(3).keys()].map((_, i) => `/img/projects/npm_nstm/${i + 1}.png`)
  ),
  new Project(
    "Gifted",
    "VR Game Development",
    "Oct. 2021 - Jan. 2022",
    "https://youtu.be/Mkyf8norDIY",
    "https://www.youtube.com/embed/Mkyf8norDIY"
  ),
  new Project(
    "太空飛行探索館：太空出任務（科工館）",
    "Game Development",
    "Aug. - Sep. 2021",
    "https://www.spacenstm.com.tw/space/%E5%A4%AA%E7%A9%BA%E5%87%BA%E4%BB%BB%E5%8B%99/",
    null,
    "https://www.spacenstm.com.tw/userfiles/images/20211105080545363.jpg",
    "https://www.spacenstm.com.tw/userfiles/images/20211105080616769.jpg",
    "https://www.spacenstm.com.tw/userfiles/images/20211105080644538.jpg"
  ),
  new Project(
    "The Message 風聲",
    "Web Game Frontend",
    "May - June 2021",
    "https://youtu.be/lKeJmfmDxyY",
    "https://www.youtube.com/embed/lKeJmfmDxyY"
  ),
  new Project(
    "LAMByrinth 迷途羔羊",
    "Game Development",
    "Oct. - Dec. 2020",
    "https://youtu.be/Ihet1Yo5C-A",
    "https://www.youtube.com/embed/Ihet1Yo5C-A"
  ),
];

export default Projects;
