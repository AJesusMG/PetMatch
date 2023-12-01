import React from "react";
import { Button, Card, Chip, Typography, Avatar } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import Dog from "../../public/img/Mopri.png";
import styles from "./adoptFullPostInProfileStyles.module.css";

const AdoptFullPostInProfile = (props) => {
  return (
    <Card className={styles.Card} key={props.id}>
      <div className={styles.Content}>
        <div>
          <img className={styles.Dog} src={props.img} alt="Imagen de tu mascota" />
        </div>
        <div className={styles.mainContainer}>
          <div className={styles.topSection}>
            <div className={styles.userInfo}>
              <div><Avatar src={Dog} style={{ width: 50, height: 50,  marginTop: "10px" }}  /></div>
              <Typography style={{ marginLeft: "10px", fontWeight: "bold", fontSize: 16 }}>{props.userName}</Typography>
            </div>
            <Button className={styles.reportBtn} variant="text">Reportar</Button>
          </div>
          <div className={styles.infoContainer}>
            <Typography className={styles.infoText}>
              {props.description && props.description.length > 290
                ? `${props.description.slice(0, 240)}`
                : props.description}
            </Typography>
          </div>
          <div className={styles.tagsContainer}>
            <Typography style={{ fontWeight: "bold", fontSize: 20 }}>Tags</Typography>
            <div className={styles.tags}>
              <Chip label={props.race} variant="outlined" style={{ borderColor: "#FEAE21", borderWidth: "3px", fontSize: 15 }} />
              <Chip label={props.size} variant="outlined" style={{ borderColor: "#FEAE21", borderWidth: "3px", fontSize: 15 }} />
              <Chip label={props.age} variant="outlined" style={{ borderColor: "#FEAE21", borderWidth: "3px", fontSize: 15 }} />
            </div>
          </div>
          <div className={styles.contactContainer}>
            <Typography style={{ fontWeight: "bold", fontSize: 20 }}>Contáctame</Typography>
            <div className={styles.contactInfo}>
              <div className={styles.socialStyle}><Instagram />
                <Typography style={{ marginLeft: "10px", fontWeight: "bold" }}>{props.instagram}</Typography>
              </div>
              <div className={styles.socialStyle}><WhatsApp style={{ marginTop: "10px" }} />
                <Typography style={{ marginLeft: "10px", marginTop: "10px", fontWeight: "bold" }}>{props.whatsapp}</Typography>
              </div>
              <div className={styles.socialStyle}><Facebook style={{ marginTop: "10px" }} />
                <Typography style={{ marginLeft: "10px", marginTop: "10px", fontWeight: "bold" }}>{props.facebook}</Typography>
              </div>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button className={styles.adoptBtn} variant="contained">Adoptado</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AdoptFullPostInProfile;
