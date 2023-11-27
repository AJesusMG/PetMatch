import React, { useState } from "react";
import { Avatar, Button, Card, TextField } from "@mui/material";
import SideBar from "../../../components/SideBar/sideBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import styles from "./communityStyles.module.css";
import CommentCard from "../../../components/CommentCard/CommentCard";

const handleProfileClick = () => {
  // Agrega aquí la lógica de redirección o acciones específicas del perfil
  console.log("Perfil clickeado");
  // Puedes agregar aquí la lógica de redirección o acciones específicas del perfil
};

export default function Community() {
  const [textValue, setTextValue] = useState("");
  const maxCharacterLimit = 250;

  const handleTextChange = (event) => {
    const newTextValue = event.target.value;
    if (newTextValue.length <= maxCharacterLimit) {
      setTextValue(newTextValue);
    }
  };

  return (
    <div className={styles.containerFlex}>
      <div className={styles.sideContainer}>
        <SideBar />
      </div>
      <div className={styles.catalogContainer}>
        <div className={styles.iconContainer}>
          <Avatar
            alt="Profile Image"
            src="URL_DE_TU_IMAGEN"
            onClick={handleProfileClick}
            className={styles.iconStyle}
          >
            <AccountCircleIcon />
          </Avatar>
        </div>
        <div className={styles.cardContainer}>
          <Card className={styles.cardStyles}>
            <div>
              <p className={styles.title}>Comunidad</p>
              <Button variant="text" className={styles.btnStyle}>
                Inicio
              </Button>
            </div>
          </Card>
        </div>
        <Card className={styles.cardStyle}>
          <div className={styles.mainContainer}>
            <div className={styles.avatarContainer}>
              <Avatar
                alt="Profile Image"
                src="URL_DE_TU_IMAGEN"
                onClick={handleProfileClick}
                className={styles.avatarStyle}
              >
                <AccountCircleIcon />
              </Avatar>
            </div>
            <div className={styles.inputContainer}>
              <TextField
                id="outlined-multiline-flexible"
                label="Pregunta algo a la comunidad"
                multiline
                maxRows={4}
                value={textValue}
                onChange={handleTextChange}
                inputProps={{
                  maxLength: maxCharacterLimit,
                }}
                className={styles.inputStyle}
              />
              <div className={styles.counterContainer}>
                <p className={styles.characterCounter}>
                  {textValue.length}/{maxCharacterLimit}
                </p>
              </div>
              <div className={styles.btnContainer}>
                <Button className={styles.postBtn} variant="contained">
                  Publicar
                </Button>
              </div>
            </div>
          </div>
        </Card>
        <div className={styles.commentContainer}>
          <CommentCard />
        </div>
      </div>
    </div>
  );
}
