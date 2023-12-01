import React, { useState } from "react";
import styles from "./adminReportsStyles.module.css";
import Profile from "../../../public/img/dog_1.png";
import CardImage from "../../../public/img/Perro_F.jpg";
import SecondImage from "../../../public/img/Ave_4.jpg";
import { Avatar, Fade, Grid, Backdrop, Modal } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuAdmin from "../../../components/MenuAdmin/MenuAdmin";
import AdoptCard from "../../../components/AdoptCard/AdoptCard";
import AdoptFullPostReport from '../../../components/AdoptFullPostReport/AdoptFullPostReport'

const handleProfileClick = () => {
  // Agrega aquí la lógica de redirección o acciones específicas del perfil
  console.log("Perfil clickeado");
  // Puedes agregar aquí la lógica de redirección o acciones específicas del perfil
};

const cardData = [
  {
    id: 1,
    userName: "@Bryan_Guandayapa",
    img: CardImage,
    descripcion: "Tu descripción personalizada",
  },
  {
    id: 2,
    userName: "@Emilio_Aquet",
    img: SecondImage,
    descripcion: "Tu descripción personalizada",
  },
  {
    id: 3,
    userName: "@Tinajero_alan",
    img: SecondImage,
    descripcion: "Tu descripción personalizada",
  },
  {
    id: 4,
    userName: "@LGzuz_29",
    img: SecondImage,
    descripcion: "Tu descripción personalizada",
  },
  {
    id: 5,
    userName: "@tuusuario",
    img: SecondImage,
    descripcion: "Tu descripción personalizada",
  },
];

const ProfileInfo = [
  {
    id: 1,
    userName: "Nutriayapa",
    email: "alanj.ajmg@outlook.com"
  }
]

export default function AdminReports( props ) {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isAdoptModalOpen, setAdoptModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({

    description: "Hoy quiero presentarles a este hermoso perro blanco que ha llegado a mi vida y está en busca de un nuevo hogar. Se trata de un encantador Husky de un año de edad que ha conquistado nuestros corazones con su belleza y personalidad juguetona.",
    race: "Husky ",
    size: "Grande",
    age: "0.5 - 1 año",
    instagram: "a.jesus.g",
    whatsapp: "2712452978",
    facebook: "Alan Morales",

  });

  const handleProfileClick = () => {
    setProfileMenuOpen(true);
  };

  const handleModalClose = () => {
    setProfileMenuOpen(false);
  };

  const handlePostCardClick = (post) => {
    console.log("handlePostCardClick called");
    setSelectedPost({
      description: "Hoy quiero presentarles a este hermoso perro blanco que ha llegado a mi vida y está en busca de un nuevo hogar. Se trata de un encantador Husky de un año de edad que ha conquistado nuestros corazones con su belleza y personalidad juguetona.",
      race: "Husky ",
      size: "Grande",
      age: "0.5 - 1 año",
      instagram: "a.jesus.g",
      whatsapp: "2712452978",
      facebook: "Alan Morales",
      ...post,
    });
    setAdoptModalOpen(true);
  };

  const handleAdoptModalClose = () => {
    setAdoptModalOpen(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.NavItems}>
        <div>
          <h1 className={styles.Title}>Post Reportados</h1>
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
      </div>
      <div>
        <div>
          <div className={styles.Card}>
            <Grid container spacing={0.0625}>
              {cardData.map((post, index) => (
                <Grid item key={index}>
                  <AdoptCard {...post} onClick={() => handlePostCardClick(post)} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
      <Modal
          open={isAdoptModalOpen}
          onClose={handleAdoptModalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
            style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          }}
        >
          <Fade in={isAdoptModalOpen}>
            <div className={styles.modalBackdrop} onClick={handleAdoptModalClose}>
              <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                {/* Pasa la información del post seleccionado al componente AdoptFullPost */}
                {selectedPost && <AdoptFullPostReport {...selectedPost} />}
              </div>
            </div>
          </Fade>
        </Modal>
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
                  <MenuAdmin {...post} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
