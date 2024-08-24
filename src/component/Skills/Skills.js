import "./Skills.css";
import SkillIcons from "./skillIcons";

function Skills() {
    return (
        <div id="skills" className="Skills-main-container">
            <p className="skill-heading">Professional <span className="blue">Skillset</span></p>
            <SkillIcons />
        </div>
    )
}

export default Skills;