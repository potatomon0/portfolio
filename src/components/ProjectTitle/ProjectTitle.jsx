import React from 'react'
import styles from './ProjectTitle.module.css'

function ProjectTitle(props) {
  return (
    <div className={`${styles.pjTitle}`}>{props.pj.name}</div>
  )
}

export default ProjectTitle