import React from 'react'
import arrows from '../../models/arrows'
import { Link } from 'react-router-dom'
import styles from './RightArrow.module.css'

function RightArrow() {
  return (
    <div>
    <Link to="/Projects" style={{ textDecoration: 'none', color: '#C3CEDA' }}>
        <div className={`${styles.rightArrow}`}>{arrows.right}</div>
    </Link>
</div>
  )
}

export default RightArrow