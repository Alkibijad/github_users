import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

//import pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={ <Home/> }></Route>
            <Route path="/About" element={ <About/> }></Route>
            <Route path="/*" element={ <NotFound/> }></Route>
          </Routes>
        </main>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
