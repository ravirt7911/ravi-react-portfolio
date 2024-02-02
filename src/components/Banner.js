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
                  <button
                    onClick={handleDownloadCV}
                    className="tagline"
                    style={{ margin: "20px" }}
                  >
                    View CV
                    <FilePerson size={25} />
                  </button>
                  <p>
                    Passionate individual with a strong background in front-end
                    (ReactJS) and back-end programming (JavaScript, Python).
                    Proficient in SQL and NoSQL databases, with hands-on
                    experience in developing end-to-end solutions. A dedicated
                    developer enthusiastic about problem-solving and competitive
                    programming. Skilled in utilizing technologies such as
                    Pandas, NumPy, Seaborn, scikit-learn, TensorFlow, and Keras
                    for analytics and modeling. Capable of crafting robust and
                    efficient ML pipelines. Experienced in deployment and adept
                    at creating seamless user experiences. Bring a competitive
                    edge to every challenge, thriving in the dynamic world of
                    web development and problem-solving.
                  </p>
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
