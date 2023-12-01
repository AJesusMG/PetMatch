import React from "react";
import { Card } from "@mui/material";
import styles from "./adoptCardStyles.module.css";

const AdoptCard = (props) => {
  const handleClick = () => {
    console.log("AdoptCard clicked");
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div>
      <div className={styles.cardContainer}>
        <Card className={styles.Card} onClick={handleClick}>
          <p className={styles.User}>{props.userName}</p>
          <img className={styles.Animal} src={props.img} alt="Animal" />
          <p className={styles.descripcion}>{props.descripcion}</p>
        </Card>
      </div>
    </div>
  );
};

export default AdoptCard;