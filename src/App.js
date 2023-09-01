import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ResetPass } from "./pages/ResetPass";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/reset-password/:token" element={<ResetPass />} />
        <Route path="/*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
