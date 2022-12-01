import '../App.css';
import NavBar from '../components/NavBar';


export default function AboutMe (props) {
    return (
        <>
            <div className='header'>
                <h1 className='h1'>
                    Learn More About Monica &hearts;
                </h1>
            </div>
            <NavBar />
            <div className='first-block'>
                <img className='artImage' src="IMG_3280.PNG" alt='Monica posing while standing'></img>
            </div>
            <div className='second-block'>
                <h2 className='title'>
                    "Hello World", my name is Monica!<br></br>Welcome to my portfolio!
                </h2>
                <p>
                    I enjoy creating aesthetically pleasing things. I believe through software engineering, I've been able to connect the right side of my brain with the left side by combining my artistic abilities with logical problem solving.
                    <ul>
                        <li>
                            <h3>
                                Graduated from Per Scholas bootcamp, Women In Software Engineering program
                            </h3>
                        </li>
                        <p>
                            Rigorous 15 week bootcamp. Did pair programming with my cohort. Completed multiple projects.
                        </p>
                        <li>
                            <h3>
                                Learned Full Stack, niche in Front End
                            </h3>
                        </li>
                        <p>
                            As a creative/visual artist, it was inevitable that Front End would be my preferred stack.
                        </p>
                        <li>
                            <h3>
                                Professional background: Administrative Assistant
                            </h3>
                        </li>
                        <p>
                            I've worked in medical admin and admin for an energy conservation company. I truly enjoy being organized and accomplishing my day to day goals.
                        </p>
                        <li>
                            <h3>
                                Visual Artist, hobby turned business
                            </h3>
                        </li>
                        <p>
                            I've showcased and sold my artwork in multiple art shows, sold commissioned paintings, and even instructed paint and sip events.
                        </p>
                    </ul>
                </p>
            </div>
        </>
    )
}