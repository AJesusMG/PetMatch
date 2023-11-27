import React from 'react'
import SideBar from '../../../components/SideBar/sideBar'
import CommentCard from '../../../components/CommentCard/CommentCard'
import styles from "./comments.module.css";

export const Comments = () => {
  return (
  <div className={styles.Container}>
    <div className={styles.sideBar}> 
      <SideBar />
    </div>
    <div className={styles.Comments}>
      <h1>Hola</h1>
    </div>
    <div className={styles.commentCard}>
      <CommentCard />
    </div>
  </div> 
  )
}

export default Comments
