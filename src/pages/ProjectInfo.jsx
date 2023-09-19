import { useContext, useEffect } from 'react'
// import {useParams} from 'react-router-dom'
import { AppContext } from '../contexts/context'
import styles from './ProjectInfo.module.css'
import Dropdown from '../components/Dropdown'
import GoBack from '../components/GoBack/GoBack'
// projectInfo from '../models/projectInfo'

function ProjectInfo() {
  // const p = useParams()
  // const project = p
  // console.log("here: ", project)

  const { currentProject, setCurrentProject } = useContext(AppContext)

  // useEffect(() => {
  //   setCurrentProject(window.localStorage.getItem('currentProject'));
  // }, []);
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.topContainer}`}>
        <div className={`${styles.GoBack}`}></div>
        <GoBack />
        <div className={`${styles.header}`}>
          <h1 className={`${styles.title}`}>
            {currentProject.name}</h1>
          <h3 className="tech">Technologies used: {currentProject.tech}</h3>
        </div>
        <div className={`${styles.menudrop}`}></div>
        <Dropdown />
      </div>
      <div className={`${styles.container}`}>
        <div className={`${styles.imgContainer}`}>
          <img src={require(`../img/${currentProject.img}.png`)} alt="" className={`${styles.projectImage}`} />
        </div>
        <div className={`${styles.subContainer}`}>
          <a href={`${currentProject.link}`} target='_blank' rel="noopener noreferrer"><h2>App Link</h2></a>
          <br />
          <a href={`${currentProject.git}`} target='_blank' rel="noopener noreferrer"><h2>GitHub Repo</h2></a>
          <h3>{currentProject.intro}</h3>
        </div>

      </div>


    </div>
  )
}

export default ProjectInfo