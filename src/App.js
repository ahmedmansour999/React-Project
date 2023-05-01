import React, { Component } from "react";
import NavBar from "./component/NavBar/Index";
import Index from "./component/Index/Index";
import Contact from "./component/Conatct/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/index" element={<Index/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
