import React from "react";
import { Col } from "react-bootstrap";

export const ProfileCard = ({ title, description, imgUrl, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <Col
      size={12}
      sm={6}
      md={4}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
