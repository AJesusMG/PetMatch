import React from "react";
import { Button, Card, Chip, Typography } from "@mui/material";
import { AccountCircle, Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import Dog from "../../public/img/Mopri.png";

import styles from "./reportPostStyles.module.css";

const ReportPost = ({ username }) => {
  return (
    <Card className={styles.Card}>
      <div className={styles.Content}>
        <div>
          <img className={styles.Dog} src={Dog} alt="Dog" />
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.topSection}>
            <div className={styles.userInfo}>
              <div><AccountCircle style={{ fontSize: 50 }} /></div>
              <Typography style={{ marginLeft: "10px", fontWeight: "bold", fontSize: 16, fontFamily: "Poppins" }}>@a.jesus.g</Typography>
            </div>
            <Button className={styles.reportBtn} variant="text">Reportar</Button>
          </div>
          <div className={styles.infoContainer}>
            <Typography className={styles.infoText}>
              Hoy quiero presentarles a este hermoso perro blanco que ha llegado a mi vida
              y está en busca de un nuevo hogar. Se trata de un encantador Husky de un año
              de edad que ha conquistado nuestros corazones con su belleza y personalidad juguetona.
            </Typography>
          </div>
          <div className={styles.tagsContainer}>
            <Typography style={{ fontWeight: "bold", fontSize: 20, fontFamily: "Poppins" }}>Tags</Typography>
            <div className={styles.tags}>
              <Chip label="Husky" variant="outlined" style={{ borderColor: "#FEAE21", borderWidth: "3px", fontSize: 15 }} />
              <Chip label="Grande" variant="outlined" style={{ borderColor: "#FEAE21", borderWidth: "3px", fontSize: 15 }} />
              <Chip label=".5 - 1 año" variant="outlined" style={{ borderColor: "#FEAE21", borderWidth: "3px", fontSize: 15 }} />
            </div>
          </div>
          <div className={styles.contactContainer}>
            <Typography style={{ fontWeight: "bold", fontSize: 20, fontFamily: "Poppins" }}>Contáctame</Typography>
            <div className={styles.contactInfo}>
              <div className={styles.socialStyle}><Instagram />
                <Typography style={{ marginLeft: "10px", fontFamily: "Poppins", fontWeight: "bold" }}>a.jesus.g</Typography>
              </div>
              <div className={styles.socialStyle}><WhatsApp style={{ marginTop: "10px" }} />
                <Typography style={{ marginLeft: "10px", marginTop: "10px", fontFamily: "Poppins", fontWeight: "bold" }}>2712452978</Typography>
              </div>
              <div className={styles.socialStyle}><Facebook style={{ marginTop: "10px" }} />
                <Typography style={{ marginLeft: "10px", marginTop: "10px", fontFamily: "Poppins", fontWeight: "bold" }}>Alan Morales</Typography>
              </div>
            </div>
          </div>
          <div className={styles.btnContainer}>
          <Button className={styles.deleteBtn} variant="contained">Eliminar</Button>
          <Button className={styles.ignoretBtn} variant="contained">Ignorar</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ReportPost;
