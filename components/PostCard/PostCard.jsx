import React from "react";
import { Card } from "@mui/material";

import styles from "./postCardStyles.module.css";

const PostCard = (props) => {
  return (
    <Card className={styles.Card} key={props.id}>
      <img className={styles.Dog} src={props.img} alt="Imagen de un perro" />
      <div className={styles.overlay}>
        <h2 className={styles.userName}>{props.userName}</h2>
      </div>
    </Card>
  );
};

export default PostCard;

