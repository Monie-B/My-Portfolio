import NavBar from "../components/NavBar"
import '../CSS/main.css'


export default function Main (props) {
    return (
        <>
            <header>
                <h1>Welcome to My Portfolio</h1>
            </header>
            <NavBar />
            <img src="html5.png" className="html" alt="HTML logo"></img>
            <img src="css3.png" className="css" alt="CSS logo"></img>
            <img src="javascript.png" className="js" alt="JavaScript logo"></img>
            <img src="react.png" className="react" alt="React logo"></img>
            <img src="IMG_3282.PNG" className="monica" alt="Monica looking down"></img>
            <img src="mongodb.png" className="mongodb" alt="MongoDB logo"></img>
            <img src="nodejs.png" className="nodejs" alt="NodeJS logo"></img>
            <img src="express.png" className="express" alt="Express JS logo"></img>
            <img src="github.png" className="github" alt="GitHub logo"></img>
        </>
    )
}