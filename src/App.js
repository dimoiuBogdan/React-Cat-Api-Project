import React, { useState } from "react";
import { Container } from "@material-ui/core";
import Navbar from "./Compoents/Navbar/Navbar";
import "./App.scss";
import Random from "./Compoents/Random/Random";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favorites from "./Compoents/Favorites/Favorites";
import Breeds from "./Compoents/All Breeds/Breeds";

export default function App() {
  const [favorites, setFavorites] = useState([]);
  const [catDetails, setCatDetails] = useState({});

  return (
    <Router>
      <div className="app">
        <Container maxWidth="lg" className="container">
          <Navbar />
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Random
                  catDetails={catDetails}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  setCatDetails={setCatDetails}
                />
              )}
            />
            <Route path="/breeds" component={Breeds} />
            <Route
              path="/favorites"
              component={() => (
                <Favorites favorites={favorites} setFavorites={setFavorites} />
              )}
            />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
// 5b2c5f99-a670-46e8-b959-5151560e4428
