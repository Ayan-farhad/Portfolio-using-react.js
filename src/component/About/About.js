import "./About.css";
import AboutCards from "./aboutcards";
import aboutlogo from "../../Assets/about-img.png";

function About() {
    return (
        <div className="About-main-container">
            <div className="about-intro-container">
                <h1 className="about-h1">
                    Know Who <span>I'M</span>
                </h1>
                <AboutCards />
            </div>

            <div className="About-logo">
                <img src={aboutlogo} alt="aboutLogo" />
            </div>
        </div>
    )
}

export default About;