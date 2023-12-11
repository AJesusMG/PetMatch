import React, { useEffect } from "react";
import SideBar from "../../../components/SideBar/sideBar";
import styles from "./questionnaireStyles.module.css";
import Profile from "../../../public/img/Questionnaire.jpg";
import { Avatar } from "@mui/material";

function initPreferences() {
  const SendPreferences = document.getElementById('BotonEnviar');

  if (SendPreferences) {
    SendPreferences.addEventListener('click', Send);
  }

  async function Send() {
    // Obtener cookies del navegador
    const cookies = document.cookie;

    // Extraer el token JWT de las cookies
    const token = extractTokenFromCookies(cookies);

    const HouseSize = document.getElementById('houseSize').value;
    const Outside = document.getElementById('TimeOutside').value;
    const Actividad = document.getElementById('ActividadFisica').value;
    const Preferencia = document.getElementById('PreferenciaMascota').value;
    const Clima = document.getElementById('TipoClima').value;
    const Alergias = document.getElementById('Alergias').value;

    console.log(token)

    console.log(HouseSize, Outside, Actividad, Preferencia, Clima, Alergias);
    try {
      const response = await fetch("http://localhost:3000/preferences/createPreferences", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
          User_id: 3,
          Housing_Type: HouseSize,
          Allergies: Alergias,
          Exercise_ability: Actividad,
          Category: Preferencia,
          Outdoor_Time: Outside,
          Weather: Clima
        })
      });
      const data = await response.json();
      console.log(data);

      if (data.code === 200) {
        console.log('Todo jala');
      }
    } catch (err) {
      console.log('Llamen a dios', err);
    }
  }

  // Función para extraer el token de las cookies
  function extractTokenFromCookies(cookieString) {
    const cookies = cookieString.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'token') { // Reemplaza 'your_token_cookie_name' con el nombre de tu cookie que almacena el token
        return value;
      }
    }
    return null;
  }
}

export default function Questionnaire() {
  useEffect(() => {
    initPreferences();
  }, []);
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
        <div className={styles.iconContainer}>
          <Avatar
              alt="Profile Image"
              src={Profile}
              className={styles.iconStyle}
            />
        </div>
        <div className={styles.buttonContainer}>
          <button id="BotonEnviar"type="submit" className={styles.saveButton}>
            <b>Enviar Cuestionario</b>
          </button>
        </div>
      </div>
    </div>
  );
}