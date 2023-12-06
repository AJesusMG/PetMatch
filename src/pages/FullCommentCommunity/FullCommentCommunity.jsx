import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { Avatar, Button, Card, Fade, Grid, Modal, TextField, Backdrop } from "@mui/material";
import SideBar from "../../../components/SideBar/sideBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FullComment from '../../../components/FullComment/FullComment'
import NewsCard from "../../../components/NewsCard/NewsCard";
import LittleNewsCard from "../../../components/LittleNewsCard/LittleNewsCard";
import ProfileMenu from "../../../components/ProfileMenu/ProfileMenu";
import Profile from "../../../public/img/dog_1.png";
import AnswerCommunity from "../../../components/AnswerCommunity/AnswerCommunity";

import styles from "./fullCommentCommunityStyles.module.css";

const FullPost = [
    {
        id: 1,
        userName: "@a.jesus.g",
        comment: "¿Puedes brindarme un consejo sobre cómo cuidar y criar a un perro de la mejor manera posible?",
    },
];

const CommentInfo = [
    {
        id: 1,
        userName: "@a.jesus.g",
        comment: "¿Puedes brindarme un consejo sobre cómo cuidar y criar a un perro de la mejor manera posible?",
    },
    {
        id: 1,
        userName: "@a.jesus.g",
        comment: "¿Puedes brindarme un consejo sobre cómo cuidar y criar a un perro de la mejor manera posible?",
    },
    {
        id: 1,
        userName: "@a.jesus.g",
        comment: "¿Puedes brindarme un consejo sobre cómo cuidar y criar a un perro de la mejor manera posible?",
    },
    {
        id: 1,
        userName: "@a.jesus.g",
        comment: "¿Puedes brindarme un consejo sobre cómo cuidar y criar a un perro de la mejor manera posible?",
    },
];

const ProfileInfo = [
    {
        id: 1,
        userName: "Nutriayapa",
        email: "alanj.ajmg@outlook.com"
    }
]

// Función para hacer scroll hasta la parte superior de la página
const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function FullCommentCommunity() {
     // Obtener datos de la ubicación actual de la URL
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userName = searchParams.get('userName');
    const comment = decodeURIComponent(searchParams.get('comment'));
    const [setTextValue] = useState("");
    const maxCharacterLimit = 450;

    const handleTextChange = (event) => {
        const newTextValue = event.target.value;
        if (newTextValue.length <= maxCharacterLimit) {
            setTextValue(newTextValue);
        }
    };

    // Estado para controlar la apertura y cierre del menú de perfil
    const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

    const handleProfileClick = () => {
        setProfileMenuOpen(true);
    };

    const handleModalClose = () => {
        setProfileMenuOpen(false);
    };

    return (
        <div className={styles.containerFlex}>
            <div className={styles.sideContainer}>
                <SideBar />
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.communityContainer}>
                    <div className={styles.stickyContainer}>
                        <Card className={styles.cardStyles}>
                            <div>
                                <p className={styles.title}>Comunidad</p>
                                <Button variant="text" className={styles.btnStyle} onClick={handleScrollToTop}>
                                    Inicio
                                </Button>
                            </div>
                        </Card>
                    </div>
                    <div className={styles.fullCommentContainer}>
                        <Grid container spacing={2}>
                            <Grid item>
                                 {/* Renderiza el componente FullComment con datos del post completo */}
                                <FullComment userName={userName} comment={comment} showCharacterLimit={false} />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={styles.answerTitleContainer}>
                        <h2>Respuestas</h2>
                    </div>
                    <div className={styles.commentContainer}>
                        <Grid container spacing={2}>
                            {CommentInfo.map((post, index) => (
                                <Grid item key={index}>
                                    <AnswerCommunity {...post} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </div>
                <div className={`${styles.newsCard} ${styles.fixedNewsCard}`}>
                    <NewsCard />
                </div>
                <div className={`${styles.lNewsCard} ${styles.lFixedNewsCard}`}>
                    <LittleNewsCard />
                </div>
            </div>
            <div className={styles.iconContainer}>
                <Avatar
                    alt="Profile Image"
                    src={Profile}
                    onClick={handleProfileClick}
                    className={styles.iconStyle}
                >
                    <AccountCircleIcon />
                </Avatar>
            </div>
            <Modal
                open={isProfileMenuOpen}
                onClose={handleModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    style: { backgroundColor: "transparent" },
                }}
            >
                <Fade in={isProfileMenuOpen}>
                    <div className={styles.menuContainer}>
                        <Grid>
                            {ProfileInfo.map((post, index) => (
                                <Grid item key={index}>
                                    <ProfileMenu {...post} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
