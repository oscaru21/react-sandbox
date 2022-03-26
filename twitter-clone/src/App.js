import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <div className="max-w-6xl mx-auto flex ">
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Widgets />
        </Router>
      </div>
    </div>
  );
}

export default App;
