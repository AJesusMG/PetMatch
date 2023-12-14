import React, { useEffect } from "react";
import SideBar from "../../../components/SideBar/sideBar";
import styles from "./questionnaireStyles.module.css";
import Profile from "../../../public/img/Questionnaire.jpg";
import { Avatar } from "@mui/material";

function extractTokenFromCookies(cookieString) {
  const cookies = cookieString.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'token') {
      return value;
    }
  }
  return null;
}

function extractUserIdFromCookies(cookieString) {
  const cookies = cookieString.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'user_id') {
      return value; // Assuming the user ID is stored with the name 'userid'
    }
  }
  return null;
}

export default function Questionnaire() {
  useEffect(() => {
    const SendPreferences = document.getElementById('BotonEnviar');

    const handleSendClick = async () => {
      const cookies = document.cookie;
      const token = extractTokenFromCookies(cookies);
      const userId = extractUserIdFromCookies(cookies);

      console.log(userId);

      const HouseSize = document.getElementById('houseSize').value;
      const Outside = document.getElementById('TimeOutside').value;
      const Actividad = document.getElementById('ActividadFisica').value;
      const Preferencia = document.getElementById('PreferenciaMascota').value;
      const Clima = document.getElementById('TipoClima').value;
      const Alergias = document.getElementById('Alergias').value;

      try {
        const response = await fetch("http://localhost:3000/preferences/createPreferences", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          },
          body: JSON.stringify({
            User_id: userId,
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

          // Redireccionar a la página de Catalog
          window.location.href = '/Catalog';
        }
      } catch (err) {
        console.log('Llamen a dios', err);
      }
    };

    if (SendPreferences) {
      SendPreferences.addEventListener('click', handleSendClick);
    }

    return () => {
      if (SendPreferences) {
        SendPreferences.removeEventListener('click', handleSendClick);
      }
    };
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
        <option value="Pequeno">Pequeña</option>
        <option value="Mediano">Mediana</option>
        <option value="Grande">Grande</option>
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
                <option value="Moderado">Medio</option>
                <option value="Mucho">Mucho</option>
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
                <option value="Frio">Calido y Soleado</option>
                <option value="Calor">Frio y Nevado</option>
                <option value="Templado">Humedo y LLuvioso</option>
                <option value="Todos los climas">Todos los climas</option>

            </select>
          </div>
          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>¿Eres alergico a algun animal?</span>
            <label htmlFor="instagram"></label>
            <select id="Alergias" name="Alergias" className={styles.customInput}>
                <option value="Yes">Si</option>
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
