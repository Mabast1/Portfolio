import React from "react";

import {
  About,
  Footer,
  Header,
  OctoTEK,
  Skills,
  Testimonial,
  Work,
} from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <OctoTEK />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
