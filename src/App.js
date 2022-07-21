import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>Content</main>
      </Router>
    </div>
  );
}

export default App;
