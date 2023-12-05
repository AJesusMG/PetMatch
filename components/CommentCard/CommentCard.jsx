import React, { useState } from "react";
import { Card, Typography, Avatar, Modal, Fade, Backdrop } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Dog from "../../public/img/Mopri.png";

import styles from "./commentCardStyles.module.css";
import AnswerCard from "../AnswerCard/AnswerCard";

const CommentCard = (props) => {
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
        <div className={styles.userContainer}>
          <p className={styles.userStyle}>{props.userName}</p>
        </div>
      </div>
      <div className={styles.textContainer}>
        <p>{truncatedComment}</p>
      </div>
      <div className={styles.addContainer}>
        <IconButton aria-label="addComment" onClick={handleAddButtonClick}>
          <AddCommentIcon className={styles.addStyles} />
        </IconButton>
        <Typography variant="caption" color="textSecondary">
          {props.numComments} comentarios
        </Typography>
      </div>
       {/* Modal para AnswerCard */}
       <Modal
        open={isAnswerModalOpen}
        onClose={() => setAnswerModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <Fade in={isAnswerModalOpen}>
        <div className={styles.reportModalBackdrop} onClick={() => setAnswerModalOpen(false)}>
            <div className={styles.reportModalContainer} onClick={(e) => e.stopPropagation()}>
            <AnswerCard userName={props.userName} truncatedComment={truncatedComment} />
          </div>
          </div>
        </Fade>
      </Modal>
    </Card>
  );
};

export default CommentCard;

