import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import NearMeIcon from '@mui/icons-material/NearMe';
import QuizIcon from '@mui/icons-material/Quiz';
import Profile from "../../public/img/dog_1.png";

import styles from "./profileMenuStyles.module.css";

const ProfileMenu = (props) => {
    return (
        <Card className={styles.card} key={props.id}>
            <CardContent className={styles.myAccountCard__userInfo}>
                <div className={styles.avatarContainer}><Avatar className={styles.avatarStyle} src={Profile} /></div>
                <div className={styles.infoContainer}>
                    <p className={styles.userStyle}>{props.userName}</p>
                    <p className={styles.emailStyle}>{props.email}</p>
                </div>
            </CardContent>
            <div className={styles.myAccountCard__separator}></div>
            <CardActions className={styles.myAccountCard__actions} sx={{ height: "70%", padding: "15px 3px" }}>
                <Button variant="text" className={styles.myAccountCard__button}>
                    <AccountCircleIcon style={{ fontSize: 30, marginRight: 10 }} />
                    Mi Perfil
                </Button>
                <Link to="/UserConfig" className={styles.myAccountCard__link}>
                    <Button variant="text" className={styles.myAccountCard__button}>
                        <SettingsIcon style={{ fontSize: 30, marginRight: 10 }} />
                        Configuración
                    </Button>
                </Link>
                <Button variant="text" className={styles.myAccountCard__button}>
                    <LogoutIcon style={{ fontSize: 30, marginRight: 10 }} />
                    Cerrar Sesión
                </Button>
                <div className={styles.myAccountCard__separator}></div>
                <Button variant="text" className={styles.myAccountCard__button}>
                    <NearMeIcon style={{ fontSize: 30, marginRight: 10 }} />
                    Volver a obtener ubicación
                </Button>
                <Link to="/Questionnaire" className={styles.myAccountCard__link}>
                <Button variant="text" className={styles.myAccountCard__button}>
                    <QuizIcon style={{ fontSize: 30, marginRight: 10 }} />
                    Volver a realizar cuestionario
                </Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default ProfileMenu;
