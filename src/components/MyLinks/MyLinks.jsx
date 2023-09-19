import React from 'react'
import resume from '../../files/hhResume.pdf'
import user from '../../img/user2.png'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import styles from './MyLinks.module.css'
import './MyLinks'

function MyLinks(props) {
    let side = props.side
    return (
        <div className={side}>
            <div className={`${styles.link}`}>
                <a href="https://www.linkedin.com/in/hhuang8/" target='_blank' rel="noopener noreferrer">
                <img src={linkedin} alt="" className={`${styles.linkIcon}`}/></a>
                </div>
            <div className='link'>
                <a href="https://github.com/potatomon0" target='_blank' rel="noopener noreferrer">
                <img src={github} alt="" className={`${styles.linkIcon}`}/></a>
            </div>
            <div className="link">
                <a href={resume} target="_blank" rel="noreferrer"><img src={user} alt="" className={`${styles.linkIcon}`} rel="noopener noreferrer"/></a>
            </div>
        </div>
    )
}

export default MyLinks