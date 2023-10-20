import React from "react";
import { Card } from "@mui/material";
import Dog from "../../public/img/Dog.jpg";

import styles from "./postCardStyles.module.css";

const userName = "@ElCaminoDelProgramador";

const PostCard = ({}) => {
  return (
    <Card className={styles.Card}>
      <img className={styles.Dog} src={Dog} alt="Dog" />
      <div className={styles.overlay}>
        <h2 className={styles.userName}>{userName}</h2>
      </div>
    </Card>
  );
};

export default PostCard;
