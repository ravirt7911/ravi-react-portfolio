import { Container, Row } from "react-bootstrap";
import projImg1 from "../assets/img/proj-1.png";
import projImg2 from "../assets/img/proj-2.png";
import projImg3 from "../assets/img/proj-3.png";
import projImg4 from "../assets/img/proj-4.png";
import projImg5 from "../assets/img/proj-5.png";
import projImg6 from "../assets/img/proj-6.png";
import { ProfileCard } from "./ProfileCard";
import colorSharp1 from "../assets/img/color-sharp.png";

export const Projects = () => {
  const projects = [
    {
      title: "PoolPay",
      description:
        "PoolPay is a financial collaboration application designed to simplify and enhance the management of pooled funds for various purposes. With features such as pooling-loaning, pooling-spending, pooling-investing, and auto documentation, PoolPay aims to facilitate seamless financial interactions while ensuring transparency and security.",
      imgUrl: projImg1,
      url: "https://github.com/ravirt7911/Pool-Pay",
    },
    {
      title: "Nisarga",
      description:
        "Book hassle-free garbage pickups, canal clog cleanups, and more with just a few simple steps. Keep your surroundings clean and hygienic by scheduling services for your home or local dustbin. Say goodbye to dirt and debris as we provide solutions for all your cleanliness needs. Experience a cleaner, healthier environment .",
      imgUrl: projImg2,
      url: "https://github.com/ravirt7911/nisarga-frontend",
    },
    {
      title: "Study Oracle",
      description:
        "Find your perfect mentor for your master's journey abroad. Our platform allows you to search for mentors based on specific filters and schedule one-on-one calls with them. Whether you need clarification on doubts, advice on college choices, information on opportunities, career guidance, or tips for surviving in a different country, our mentors are here to help.",
      imgUrl: projImg6,
      url: "https://github.com/ravirt7911/study-oracle",
    },
    {
      title: "UI Schema to form generator",
      description:
        "This React application allows users to input a UI schema on the left side and preview the rendered form on the right-hand side. The application features a single screen divided into two equal sections. The left section provides a JSON editor for pasting the UI schema, while the right section dynamically renders a form based on the provided UI schema.",
      imgUrl: projImg4,
      url: "https://github.com/ravirt7911/UI-Schema-To-Form-Generator",
    },
    {
      title: "COVID-19-Trends-Analysis-with-Prophet-Model",
      description:
        "The COVID-19 Trends Analysis with Prophet Model project is a Data Science and Machine Learning initiative that aims to analyze historical trends and predict the future trajectory of the COVID-19 pandemic across different countries. ",
      imgUrl: projImg5,
      url: "https://github.com/ravirt7911/COVID-19-Trends-Analysis-with-Prophet-Model",
    },
    {
      title: "FARM-STACK TO-DO LIST",
      description:
        "A Full Stack Functioning TO-DO List using FastAPI,React and MongoDB",
      imgUrl: projImg3,
      url: "https://github.com/ravirt7911/FULLSTACK-FARM-STACK-Backend",
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
