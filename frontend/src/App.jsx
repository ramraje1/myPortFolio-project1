import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./components/Layouts/Layout";
import About from "./pages/About";
import Tech from "./pages/Tech";
import Project from "./pages/Project";
import Eduction from "./pages/Eduction";
import Experiance from "./pages/Experiance";
import Contact from "./pages/Contact";
import Footer from "./components/Layouts/Footer";
import ScrollToTop from "react-scroll-to-top";
const Context = createContext();
function App() {
  const [theam, setTheam] = useState("light");

  return (
    <>
      <Context.Provider value={{ theam, setTheam }}>
        <div id={theam}>
          <Layout />
          <About></About>
          <Eduction />
          <Tech></Tech>
          <Project />
          <Experiance />
          <Contact />
          <Footer />
        </div>
        <ScrollToTop
          smooth
          color="white"
          style={{
            textAlign: "center",
            backgroundColor: "orange",
            padding: "5px",
          }}
        />
      </Context.Provider>
    </>
  );
}

export default App;
export { Context };
