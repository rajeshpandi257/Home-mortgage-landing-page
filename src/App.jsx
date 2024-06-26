import React from "react";

import "../src/App.css";
import LandingPage from "./components/LandingPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
function App() {
  return (
    <div className="App">
      <Nav />
      <LandingPage />
      <Modal />
      <Footer />
    </div>
  );
}

export default App;
