import React from 'react';
import { Card, Avatar } from '@mui/material';
import Dog from "../../public/img/Mopri.png";

import styles from "./fullCommentStyles.module.css";

const maxLength = 300;

const FullComment = (props) => {
  const { userName, comment } = props;
  const truncatedComment = comment.length > maxLength
    ? `${comment.slice(0, maxLength)}`
    : comment;

  return (
    <div>
      <Card className={styles.card} key={props.id}>
        <div className={styles.userInfo}>
          <div className={styles.avatarContainer}>
            <Avatar src={Dog} style={{ width: 50, height: 50, marginTop: "10px" }} className={styles.iconStyle} />
          </div>
          <div className={styles.userContainer}>
            <p className={styles.userStyle}>{userName}</p>
          </div>
        </div>
        <div className={styles.textContainer}>
          <p>{truncatedComment}</p>
        </div>
      </Card>
    </div>
  );
}

export default FullComment;
