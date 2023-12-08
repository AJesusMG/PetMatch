import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Typography, Avatar, Modal, Fade, Backdrop } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Dog from "../../public/img/Mopri.png";
import AnswerCard from "../AnswerCard/AnswerCard";

import styles from "./answerCommunityStyles.module.css";

const AnswerCommunity = (props) => {
  const truncatedComment = props.comment.length > 100
    ? props.comment.slice(0, 140) + "..."  // Limita a 100 caracteres y agrega puntos suspensivos
    : props.comment;

  const [isAnswerModalOpen, setAnswerModalOpen] = useState(false);

  const handleAddButtonClick = () => {
    setAnswerModalOpen(true);
  };

  return (
    <Card className={styles.Card} key={props.id}>
      <div className={styles.userInfo}>
        <div className={styles.avatarContainer}>
          <Avatar src={Dog} style={{ width: 50, height: 50, marginTop: "10px" }} className={styles.iconStyle} />
        </div>
      </div>
      <div className={styles.textContainer}>
        <p>{truncatedComment}</p>
      </div>
    </Card>
  );
};

export default AnswerCommunity;

