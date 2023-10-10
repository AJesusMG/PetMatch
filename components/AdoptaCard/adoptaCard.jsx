import React from "react";
import { Card } from "@mui/material";
import styles from "./adoptaCardStyles.module.css";

const data = [
  {
    id: 1,
    User: "@a.jesus.g",
    img: "../../public/img/dog_1.png",
    descripcion: "Conoce a [Nombre del Perro], un adorable canino en busca de un hogar amoroso y cariñoso."
  },
  {
    id: 2,
    User: "@elzavaletonga",
    img: "../../public/img/cat_1.png",
    descripcion: "Conoce a [Nombre del Gato], un adorable gatito en busca de un hogar amoroso y cariñoso."
  },
  {
    id: 3,
    User: "@elcaminodelprogramador",
    img: "../../public/img/hamster_1.png",
    descripcion: "Conoce a [Nombre del Roedor], un adorable hamster en busca de un hogar amoroso y cariñoso."
  },
];

const AdoptaCard = ({ User, img, descripcion }) => {
    return (
      <div>
        <div className={styles.cardContainer}>
          {data.map((mascota) => (
            <Card className={styles.Card} key={mascota.id}>
              <p className={styles.User}>{mascota.User}</p>
              <img className={styles.Animal} src={mascota.img} alt="Animal" />
              <p className={styles.descripcion}>{mascota.descripcion}</p>
            </Card>
          ))}
        </div>
      </div>
    );
  };
  
export default AdoptaCard;