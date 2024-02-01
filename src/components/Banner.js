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
  const toRotate = [
    "Fullstack Developer",
    "Tech Evangelist",
    "Competetive Programmer",
    "Data Analyst",
    "Machine Learning Engineer",
  ];
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
                    Passionate data scientist and machine learning specialist
                    skilled in Python for analytics, modeling, and using tools
                    like Pandas, NumPy, Seaborn, scikit-learn, TensorFlow, and
                    Keras. Experienced in SQL/NoSQL databases, end-to-end ML
                    pipelines, and deployment. Enthusiastic problem-solver with
                    a competitive edge. Also, a dedicated developer specializing
                    in front-end (ReactJS) and back-end programming (JavaScript,
                    Python), proficient in SQL and NoSQL databases, and
                    enthusiastic about problem-solving and competitive
                    programming.
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
