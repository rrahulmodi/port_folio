import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rahul Modi</span>
            from <span className="purple"> Jaipur, India.</span>
            <br /> I have been developing SaaS, Mobile apps, No Code Apps and
            Marketing campaigns for the last 7+ years!
            <br />
            Additionally, I am CEO at Workbinders Pvt. Ltd.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Researching ways to grow business!
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Growing Family Business
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Rahul Modi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
