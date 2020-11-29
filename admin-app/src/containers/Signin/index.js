import React from "react";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input";
import { login } from "../../redux/actions";
import { useDispatch } from "react-redux";

const Signin = (props) => {
  const dispatch = useDispatch();
  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email: "jay123@email.com",
      password: "123456",
    };
    dispatch(login(user));
  };

  return (
    <Layout>
      <Container>
        <Row style={{ margin: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
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

export default Signin;
