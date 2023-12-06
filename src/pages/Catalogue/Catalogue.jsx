import React from "react";
import { Button, Grid } from "@mui/material";
import SideBar from "../../../components/SideBar/sideBar";
import PostCard from "../../../components/PostCard/PostCard";
import styles from "./catalogueStyles.module.css";
import { Link } from "react-router-dom";

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
  {
    id: 5,
    img: "https://picsum.photos/200/300?random=5",
    userName: "@Usuario5",
  },
  {
    id: 6,
    img: "https://picsum.photos/200/300?random=6",
    userName: "@Usuario6",
  },
  {
    id: 7,
    img: "https://picsum.photos/200/300?random=7",
    userName: "@Usuario7",
  },
  {
    id: 8,
    img: "https://picsum.photos/200/300?random=8",
    userName: "@Usuario8",
  },
];

export default function Catalogue() {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className={styles.bannerContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.titleBanner}>Bienvenidos a PetMatch</h1>
          <p className={styles.pStyle}>
            <strong>¿Buscas a tu compañero perfecto de cuatro patas? </strong> 
             ¡No busques más! En <br /> nuestra plataforma, te conectamos con los
            animales en adopción que <br /> están ansiosos por encontrar un
            hogar amoroso.
          </p>
          <div className={styles.btnContainer}>
            <Link to="/Questionnaire">
              <Button variant="contained" className={styles.btnStyle}>
                Resolver Formulario
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.titleContainer}>
        <h1 className={styles.titleCatalogue}>Mascotas en Adopcion</h1>
      </div>
      <div className={styles.postContainer}>
        <Grid container spacing={2}>
          {PostInfo.map((post, index) => (
            <Grid item key={index}>
              <PostCard {...post} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
