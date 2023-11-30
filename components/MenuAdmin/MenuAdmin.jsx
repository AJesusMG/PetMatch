import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

import styles from "./menuAdminStyles.module.css";

const MenuAdmin = (props) => {
    return (
        <Card className={styles.card} key={props.id}>
            <CardContent className={styles.myAccountCard__userInfo}>
                <div className={styles.avatarContainer}><Avatar className={styles.avatarStyle} /></div>
                <div className={styles.infoContainer}>
                    <p className={styles.userStyle}>{props.userName}</p>
                    <p className={styles.emailStyle}>{props.email}</p>
                </div>
            </CardContent>
            <div className={styles.myAccountCard__separator}></div>
            <CardActions className={styles.myAccountCard__actions} sx={{ height: "70%", padding: "15px 5px" }}>
                <Button variant="text" className={styles.myAccountCard__button}>
                    <LogoutIcon style={{ fontSize: 30, marginRight: 10 }} />
                    Cerrar Sesión
                </Button>
            </CardActions>
        </Card>
    );
}

export default MenuAdmin;
