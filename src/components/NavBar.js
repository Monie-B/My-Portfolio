import { Link } from "react-router-dom";
// import './App.css'


export default function NavBar (props) {
    return (
        <nav>
            <h3>{props?.user?.name}</h3>
            <Link to="/projects">Projects</Link>&nbsp;
            <Link to="/">Main</Link>&nbsp;
            <Link to="/aboutme">About Me</Link>&nbsp;
        </nav>
    )
}