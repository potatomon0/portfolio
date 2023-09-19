import React from 'react'
import arrows from '../../models/arrows'
import { Link } from 'react-router-dom'
import styles from './LeftArrow.module.css'

function LeftArrow() {
    return (
        <div>
            <Link to="/" style={{ textDecoration: 'none', color: '#C3CEDA' }}>
                <div className={`${styles.leftArrow}`}>{arrows.left}</div>
            </Link>
        </div>
    )
}

export default LeftArrow