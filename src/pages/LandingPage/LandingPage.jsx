import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import MascotaCard from "../../../components/MascotaCard/mascotaCard";
import CardImage from '../../../public/img/Perro_F.jpg';
import Hero from "../../../public/img/Hero.png";
import Footer from "../../../components/Footer/Footer";
import AdoptCard from "../../../components/AdoptCard/AdoptCard";
import { Grid } from "@mui/material";

import styles from "./landingPage.module.css";

const cardData = [
  {
    id: 1, 
    userName: "@tuusuario",
    img: "https://picsum.photos/200/300?random=1", 
    descripcion: "Conoce a [Nombre del Perro], un adorable canino en busca de un hogar amoroso y cariñoso.",
  },
  {
    id: 2, 
    userName: "@tuusuario",
    img: "https://picsum.photos/200/300?random=2",
    descripcion: "Conoce a [Nombre del Gato], un adorable gatito en busca de un hogar amoroso y cariñoso.",
  },
  {
    id: 3, 
    userName: "@tuusuario",
    img: "https://picsum.photos/200/300?random=3",
    descripcion: "Conoce a [Nombre del Roedor], un adorable hamster en busca de un hogar amoroso y cariñoso.",
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
      <p className={styles.titleMascota} >Adopta (◕‿◕🐰)</p>
        <div className={styles.Card}>
          <Grid container spacing={2}>
            {cardData.map((post, index) => (
              <Grid item key={index}>
                <AdoptCard {...post}/>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
}

