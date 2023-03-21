import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Engineer", "Developer", "Dreamer"],
      typeSpeed: 50,
      loop: true,
      backDelay: 1100,
      backSpeed: 30,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="home"
      className="intro route bg-image"
      style={{ backgroundImage: "url(/img/intro-bg.jpg)" }}
    >
      <div className="overlay-itro"></div>
      <div className="intro-content display-table">
        <div className="table-cell mb-4">
          <div className="container">
            <h1 className="intro-title mb-4">
              I am <br />
              Po-Hsiang Hsu
            </h1>
            <p className="intro-subtitle">
              <strong ref={el} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
