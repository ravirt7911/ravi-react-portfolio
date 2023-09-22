import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const Achievements = () => {
  const achievements = [
    "Finished 5 levels of Google Foobar.",
    "Global Rank 1402 in Round A Google Codejam",
    "Global Rank 304 in Round C Google Codejam",
    "Global Rank 3602 in Round H Google Kickstart",
    "Global Rank 3935 in Round E Google Kickstart",
    "Global Rank 5 in December Long 2022 Division 3 (Rated)",
    "3 star coder Codechef ( Division 2 ) Rating - 1695",

    "5 star Python coder on Hackerrank",
  ];

  return (
    <section className="achievements" id="achievements">
      <Container>
        <Row>
          <Col>
            <div className="achievements-bx">
              <h2>Achievements</h2>
              <ul className="achievements-list">
                {achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};
