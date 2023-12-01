import React, { useState } from "react";
import styles from "./adminReportsStyles.module.css";
import Profile from "../../../public/img/dog_1.png";
import CardImage from "../../../public/img/Perro_F.jpg";
import SecondImage from "../../../public/img/Ave_4.jpg";
import { Avatar, Fade, Grid, Backdrop, Modal } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuAdmin from "../../../components/MenuAdmin/MenuAdmin";
import AdoptCard from "../../../components/AdoptCard/AdoptCard";

const handleProfileClick = () => {
  // Agrega aquí la lógica de redirección o acciones específicas del perfil
  console.log("Perfil clickeado");
  // Puedes agregar aquí la lógica de redirección o acciones específicas del perfil
};

const cardData = [
  {
    user: "@Bryan_Guandayapa",
    img: CardImage,
    descripcion: "Tu descripción personalizada",
  },
  {
    user: "@Emilio_Aquet",
    img: SecondImage,
    descripcion: "Tu descripción personalizada",
  },
  {
    user: "@Tinajero_alan",
    img: SecondImage,
    descripcion: "Tu descripción personalizada",
  },
  {
    user: "@LGzuz_29",
    img: SecondImage,
    descripcion: "Tu descripción personalizada",
  },
  {
    user: "@tuusuario",
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

export default function AdminReports() {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const handleProfileClick = () => {
    setProfileMenuOpen(true);
  };

  const handleModalClose = () => {
    setProfileMenuOpen(false);
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
                  <AdoptCard {...post} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
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
