import { NavLink, useNavigate } from "react-router-dom"
import './MainCenter.css'
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { OnesTwo, Project, Story, myOneTwo, myProject, myStory } from "../../Data/Data";
import { useEffect, useState } from "react";


const MainCenter = () => {

    const navigate = useNavigate();

    const [lastStories, setlastStories] = useState<myStory[]>([]);
    const [lastProjects, setlastProjects] = useState<myProject[]>([]);
    const [oneTwo, setoneTwo] = useState<myOneTwo[]>([]);

    useEffect(() => {
        setlastStories(Story.slice(0, 6));
        setlastProjects(Project.slice(0, 6));
    }, []);

    useEffect(() => {
        const randomArray: number[] = [];
        let randomElement: myOneTwo[] = [];

        let randomNumber: number = Math.floor(Math.random() * OnesTwo.length) + 1;
        while (randomArray.length < 3) {
            if (!randomArray.includes(randomNumber)) {
                randomArray.push(randomNumber);
                randomElement.push(OnesTwo[randomNumber - 1]);
            }
            randomNumber = Math.floor(Math.random() * OnesTwo.length) + 1;
        }

        setoneTwo(randomElement);

    }, []);

    return (
        <div className="main-center">
            <div className="course">
                <div className="front">
                    <div className="front-cover">
                        <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJvbnQlMjBlbmR8ZW58MHx8MHx8fDA%3D" alt="" />
                        <div className="about-front">
                            <span>Front End Proqramlaşdırma</span>
                            <NavLink to={'/courses/front-end'}>Ətraflı Bax</NavLink>
                        </div>
                    </div>
                    <div className="front-elements">
                        <span><IoCheckmarkDoneCircle className="done-icon" />HTML 5</span>
                        <span><IoCheckmarkDoneCircle className="done-icon" />CSS 3</span>
                        <span><IoCheckmarkDoneCircle className="done-icon" />JavaScript</span>
                        <span><IoCheckmarkDoneCircle className="done-icon" />React</span>
                        <span><IoCheckmarkDoneCircle className="done-icon" />TypeScript</span>
                        <span><IoCheckmarkDoneCircle className="done-icon" />BOOTSTRAP</span>
                        <span><IoCheckmarkDoneCircle className="done-icon" />Material UI</span>
                        <span><IoCheckmarkDoneCircle className="done-icon" />Github & Git</span>
                        <span><IoCheckmarkDoneCircle className="done-icon" />Portfolio</span>
                    </div>
                </div>
            </div>

            <div className="projects">
                <div className="projects-head">
                    <h2>Son işlərim</h2>
                    <NavLink to={'/projects'}>Hamısına bax</NavLink>
                </div>
                <div className="projects-main">
                    {
                        lastProjects.map((e) => {
                            return <div key={e.id}>
                                <span>{e.name}</span>
                                <a onClick={() => navigate(`/projects/project-${e.id}`)}>Ətraflı</a>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className="stories">
                <h2>Ən Son Yazılarım</h2>
                <div>
                    {
                        lastStories.map((e) => {
                            return <div key={e.id}>
                                <img src={e.NewsCover} alt={e.NewsName} />
                                <span>{e.NewsName}</span>
                                <a onClick={() => navigate(`/stories/${e.tema}-${e.id}`)}>Ətraflı</a>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className="ones-two">
                <div className="ones-two-head">
                    <h2>Ordan - Burdan</h2>
                    <NavLink to={'/one-two'}>Hamısına Bax</NavLink>
                </div>
                <div className="ones-two-element">
                    {
                        oneTwo.map((e) => {
                            return <div key={e.id}>
                                <span>{e.id}</span>
                                <h3>{e.name}</h3>
                                <span>{e.date}</span>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MainCenter