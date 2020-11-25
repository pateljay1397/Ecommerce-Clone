import React from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";

const Signup = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ margin: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>

                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                placeholder="Email"
                value=""
                type="email"
                onChange={() => {}}
              />
              <Input
                label="Password"
                placeholder="Password"
                value=""
                type="password"
                onChange={() => {}}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Signup;
