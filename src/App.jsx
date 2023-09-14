import "./App.css";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SingleUser from "./components/SingleUser";
import { Routes, Route } from "react-router-dom";

//to view: http://localhost:5173/

// Routes, Route
function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/users/:id" element={<SingleUser />} />
      </Routes>
    </>
  );
}

export default App;
