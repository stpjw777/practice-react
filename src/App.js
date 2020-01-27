import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/main";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/about";
import Contact from "./pages/contact";
import Project from "./pages/project";

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
      <Route path="/project" component={Project} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
