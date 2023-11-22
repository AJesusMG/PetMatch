import React from "react";
import SideBar from "../../../components/SideBar/sideBar";
import styles from "./cuestionario.module.css";

export default function Catalogue() {
  return (
    <div className={styles.containerFlex}>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <h1>Cuestionario</h1>
          <div className={styles.formGroup}>
      <span className={styles.inputTextAbove}>¿De qué tamaño es tu casa?</span>
      <label htmlFor="houseSize"></label>
      <select id="houseSize" name="houseSize" className={styles.customInput}>
        <option value="pequeña">Pequeña</option>
        <option value="mediana">Mediana</option>
        <option value="grande">Grande</option>
      </select>
    </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>¿Pasas mucho tiempo afuera? </span>
            <label htmlFor="tiempoafuera"></label>
            <select id="TimeOutside" name="TimeOutside" className={styles.customInput}>
                <option value="Si">Si</option>
                <option value="No">No</option>
            </select>
            </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>¿Cual es tu nivel de actividad Fisica?</span>
            <label htmlFor="Actividad"></label>
            <select id="ActividadFisica" name="ActividadFisica" className={styles.customInput} >
                <option value="Poco">Poco</option>
                <option value="Medio">Medio</option>
                <option value="Alto">Mucho</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>¿Que te gusta mas?</span>
            <label htmlFor="Gustomascota"></label>
            <select id="PreferenciaMascota" name="PreferenciaMascota" className={styles.customInput}>
                <option value="Perros">Perros</option>
                <option value="Gatos">Gatos</option>
                <option value="Roedores">Roedores</option>
                <option value="Aves">Aves</option>

            </select>
          </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>¿Que tipo de clima hay donde vives?</span>
            <label htmlFor="Clima"></label>
            <select id="TipoClima" name="TipoClima" className={styles.customInput}>
                <option value="CalidoySol">Calido y Soleado</option>
                <option value="Frio y Nevado">Frio y Nevado</option>
                <option value="Humedo y LLuvioso">Humedo y LLuvioso</option>

            </select>
          </div>
          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>¿Eres alergico a algun animal?</span>
            <label htmlFor="instagram"></label>
            <select id="Alergias" name="Alergias" className={styles.customInput}>
                <option value="Si">Si</option>
                <option value="No">No</option>

            </select>
          </div>

          
        </form>
      </div>
      <div className={styles.itemsContainer}>
        <div className={styles.imageContainer}>
          <img src="./img/AdoptMe.jpeg" alt="" className={styles.profile} />
          
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.saveButton}>
            <b>Enviar Cuestionario</b>
          </button>
        </div>
      </div>
    </div>
  );
}
