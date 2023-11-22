import React from "react";
import { Card } from "@mui/material";
import styles from "./mascotaCardStyles.module.css";

const data = [
  {
    id: 1,
    PetName: "Perros",
    img: "../../public/img/Dogs.jpg",
  },
  {
    id: 2,
    PetName: "Gatos",
    img: "../../public/img/Cats.jpg",
  },
  {
    id: 3,
    PetName: "Roedores",
    img: "../../public/img/Hamsters.jpg",
  },
  {
    id: 4,
    PetName: "Aves",
    img: "../../public/img/Birds.jpg",
  },
];

const MascotaCard = ({ PetName, img }) => {
  return (
    <div>
      <div className={styles.cardContainer}>
        {data.map((mascota) => (
          <Card className={styles.Card} key={mascota.id}>
            <img className={styles.Animal} src={mascota.img} alt="Animal" />
            <div className={styles.overlay}>
              <p className={styles.petName}>{mascota.PetName}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MascotaCard;
