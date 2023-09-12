import React from 'react';
import { Card } from '@mui/material';
import styles from './postCard.module.css';
import Dog from '../../img/Dog.jpg';
const userName = '@ElCaminoDelProgramador';

export const PostCard = () => {
  return (
    <Card className={styles.Card}>
      <img className={styles.Dog} src={Dog} alt="Dog" />
      <div className={styles.overlay}>
        <h2 className={styles.userName}>{userName}</h2>
      </div>
    </Card>
  );
};