import { useState, useEffect, useContext } from 'react'
import './Projects.css'
import { AppContext } from '../contexts/context'
import MyLinks from '../components/MyLinks'
import Dropdown from '../components/Dropdown'
import LeftArrow from '../components/LeftArrow'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import projectInfo from '../models/projectInfo'
import Navbar from '../components/Navbar'

function Projects() {
  let { setOpen, currentProject, setCurrentProject } = useContext(AppContext)
  const [done, setDone] = useState(undefined)
  useEffect(() => {
    setOpen(false);
    setTimeout(() => {
      setDone(true);
    }, 600);
  }, []);
  return (
    <>
      {!done ? (
        <div className='loading'><ReactLoading
          type={"bubbles"}
          color={"#C3CEDA"}
          height={100}
          width={100}
        /></div>
      ) :
        <div className="projectsMain">
          <div className="leftArrowBox">
            <LeftArrow />
          </div>
          <div className="projectContainer">
            <h1 className="pageTitle">
              Web Developer Portfolio
            </h1>
            {/* <div className="filterSection">Sort by tag</div> */}
            <div className="projects">
              {projectInfo.map((project, i) => {
                  const handleClick=()=>{
                    setCurrentProject(project)
                    // window.localStorage.setItem('currentProject', currentProject);
                  }
                return (
                  <div className='project' onClick={handleClick} key={i}>
                    <img src={require(`../img/${project.img}.png`)} alt="" className="pjImg" />
                    <Link to={`/ProjectInfo/${project.name}`} >
                      {/* <div className="project"> */}
                      <div className='projectName'>
                        {project.name}
                      </div>
                      <div>
                        {project.headline}
                      </div>
                      {/* </div> */}
                    </Link>
                  </div>
                )
              }
              )}
              {/* <div className="project">
                <Link to="/Project1" style={{ textDecoration: 'none', color: '#C3CEDA' }}><div className="pjLinkDiv"><img src={pj1Img} alt="" className="pjImg" /><h5>Project1</h5></div></Link>
              </div>
              <div className="project"><Link to="/Project2" style={{ textDecoration: 'none', color: '#C3CEDA' }}><div className="pjLinkDiv"><img src={pj2Img} alt="" className="pjImg" /><h5>Project2</h5></div></Link></div>
              <div className="project"><Link to="/Project3" style={{ textDecoration: 'none', color: '#C3CEDA' }}><div className="pjLinkDiv"><img src={pj3Img} alt="" className="pjImg" /><h5>Project3</h5></div></Link></div>
              <div className="project"><Link to="/Project4" style={{ textDecoration: 'none', color: '#C3CEDA' }}><div className="pjLinkDiv"><img src={pj4Img} alt="" className="pjImg" /><h5>Project4</h5></div></Link></div> */}
            </div>
          </div>
          <div className="rightLinkBox">
            <Dropdown />
            <MyLinks side={"rightLinks"} />
          </div>
          <Navbar />
          <div className="hide"></div>
        </div>
      }
    </>
  )
}

export default Projects