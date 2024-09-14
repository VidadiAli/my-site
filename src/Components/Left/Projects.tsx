import { myProject, Project } from "../../Data/Data";
import './Projects.css'

const Projects = () => {
  return (
    <div className="all-projects">
      {
        Project.map((e: myProject) => {
          return <div key={e.id} className="all-projects-element">
            <div className="all-projects-element-head">
              <span>{e.name}</span>
              <a href={e.link} target="_blank">sayta göz at</a>
            </div>
            <div className="iframe-container">
              <iframe src={e.link}></iframe>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Projects