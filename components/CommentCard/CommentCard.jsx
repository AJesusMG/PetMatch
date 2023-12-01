import React from "react";
import { Card, Typography, Avatar } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Dog from "../../public/img/Mopri.png";

import styles from "./commentCardStyles.module.css";

const CommentCard = (props) => {
  return (
    <Card className={styles.Card} key={props.id}>
      <div className={styles.userInfo}>
        <div className={styles.avatarContainer}>
          <Avatar src={Dog} style={{ width: 50, height: 50,  marginTop: "10px" }} className={styles.iconStyle} />
        </div>
        <div className={styles.userContainer}>
          <p className={styles.userStyle}>{props.userName}</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p>{props.comment}</p>
      </div>
      <div className={styles.addContainer}>
          <IconButton aria-label="addComment">
            <AddCommentIcon />
          </IconButton>
        <Typography variant="caption" color="textSecondary">
          {props.numComments} comentarios
        </Typography>
      </div>
    </Card>
  );
};

export default CommentCard;

