import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>First component</h1>
            <Link to="/">Home</Link>
            <Link to="/about"> About </Link>
        </nav>
    );
}
 
export default NavBar;