import "./App.css";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SingleUser from "./components/SingleUser";

//to view: http://localhost:5173/

// Routes, Route
function App() {
  return (
    <>
      <Nav />

      <Home />
      <AllUsers />
    </>
  );
}

export default App;
