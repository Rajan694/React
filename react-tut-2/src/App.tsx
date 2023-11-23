import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Greet from "./components/Greet";
import Form from "./components/Form";
import Style from "./components/Style";
import LoopComponent from "./components/LoopComponent";
import UsingRefs from "./components/UsingRefs";
import HigherOrderComp from "./components/HigherOrderComp";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container" style={{ marginTop: "70px" }}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/greet" Component={Greet} />
          <Route path="/form" Component={Form} />
          <Route path="/style" Component={Style} />
          <Route path="/loop" Component={LoopComponent} />
          <Route path="/refs" Component={UsingRefs} />
          <Route path="/hoc" Component={HigherOrderComp} />
          <Route path="/*" element={<h1>404 pAgE</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
