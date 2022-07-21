import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>Content</main>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
