import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import '../CSS/projects.css';


export default function Projects (props) {
    return (
        <>
            <header>
                <h1>View My Projects</h1>
            </header>
            <NavBar />
            <div class="card1">
                <Slider />
                {/* <img src="MealApp.jpg" alt="Meal App screenshot" className="pic"></img> */}
                    <div class="container">
                        <h2><b>Meal Generator App</b></h2>
                            <p>App that generates a random meal for undecided users. App also includes a grocery list option and saved meals section.</p> 
                                <p>In Progress</p>
                                    <a target="_blank" rel="noreferrer" href="https://github.com/Monie-B/Meal-Generator-App.git" className="code">View Source Code</a>
                    </div>
            </div>
            <div class="card2">
                <img src="GrizzlyBulliesSite.jpg" alt="Grizzly Bullies Site screenshot" className="pic2"></img>
                    <div class="container">
                        <h2><b>Grizzly Bullies Site</b></h2>
                            <p>Static website for an up and coming American Bully breeding service.</p> 
                                <p>In Progress</p>
                                    <a target="_blank" rel="noreferrer" href="https://github.com/Monie-B/Grizzly-Gang-Bullies.git" className="code">View Source Code</a>
                    </div>
            </div>
            <Footer />
        </>
    )
}