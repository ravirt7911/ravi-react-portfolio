import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img 1.svg";

export const Contact = () => {
  const formInitialDetails = {
    fullname: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const resetForm = () => {
    setFormDetails(formInitialDetails);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonText("Sending");
    const formData = new FormData(event.target);
    const formEl=document.getElementById('form');
    formData.append("access_key", "1e253347-17b9-49a1-83e7-edeb9b6eddbf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json())
    .catch((err) => {console.error(err);});
    setButtonText("Send");
    if (res.success) {
      console.log("Success", res);
      resetForm();
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit} id="form">
              <Row>
                <Col sm={12} className="px-1">
                  <input
                    type="text"
                    value={formDetails.fullname}
                    name="FullName"
                    placeholder="Full Name"
                    onChange={(e) => onFormUpdate("fullname", e.target.value)}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    name="email"
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={12} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    name="phone"
                    placeholder="Phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    name="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
