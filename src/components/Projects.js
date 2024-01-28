import { Container, Row } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import { ProfileCard } from "./ProfileCard";
import colorSharp1 from "../assets/img/color-sharp.png";

export const Projects = () => {
  const projects = [
    {
      title: "PoolPay",
      description: "Officia elit in id et. Ipsum qui amet pariatur pariatur ea labore pariatur incididunt consectetur proident ad. Exercitation reprehenderit aliquip esse nulla est sunt velit enim sint. Pariatur voluptate irure aliquip magna occaecat aliquip nulla velit commodo deserunt.",
      imgUrl: projImg1,
      url: "https://github.com/ravirt7911/Pool-Pay",
    },
    {
      title: "FULLSTACK FARM-STACK ",
      description: "Officia elit in id et. Ipsum qui amet pariatur pariatur ea labore pariatur incididunt consectetur proident ad. Exercitation reprehenderit aliquip esse nulla est sunt velit enim sint. Pariatur voluptate irure aliquip magna occaecat aliquip nulla velit commodo .",
      imgUrl: projImg2,
      url: "https://www.codechef.com/users/ravi7911",
    },
    {
      title: "UI Schema to form generator",
      description: "Officia elit in id et. Ipsum qui amet pariatur pariatur ea labore pariatur incididunt consectetur proident ad. Exercitation reprehenderit aliquip esse nulla est sunt velit enim sint. Pariatur voluptate irure aliquip magna occaecat aliquip nulla velit commodo deserunt.",
      imgUrl: projImg3,
      url: "https://github.com/ravirt7911/UI-Schema-To-Form-Generator",
    },
    {
      title: "Chatellite chat app",
      description:
        "Officia elit in id et. Ipsum qui amet pariatur pariatur ea labore pariatur incididunt consectetur proident ad. Exercitation reprehenderit aliquip esse nulla est sunt velit enim sint. Pariatur voluptate irure aliquip magna occaecat aliquip nulla velit commodo deserunt.",
      imgUrl: projImg4,
      url: "https://github.com/ravirt7911/chatellite-chat-app",
    },
    {
      title: "Blog Website",
      description: "Officia elit in id et. Ipsum qui amet pariatur pariatur ea labore pariatur incididunt consectetur proident ad. Exercitation reprehenderit aliquip esse nulla est sunt velit enim sint. Pariatur voluptate irure aliquip magna occaecat aliquip nulla velit commodo deserunt.",
      imgUrl: projImg5,
      url: "https://github.com/ravirt7911/blogwebsite-project-firebase",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <h2>Projects</h2>

          {projects.map((project, index) => {
            return <ProfileCard key={index} {...project} />;
          })}
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp1} />
    </section>
  );
};
