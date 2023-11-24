import React from "react";
import styles from "./adminReports.module.css";
import AdoptaCard from "../../../components/AdoptaCard/adoptaCard";
import Profile from "../../../public/img/dog_1.png";
import CardImage from "../../../public/img/Perro_F.jpg";
import SecondImage from "../../../public/img/Ave_4.jpg";
import {Avatar, Grid } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

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

export default function AdminReports() {
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
                  <AdoptaCard {...post} />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
