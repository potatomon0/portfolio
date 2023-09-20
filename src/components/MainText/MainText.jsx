import React from 'react'
import styles from './MainText.module.css'

function MainText() {
    return (
        <div>
                <div className={`${styles.mainTextP1}`}>
                    Hello, my name is Hu, I am a graduated learner from Per Scholas accelerated
                    </div>
                <div className={`${styles.mainTextP2}`}>
                    Software Engineering program where I was trained on Frontend and Backend
                </div>
                <div className={`${styles.mainTextP3}`}>
                    Technologies. I have utilized ReactJS to create projects including this webpage.
                </div>
                <div className={`${styles.mainTextP4}`}>
                    I also have made projects with only HTML5, CSS, and Javascript.
                </div>
            </div>
    )
}

export default MainText