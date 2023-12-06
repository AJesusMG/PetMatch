import React, { useState } from "react";
import SideBar from "../../../components/SideBar/sideBar";
import styles from "./cuestionario.module.css";

export default function Catalogue() {
  const [formData, setFormData] = useState({
    houseSize: "",
    TimeOutside: "",
    ActividadFisica: "",
    PreferenciaMascota: "",
    TipoClima: "",
    Alergias: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos, por ejemplo, a través de una API
    console.log("Datos del formulario enviado:", formData);
    // También puedes realizar otras acciones, como redireccionar después del envío
  };

  return (
    <div className={styles.containerFlex}>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1>Cuestionario</h1>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>¿De qué tamaño es tu casa?</span>
            <label htmlFor="houseSize"></label>
            <select
              id="houseSize"
              name="houseSize"
              className={styles.customInput}
              value={formData.houseSize}
              onChange={handleInputChange}
            >
              <option value="pequeña">Pequeña</option>
              <option value="mediana">Mediana</option>
              <option value="grande">Grande</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>¿Pasas mucho tiempo afuera? </span>
            <label htmlFor="TimeOutside"></label>
            <select
              id="TimeOutside"
              name="TimeOutside"
              className={styles.customInput}
              value={formData.TimeOutside}
              onChange={handleInputChange}
            >
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>¿Cual es tu nivel de actividad Fisica?</span>
            <label htmlFor="ActividadFisica"></label>
            <select
              id="ActividadFisica"
              name="ActividadFisica"
              className={styles.customInput}
              value={formData.ActividadFisica}
              onChange={handleInputChange}
            >
              <option value="Poco">Poco</option>
              <option value="Medio">Medio</option>
              <option value="Alto">Mucho</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>¿Que te gusta mas?</span>
            <label htmlFor="PreferenciaMascota"></label>
            <select
              id="PreferenciaMascota"
              name="PreferenciaMascota"
              className={styles.customInput}
              value={formData.PreferenciaMascota}
              onChange={handleInputChange}
            >
              <option value="Perros">Perros</option>
              <option value="Gatos">Gatos</option>
              <option value="Roedores">Roedores</option>
              <option value="Aves">Aves</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>¿Que tipo de clima hay donde vives?</span>
            <label htmlFor="TipoClima"></label>
            <select
              id="TipoClima"
              name="TipoClima"
              className={styles.customInput}
              value={formData.TipoClima}
              onChange={handleInputChange}
            >
              <option value="CalidoySol">Calido y Soleado</option>
              <option value="Frio y Nevado">Frio y Nevado</option>
              <option value="Humedo y LLuvioso">Humedo y LLuvioso</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>¿Eres alergico a algun animal?</span>
            <label htmlFor="Alergias"></label>
            <select
              id="Alergias"
              name="Alergias"
              className={styles.customInput}
              value={formData.Alergias}
              onChange={handleInputChange}
            >
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>

          {/* Botón de envío */}
          <button type="submit" className={styles.saveButton}>
            <b>Enviar</b>
          </button>
        </form>
      </div>
      <div className={styles.itemsContainer}>
        <div className={styles.imageContainer}>
          <img src="./img/AdoptMe.jpeg" alt="" className={styles.profile} />
        </div>
        <div className={styles.buttonContainer}></div>
      </div>
    </div>
  );
}
