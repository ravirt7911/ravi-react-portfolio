import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FilePerson } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import cv from "../assets/cv.pdf";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "CS Student", "Competetive Programmer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  const handleDownloadCV = () => {
    window.open(cv, "_blank");
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animated__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Hey There</span>
                  <h1>
                    {`I'm Kamsu Ravi Teeja . A `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    As a passionate computer science undergraduate, I love
                    coding and using technology to solve real-world problems. I
                    enjoy diving deep into programming intricacies, be it
                    competitive coding or application development. Proficient in
                    C++ and Python, I constantly seek opportunities to expand my
                    knowledge in various tech domains. Writing technical content
                    and staying updated with emerging technologies are my
                    hobbies. Currently, I'm exploring data analytics and machine
                    learning through active project work. Additionally, I have
                    experience in cloud computing and a strong desire to explore
                    other exciting tech areas.
                  </p>
                  <button onClick={handleDownloadCV}>
                    View CV
                    <FilePerson size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
