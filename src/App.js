import React from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Compoents/Navbar/Navbar";
import "./App.scss";
import Random from "./Compoents/Random/Random";

export default function App() {
  return (
    <div className="app">
      <Container maxWidth="md" className="container">
        <Navbar />
        <Random />
      </Container>
    </div>
  );
}
// 5b2c5f99-a670-46e8-b959-5151560e4428
