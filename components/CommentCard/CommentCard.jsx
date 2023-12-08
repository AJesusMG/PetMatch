// Importaciones de módulos y componentes de Material-UI y estilos locales
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, Typography, Avatar, Modal, Fade, Backdrop } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCommentIcon from "@mui/icons-material/AddComment";
import Dog from "../../public/img/Mopri.png";
import AnswerCard from "../AnswerCard/AnswerCard";

import styles from "./commentCardStyles.module.css";

// Definición del componente CommentCard
const CommentCard = ( props ) => {
  // Trunca el comentario si es mayor a 100 caracteres, añadiendo puntos suspensivos
  const truncatedComment = props.comment.length > 100
    ? props.comment.slice(0, 140) + "..."  // Limita a 100 caracteres y agrega puntos suspensivos
    : props.comment;

  // Estado para controlar la apertura y cierre del modal de AnswerCard
  const [isAnswerModalOpen, setAnswerModalOpen] = useState(false);

  // Manejador de eventos para abrir el modal de AnswerCard
  const handleAddButtonClick = () => {
    setAnswerModalOpen(true);
  };

  return (
    // Estructura del componente Card que contiene la información del comentario
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
      {/* Contenedor de la sección para agregar comentarios y ver respuestas */}
      <div className={styles.addContainer}>
        <IconButton aria-label="addComment" onClick={handleAddButtonClick}>
          <AddCommentIcon className={styles.addStyles} />
        </IconButton>
        {/* Enlace para ver respuestas y número de comentarios */}
        <Link to={`/FullCommentCommunity?userName=${props.userName}&comment=${encodeURIComponent(props.comment)}`}>
          <Typography variant="caption" color="textSecondary">
            {props.numComments} comentarios
          </Typography>
        </Link>
      </div>
      {/* Modal para mostrar AnswerCard */}
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
