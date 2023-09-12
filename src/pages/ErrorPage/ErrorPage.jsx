import React from 'react';
import styles from './errorPage.module.css';
import Fox from '../../../img/ErrorFox.png';


function ErrorPage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <img className={styles.Fox} src={Fox} alt="ErrorFox" />
      </div>
      <div className={styles.rightColumn}>
        <h1>¡ERROR 404!!!</h1>
        <p>Una disculpa pero esta página no ha sido encontrada, regresa a la página de inicio.</p>
      </div>
    </div>
  );
}


export default ErrorPage