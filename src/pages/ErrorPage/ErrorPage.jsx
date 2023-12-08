import React from 'react';
import styles from './errorPageStyles.module.css';
import Fox from '../../../public/img/ErrorFox.png';


function ErrorPage() {
  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <img className={styles.Fox} src={Fox} alt="ErrorFox" />
      </div>
      <div className={styles.rightColumn}>
        <h1>¡ERROR 404!!!</h1>
        <p className={styles.text}>Una disculpa pero esta página <br />no ha sido encontrada, regresa <br />a la página de inicio.</p>
        <button type="submit" className={styles.Button}>
          <b>Regresar</b>
        </button>
      </div>
    </div>
  );
}


export default ErrorPage