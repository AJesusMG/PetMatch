import * as React from 'react';
import Card from '@mui/material/Card';
import styles from './newsCardStyles.module.css'

export default function NewsCard() {
    return (
        <Card className={styles.cardStyle}>
            <div className={styles.mainContainer}>
                <div>
                    <p className={styles.titleStyle}>Noticias relevantes sobre el cuidado de los perros...</p>
                </div>
                <div className={styles.subContainer}>
                    <p className={styles.subStyle}>Savannah Nguyen</p>
                    <p className={styles.subStyle}>3 de Agosto...</p>
                </div>
                <div className={styles.newsContainer}>
                    <p className={styles.newsStyle}>Sabias que los Husky aúllan por esto...</p>
                </div>
                <div className={styles.subContainer}>
                    <p className={styles.subStyle}>Courtney Henry</p>
                    <p className={styles.subStyle}>9 de Abril...</p>
                </div>
                <div className={styles.newsContainer}>
                    <p className={styles.newsStyle}>Los Pitbull son agresivos?...</p>
                </div>
                <div className={styles.subContainer}>
                    <p className={styles.subStyle}>Marvin McKinney</p>
                    <p className={styles.subStyle}>5 de Octubre...</p>
                </div>
                <div className={styles.newsContainer}>
                    <p className={styles.newsStyle}>La verdadera naturales de los Corgis...</p>
                </div>
                <div className={styles.subContainer}>
                    <p className={styles.subStyle}>Nutriayapa</p>
                    <p className={styles.subStyle}>20 de Octubre...</p>
                </div>
                <div className={styles.newsContainer}>
                    <p className={styles.newsStyle}>¿Cuál es la mejor raza de perros?...</p>
                </div>
            </div>
        </Card>
    );
}
