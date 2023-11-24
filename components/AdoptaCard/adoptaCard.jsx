import React from "react";
import { Card } from "@mui/material";
import styles from "./adoptaCardStyles.module.css";



const AdoptaCard = ({ user, img, descripcion }) => {
  return (
  <div >
    <div className={styles.cardContainer}>
      <Card className={styles.Card}>
        <p className={styles.User}>{user}</p>
        <img className={styles.Animal} src={img} alt="Animal" />
        <p className={styles.descripcion}>{descripcion}</p>
      </Card>
    </div>
  </div>
  );
};


  
export default AdoptaCard;