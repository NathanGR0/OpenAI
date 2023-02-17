import React from "react";
import { Component } from "react";
import Display from "./Display";
import { Container, Row, Col, Carousel } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <br />
        <Container>
          <Carousel>
            <Carousel.Item></Carousel.Item>
          </Carousel>
          <br />
          <br />
          <h1>GR0's Ad Generation Tool</h1>
          <p>We know that real people come up with the most interesting headlines.
          That's why, at GR0, we made this Google Ads Headline Generator that
          uses AI to help our media buyers come up with new ideas. We hope that
          it helps you. We don't just rely on AI; instead, we find new ways to
          make our staff more productive every day so that we can focus on the
          things that really matter.</p>
          <br />
          <br />
          <Row>
            <Col>
              <Display
                header="Headline Generator"
                title="Generate Google Ads Headlines"
                text="Generate headlines for products"
                theLink="headline-generator"
              />
            </Col>
            <Col>
              <Display
                header="Description Generator"
                title="Generate Google Ads Descriptions"
                text="Generate descriptions for products"
                theLink="description-generator"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
