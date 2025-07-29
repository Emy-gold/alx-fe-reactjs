<<<<<<< HEAD
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                backgroundColor: "#333",
                padding: "10px",
                display: "flex",               // ✅ added
                justifyContent: "space-between" // ✅ added
            }}
        >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
            <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        </nav>
    );
}

export default Navbar;
=======
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav
            style={{
                backgroundColor: "#333",
                padding: "10px",
                display: "flex",               // ✅ added
                justifyContent: "space-between" // ✅ added
            }}
        >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
            <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
        </nav>
    );
}

export default Navbar;
>>>>>>> bd83420 (Initial clean commit without env file)
