import { Link } from "react-router-dom";
import '../CSS/navbar.css';


export default function NavBar (props) {
    return (
        <nav className="sidebar">
            <h3>{props?.user?.name}</h3>
            {/* Nav bar for projects link */}
            <div className="sidebar-link">
                <a href="/projects">
                    <img src="development.png" className="project-icon" alt="project icon"></img>Projects</a>
            </div>
            {/* Nav bar for main link */}
            <div className="sidebar-link">
                <a href="/">
                    <img src="home.png" className="homepage-icon" alt="homepage icon"></img>Main</a>
            </div>
            <div className="sidebar-link">
                <a href="/resume">
                    <img src="resume.png" className="resume-icon" alt="resume icon"></img>Contact Me</a>
            </div>
            <div className="sidebar-link">
                <div>
                    <a href="/aboutme">
                        <img src="female-profile.png" className="aboutme-icon1" alt="aboutme icon">
                        </img>
                    </a>
                </div>
                    <div>
                        <Link className="test" to="/aboutme">About Me</Link>
                    </div>
            </div>
        </nav>
    )
}