import React from 'react'
import styles from './GoBack.module.css'

function GoBack() {
  return (
    <a href="/Projects"><img src="https://call2recycle.s3.amazonaws.com/us-wordpress/20170127140840/goback-button.png" alt="" className={`${styles.goBackImg}`}/></a>
  )
}

export default GoBack