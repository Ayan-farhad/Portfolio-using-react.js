import "./About.css";
import AboutCards from "./aboutcards";
import aboutlogo from "../../Assets/about-img.png";
import 'animate.css';

function About() {
    return (
        <div id="about" className="About-main-container">
            <div className="about-intro-container animate__animated animate__backInLeft">
                <h1 className="about-h1">
                    Know Who <span className="blue">I'M</span>
                </h1>
                <AboutCards />
            </div>

            <div className="About-image animate__animated animate__backInDown">
                <img src={aboutlogo} alt="aboutLogo" className="About-logo" />
            </div>
        </div>
    )
}

export default About;