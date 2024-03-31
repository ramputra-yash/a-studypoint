import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Pages/Hero/Hero";
import Cards from "./Pages/Cards/Cards";
import Welcome from "./Components/Welcome/Welcome";
import Owner from "./Pages/Owner/Owner";
import Accordian from "./Pages/Accordian/Accordian";
import Team from "./Pages/Team/Team";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Cards/>
      <Welcome/>
      <Owner/>
      <Accordian/>
      <Team/>
      <Footer/>
    </>
  );
}

export default App;
