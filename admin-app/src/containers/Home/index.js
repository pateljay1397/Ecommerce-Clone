import React from "react";
import { Container, Row } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import "./style.css";

const Home = () => {
  return (
    <Layout sidebar>
      <Container
        style={{ margin: "5rem", background: "#fff" }}
        className="text-center"
      >
        <Row>
          <h1>Welcome to Admin Dashboard</h1>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
