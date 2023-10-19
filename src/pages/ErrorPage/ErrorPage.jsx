import React from 'react';
import styles from './errorPage.module.css';
import Fox from '../../../img/ErrorFox.png';
import Button from '@mui/material/Button'; 

function ErrorPage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <img className={styles.Fox} src={Fox} alt="ErrorFox" />
      </div>
      <div className={styles.rightColumn}>
        <h1>¡ERROR 404!!!</h1>
        <p>Una disculpa pero esta página</p><br></br>
        <p>no ha sido encontrada, regresa</p><br/>
        <p>a la página de inicio.</p>
        <Button className={styles.button} variant="contained" href='../LandingPage/LandingPage.jsx'><b>Regresar</b></Button>      
      </div>
    </div>
  );
}


export default ErrorPage