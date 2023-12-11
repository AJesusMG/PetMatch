import React, { useState } from 'react'
import { Avatar, Grid, Modal, Backdrop, Fade } from "@mui/material";
import SideBar from "../../../components/SideBar/sideBar";
import PostCard from "../../../components/PostCard/PostCard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AdoptFullPostInProfile from '../../../components/AdoptFullPostInProfile/AdoptFullPostInProfile'
import Profile from "../../../public/img/dog_1.png";
import ReportCard from "../../../components/ReportCard/ReportCard";

import styles from "./myAccountStyles.module.css";


const PostInfo = [
  {
    id: 1,
    img: "https://picsum.photos/200/300?random=1",
    userName: "@Usuario1",
  },
  {
    id: 2,
    img: "https://picsum.photos/200/300?random=2",
    userName: "@Usuario2",
  },
  {
    id: 3,
    img: "https://picsum.photos/200/300?random=3",
    userName: "@Usuario3",
  },
  {
    id: 4,
    img: "https://picsum.photos/200/300?random=4",
    userName: "@Usuario4",
  },
];

const handleProfileClick = () => {
  // Agrega aquí la lógica de redirección o acciones específicas del perfil
  console.log("Perfil clickeado");
  // Puedes agregar aquí la lógica de redirección o acciones específicas del perfil
};


const ProfileInfo = [
  {
    id: 1,
    userName: "Nutriayapa",
    email: "alanj.ajmg@outlook.com"
  }
]

export default function MyAccount() {
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
  const [isReportModalOpen, setReportModalOpen] = useState(false);

  const handleProfileClick = () => {
    setProfileMenuOpen(true);
  };

  const handleModalClose = () => {
    setProfileMenuOpen(false);
  };

  const handlePostCardClick = (post) => {
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

  const handleReportButtonClick = () => {
    setReportModalOpen(true);
  };

  return (
    <div className={styles.containerFlex}>
      <div className={styles.sideContainer}>
        <SideBar />
      </div>
      <div className={styles.catalogContainer}>
      <div className={styles.topContainer}>
          <div>
            <p className={styles.titleCatalogue}>Mi Perfil</p>
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
        <div className={styles.postContainer}>
          <Grid container spacing={2}>
            {PostInfo.map((post, index) => (
              <Grid item key={index}>
                <PostCard {...post} onClick={() => handlePostCardClick(post)} />
              </Grid>
            ))}
          </Grid>
        </div>
        {/* Modal de AdoptFullPost */}
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
                {selectedPost && <AdoptFullPostInProfile {...selectedPost} onReportButtonClick={handleReportButtonClick} />}
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
      {/* Modal de ReportCard */}
      <Modal
        open={isReportModalOpen}
        onClose={() => setReportModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <Fade in={isReportModalOpen}>
          <div className={styles.reportModalBackdrop} onClick={() => setReportModalOpen(false)}>
            <div className={styles.reportModalContainer} onClick={(e) => e.stopPropagation()}>
              <ReportCard />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}