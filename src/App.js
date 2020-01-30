import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Where from "./pages/Where";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/location" component={Where}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
