import * as React from 'react';
import Card from '@mui/material/Card';
import styles from './newsCardStyles.module.css'

export default function NewsCard() {
    return (
        <Card className={styles.cardStyle}>
            <p>Hola</p>
        </Card>
    );
}
