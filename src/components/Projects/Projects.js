import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/weltio.png";
import emotion from "../../Assets/Projects/lemapp.png";
import editor from "../../Assets/Projects/serpwizz.png";
import chatify from "../../Assets/Projects/melville.png";
import suicide from "../../Assets/Projects/timeresistance.png";
import bitsOfCode from "../../Assets/Projects/atlancer.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Lemapp - Turbocharge your Whatsapp (Chrome Extension)"
              description="With Lemapp’s intuitive interface, powerful features, and secure technology, you can have complete control over your WhatsApp accounts and boost your productivity anytime, anywhere."
              demoLink="https://lemapp.co"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Atalancer - Freelancing Platform (Bubble.io)"
              description="Atlancer intends to shape the future of work by taking responsibility for how freelance jobs are done from start to end- curating talent, match-making, QC'ing the job and beyond. Freelancers are enhanced with atlancer.ai's suite of AI tools."
              demoLink="https://atlancer.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Serpwizz - SEO Audit Tool (PHP, Laravel, Vue.js)"
              description="Its a SEO audit tool used to audit websites easily and also able to find ranking of keywords and suitable for whitelabling services. It helps a lot of business that are into Digital Marketing to work along with clients and has 1000+ customers already."
              demoLink="https://serpwizz.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Weltio - International Trading App (Mobile App)"
              description="It is a mobile app made to trade on US stock market as some of the countries have restrictions and doesnt allow internaitonal trading so using this app you can easily do that."
              demoLink="https://weltio.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Time Resistance - Custom Leather Products Ecommerce Store (Shopify) "
              description="It is a leather products store using shopify with a lot of cusotmizations along with large inventory and entirely built on Shopify."
              demoLink="https://timeresistance.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Melville Design (Custom Ecommerce Store)"
              description="Its a custom Ecommerce store built for Furniture company and it has an amazing design made using HTML, CSS, Vanilla JS, and Tailwind CSS."
              demoLink="https://www.melville-design.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
