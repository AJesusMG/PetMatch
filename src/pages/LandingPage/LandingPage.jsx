import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import MascotaCard from "../../../components/MascotaCard/mascotaCard";
import Button from "@mui/material/Button";
import CardImage from '../../../public/img/Perro_F.jpg';
import styles from "./landingPage.module.css";
import Hero from "../../../public/img/Hero.png";
import Footer from "../../../components/Footer/Footer";
import AdoptCard from "../../../components/AdoptCard/AdoptCard";

const cardData = [
  {
    user: "@tuusuario",
    img: CardImage,
    descripcion: "Tu descripción personalizada",
  },
  
];


export default function LandingPage() {
  return (
    <div>
      <NavBar />
      <div>
        <img src={Hero} alt="Hero Section" className={styles.heroStyle} />
      </div>
      <div>
        <p className={styles.titleMascota}>Mascotas</p>
        <MascotaCard />
      </div>
      <div>
        <p className={styles.titleAdopta}>Adopta +</p>
        {cardData.map((data, index) => (
              <AdoptCard key={index} {...data} />
            ))}
      </div>
      <div className={styles.btnContainer}><Button className={styles.btnCatalogoStyle} variant="contained">Ver Catalogo</Button></div>
      <Footer />
    </div>
  );
}

