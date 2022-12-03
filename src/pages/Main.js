import NavBar from "../components/NavBar"
import '../CSS/main.css'


export default function Main (props) {
    return (
        <>
            <header>
                <h1>Welcome to My Portfolio</h1>
            </header>
            <NavBar />
            <div className="grid-container">
                <div className="item1">
                    <img src="html5.png" className="html" alt="HTML logo"></img>
                </div>
                <div className="item2">
                    <img src="css3.png" className="css" alt="CSS logo"></img>
                </div>
                <div className="item3">
                    <img src="javascript.png" className="js" alt="JavaScript logo"></img>
                </div>
                <div className="item4">
                    <img src="react.png" className="react" alt="React logo"></img>
                </div>
                <div className="monica">
                    <img src="IMG_3282.PNG" className="monica" alt="Monica looking down"></img>
                </div>
                <div className="item5">
                    <img src="mongodb.png" className="mongodb" alt="MongoDB logo"></img>
                </div>
                <div className="item6">
                    <img src="nodejs.png" className="nodejs" alt="NodeJS logo"></img>
                </div>
                <div className="item7">
                    <img src="express.png" className="express" alt="Express JS logo"></img>
                </div>
                <div className="item8">
                    <img src="github.png" className="github" alt="GitHub logo"></img>
                </div>
            </div>
            <footer>Website created by Monica &#169; 2022</footer>
        </>
    )
}