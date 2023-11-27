import React from "react";
import { Button, Card, Chip, Typography } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import IconButton from '@mui/material/IconButton';
import AddCommentIcon from '@mui/icons-material/AddComment';

import styles from "./commentCardStyles.module.css";

const CommentCard = ({ username }) => {
    return (
        <Card className={styles.Card}>
            <div className={styles.userInfo}>
                <div className={styles.avatarContainer}>
                    <AccountCircle className={styles.iconStyle} />
                </div>
                <div className={styles.userContainer}>
                    <p className={styles.userStyle}>@a.jesus.g</p>
                </div>
            </div>
            <div className={styles.textContainer}>
                <p>¿Puedes brindarme un consejo sobre cómo cuidar y criar a un perro de la mejor manera posible?</p>
            </div>
            <div className={styles.addContainer}>
                <IconButton aria-label="addComment">
                    <AddCommentIcon />
                </IconButton>
            </div>
        </Card>
    );
};

export default CommentCard;
