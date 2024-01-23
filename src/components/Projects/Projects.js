import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import Dogcat from "../../Assets/Projects/Dogcat.jpeg";
import Twitter from "../../Assets/Projects/Twitter.jpeg";
import Scrabble from "../../Assets/Projects/Scrabble.jpeg";
import Demandforecast from "../../Assets/Projects/Demand.jpeg";
import ABtest from "../../Assets/Projects/ABtest.jpeg";
import Customer from "../../Assets/Projects/Customer.jpeg";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Scrabble}
              title="Scrabble Player Ratings Prediction"
              description="This project aims to develop a predictive model (Random Forest, XGBoost, and LightGBM) that accurately estimates the ratings of human players based on their gameplay in Scrabble matches."
              ghLink="https://github.com/Cheng-Jessica/Prediction-of-Scrabble-Player-Ratings"
              // demoLink="https://ecart.onrender.com/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Twitter}
              title="Twitter Sentimetn Prediction"
              description="This project focuses on training a Naive Bayes model for Twitter sentiment prediction using a labeled dataset from Kaggle."
              ghLink="https://github.com/Cheng-Jessica/Spark-Streaming_Twitter-Sentiment-Prediction"
              // demoLink="https://rahuljha.info/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Dogcat}
              title="Dog and Cat Classification"
              description="This project revisits the classic Dogs vs. Cats image classification problem hosted by Kaggle in 2013 using multiple Neural Network Techniques."
              ghLink="https://github.com/Cheng-Jessica/Neural-Network_Image-Classification"
              // demoLink="https://chat-app-rahuljha4171.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Demandforecast}
              title="Demand Forecasting"
              description="This project is to help handle continuous model training and forecasting which becomes overwhelming for medium and large businesses using Google Cloud Big Query and visualize the dashboard."
              ghLink="https://github.com/Cheng-Jessica/Demand-Forecasting_Big-Query/tree/main"
              // demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ABtest}
              title="Digital Advertising AB Testing"
              description="This project goal is to assess the effectiveness of online advertising and measure the causal impact of displaying Star Digital's advertisements on sales conversions using causal analysis."
              ghLink="https://github.com/Cheng-Jessica/stardigital_ads_ABtest"
              // demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Customer}
              title="Customer Purchase & Spending Prediction"
              description="This project focuses on building predictive models to analyze consumer behavior in response to a test mailing of a catalog while exploring multiple numeric prediction techniques."
              ghLink="https://github.com/Cheng-Jessica/Consumer-Purchase-Spending-Amount-Prediction"
              // demoLink="https://expense-tracker.rahuljha4171.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
