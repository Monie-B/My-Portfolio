import '../App.css';
import NavBar from '../components/NavBar';


export default function AboutMe (props) {
    return (
        <>
            <div className='header'>
                <h1 className='h1'>Learn More About Monica &hearts;</h1>
            </div>
            <NavBar />
            <div className='first-block'>
                <img className='artImage' src="IMG_3280.PNG" alt='Monica posing while standing'></img>
            </div>
            <div className='second-block'>
                <h2>"Hello World", my name is Monica! Welcome to my portfolio!</h2>
                {/* Turn below section into bullet points. Decrease reader fatigue */}
                <p>I am a Full Stack Software Engineer. My favorite stack is Front End because of my artistic passions. I was so fortunate to stumble upon Per Scholas because it was during a time in my life when I was able to fully commit to learning about software engineering. As a creative, it was inevitable that front end would be my preferred stack. My professional background is administrative assistant.However, I am truly a creative at heart! I am a visual artist. I've showcased amd sold my artwork in multiple art shows, sold commissioned paintings, and even instructed paint and sip events. I enjoy creating aesthetically pleasing things. I tell myself that through software engineering, I've been able to connect the right side of my brain with the left side by combining my artistic abilities with logical problem solving.
                    <ul>
                        <li>Graduated from Per Scholas bootcamp, Women In Software Engineering</li>
                        <li>Learned Full Stack, niche in Front End</li>
                        <li>Professional background: Administrative Assistant</li>
                        <li>Visual Artist, hobby turned business</li>
                    </ul>
                </p>
            </div>
        </>
    )
}