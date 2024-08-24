import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiGit,
    DiCss3
} from "react-icons/di";
import {
    AiFillHtml5
} from "react-icons/ai";
import {
    SiFirebase,
    SiNextdotjs,
    SiTypescript,
    SiRedux,
    SiExpress,
    SiTailwindcss,
    SiBootstrap,
    SiGithub
} from "react-icons/si";

function SkillIcons() {
    return (
        <div className="skills-grid">
            <div className="icon-layout">
                <AiFillHtml5 />
                <p>Html</p>
            </div>
            <div className="icon-layout">
                <DiCss3 />
                <p>CSS</p>
            </div>
            <div className="icon-layout">
                <SiBootstrap />
                <p>Bootstrap</p>
            </div>
            <div className="icon-layout">
                <DiJavascript1 />
                <p>Javascript</p>
            </div>
            <div className="icon-layout">
                <SiTypescript />
                <p>Typescript</p>
            </div>
            <div className="icon-layout">
                <DiReact />
                <p>React</p>
            </div>
            <div className="icon-layout">
                <SiRedux />
                <p>Redux</p>
            </div>
            <div className="icon-layout">
                <DiNodejs />
                <p>Node.js</p>
            </div>
            <div className="icon-layout">
                <SiExpress />
                <p>Express.js</p>
            </div>
            <div className="icon-layout">
                <DiMongodb />
                <p>MongoDB</p>
            </div>
            <div className="icon-layout">
                <SiNextdotjs />
                <p>Next.js</p>
            </div>
            <div className="icon-layout">
                <SiGithub />
                <p>Github</p>
            </div>
            <div className="icon-layout">
                <DiGit />
                <p>Git</p>
            </div>
            <div className="icon-layout">
                <SiFirebase />
                <p>Firebase</p>
            </div>
            <div className="icon-layout">
                <SiTailwindcss />
                <p>Tailwindcss</p>
            </div>
        </div >
    )
}

export default SkillIcons;