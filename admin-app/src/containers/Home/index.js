import React from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Layout from "../../components/Layout";
import "./style.css";

const Home = (props) => {
  return (
    <Layout sidebar>
      
      {/*<Jumbotron
        style={{ margin: "5rem", background: "#fff" }}
        className="text-center"
      >
        <h1>Welcome to Admin Dashboard</h1>
      </Jumbotron> */}
    </Layout>
  );
};

export default Home;
