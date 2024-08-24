import "./Home.css";
import Type from "./type";
import logo from "../../Assets/home-img.webp";
import 'animate.css';

function Home() {
    return (
        <div id="home" className="top">
            <div className="Home-main-container">
                <div className="Home-intro-container  animate__animated animate__backInLeft">
                    <div className="Home-greeting">Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </div>
                    <div className="Home-name">I'M <span className="name-styling">AYAN FARHAD</span></div>
                    <div className="typewriter-container">
                        <Type />
                    </div>
                    <a href="#"><button className="home-hire-me">Hire Me</button></a>
                </div>
                <div className="Home-image  animate__animated animate__backInDown">
                    <img src={logo} alt="logo" className="home-logo" />
                </div>
            </div>
        </div>
    )
}

export default Home;