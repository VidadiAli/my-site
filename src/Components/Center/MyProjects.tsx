import { useParams } from "react-router-dom"
import { myProject, Project } from "../../Data/Data";
import { useEffect, useState } from "react";
import './MyProjects.css'

const MyProjects = () => {

    const { project } = useParams();
    const [lastElement, setLastElement] = useState<string | undefined>('');

    useEffect(() => {
        setLastElement(project);
    }, [project])

    return (
        <div className="my-project">
            {
                Project.map((e: myProject) => {
                    if (e.id === Number(lastElement?.split('-').reverse()[0])) {
                        return <div className="this-project" key={e.id}>
                            <div className="this-project-head">
                                <h2>{e.name}</h2>
                                <a href={e.link} target="_blank">sayta bax</a>
                            </div>
                            <div className="this-project-main">
                                <iframe src={e.link} ></iframe>
                            </div>
                        </div>
                    }
                })
            }
        </div>
    )
}

export default MyProjects