import React from "react";
import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
