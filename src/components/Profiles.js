import { Container, Row } from "react-bootstrap";
import projImg1 from "../assets/img/img1.png";
import projImg2 from "../assets/img/img2.png";
import projImg3 from "../assets/img/img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/img5.png";
import projImg6 from "../assets/img/img6.png";
import { ProfileCard } from "./ProfileCard";
import colorSharp1 from "../assets/img/color-sharp.png";

export const Profiles = () => {
  const projects = [
    {
      title: "Leetcode",
      description: "Highest Rating-1876 Solved 300+ Problems",
      imgUrl: projImg1,
      url: "https://leetcode.com/ravi__7__/",
    },
    {
      title: "Codechef",
      description: "Highest Rating-1695(3⭐) Solved 400+ Problems",
      imgUrl: projImg2,
      url: "https://www.codechef.com/users/ravi7911",
    },
    {
      title: "Codeforces",
      description: "Highest Rating-1029 Solved 100+ Problems",
      imgUrl: projImg3,
      url: "https://codeforces.com/profile/ravi_7911",
    },
    {
      title: "HackerRank",
      description:
        "Python-5⭐ Problem Solving(Basic and Intermediate)Certified",
      imgUrl: projImg4,
      url: "https://www.hackerrank.com/ravirt7911?hr_r=1",
    },
    {
      title: "Github",
      description: "My Projects",
      imgUrl: projImg5,
      url: "https://github.com/ravirt7911",
    },
    {
      title: "Geeks for Geeks",
      description: "Solved 100+ Problemss",
      imgUrl: projImg6,
      url: "https://auth.geeksforgeeks.org/user/ravirt7911",
    },
  ];

  return (
    <section className="project" id="profiles">
      <Container>
        <Row>
          <h2>Profiles</h2>

          {projects.map((project, index) => {
            return <ProfileCard key={index} {...project} />;
          })}
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp1} />
    </section>
  );
};
