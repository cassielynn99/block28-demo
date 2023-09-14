import { Link } from "react-router-dom";

const Nav = () => {
    // Link
    return (
      <nav style={{ display: "flex", gap: "8px" }}>
        <Link to="/">Home</Link>
        <Link to="/users">All Users</Link>
      </nav>
    );
  };
  
  export default Nav;