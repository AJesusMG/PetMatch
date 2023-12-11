import React, { useState } from "react";
import { Avatar, Button, Card, Fade, Grid, Modal, TextField, Backdrop } from "@mui/material";
import SideBar from "../../../components/SideBar/sideBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CommentCard from "../../../components/CommentCard/CommentCard";
import NewsCard from "../../../components/NewsCard/NewsCard";
import LittleNewsCard from "../../../components/LittleNewsCard/LittleNewsCard";
import ProfileMenu from "../../../components/ProfileMenu/ProfileMenu";
import Profile from "../../../public/img/dog_1.png";

import styles from "./communityStyles.module.css";

const handleProfileClick = () => {
  // Agrega aquí la lógica de redirección o acciones específicas del perfil
  console.log("Perfil clickeado");
  // Puedes agregar aquí la lógica de redirección o acciones específicas del perfil
};

const CommentInfo = [
  {
    id: 1,
    userName: "@a.jesus.g",
    comment: "¿Puedes brindarme un consejo sobre cómo cuidar y criar a un perro de la mejor manera posible?¿Puedes brindarme un consejo sobre cómo cuidar y criar a un perro de la mejor manera posible?¿Puedes brindarme un consejo sobre cómo cuidar y criar a un perro de la mejor manera posible?",
    numComments: 15,
  },
  {
    id: 2,
    userName: "@Nutriayapa",
    comment: "¿Porque Bryan es tan hot?",
    numComments: 15,
  },
  {
    id: 3,
    userName: "@elcaminodelprogramador",
    comment: "¿Puedes brindarme un consejo sobre cómo cuidar y criar a un perro de la mejor manera posible?",
    numComments: 15,
  },
  {
    id: 4,
    userName: "@elzavaletonga",
    comment: "¿Puedes brindarme un consejo sobre cómo cuidar y criar a un perro de la mejor manera posible?",
    numComments: 15,
  },
  {
    id: 5,
    userName: "@Faker",
    comment: "¿Como subir de elo a un bronce en LATAM, especificamente LAS?",
    numComments: 15,
  },
];

const ProfileInfo = [
  {
    id: 1,
    userName: "Nutriayapa",
    email: "alanj.ajmg@outlook.com"
  }
]

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
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

  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setProfileMenuOpen(true);
  };

  const handleModalClose = () => {
    setProfileMenuOpen(false);
  };

  return (
    <div className={styles.containerFlex}>
      <div className={styles.sideContainer}>
        <SideBar />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.communityContainer}>
          <div className={styles.stickyContainer}>
            <Card className={styles.cardStyles}>
              <div>
                <p className={styles.title}>Comunidad</p>
                <Button variant="text" className={styles.btnStyle} onClick={handleScrollToTop}>
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
                  src={Profile}
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
                  maxRows={2}
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
            <Grid container spacing={2}>
              {CommentInfo.map((post, index) => (
                <Grid item key={index}>
                  <CommentCard {...post} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <div className={`${styles.newsCard} ${styles.fixedNewsCard}`}>
          <NewsCard />
        </div>
        <div className={`${styles.lNewsCard} ${styles.lFixedNewsCard}`}>
          <LittleNewsCard />
        </div>
      </div>
      <div className={styles.iconContainer}>
        <Avatar
          alt="Profile Image"
          src={Profile}
          onClick={handleProfileClick}
          className={styles.iconStyle}
        >
          <AccountCircleIcon />
        </Avatar>
      </div>
      <Modal
        open={isProfileMenuOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: { backgroundColor: "transparent" },
        }}
      >
        <Fade in={isProfileMenuOpen}>
          <div className={styles.menuContainer}>
            <Grid>
              {ProfileInfo.map((post, index) => (
                <Grid item key={index}>
                  <ProfileMenu {...post} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
