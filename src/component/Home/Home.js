import "./Home.css";
import Type from "./type";
import logo from "../../Assets/home-img.webp";

function Home() {
    return (
        <div className="Home-main-container">
            <div className="Home-intro-container">
                <div className="Home-greeting">Hi There!{" "}
                    <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                    </span>
                </div>
                <div className="Home-name">I'M <span className="name-styling">AYAN FARHAD</span></div>
                <Type />
            </div>
            <div className="Home-image">
                <img src={logo} alt="logo" className="home-logo" />
            </div>
        </div>
    )
}

export default Home;