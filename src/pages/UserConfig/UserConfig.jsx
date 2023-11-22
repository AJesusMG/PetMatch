import React from "react";
import SideBar from "../../../components/SideBar/sideBar";
import styles from "./userConfig.module.css";

export default function Catalogue() {
  // Define la función handlePhotoChange
  const handlePhotoChange = () => {
    // Acción que deseas realizar al cambiar la foto
    console.log("Cambiando la foto...");
  };

  return (
    <div className={styles.containerFlex}>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <h1>Configuración</h1>
          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>Nombre /s</span>
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" className={styles.customInput} />
          </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>Apellido /s</span>
            <label htmlFor="lastName"></label>
            <input type="text" id="lastName" name="lastName" className={styles.customInput} />
          </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>Correo Electrónico</span>
            <label htmlFor="email"></label>
            <input type="text" id="email" name="email" className={styles.customInput} />
          </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>Contraseña</span>
            <label htmlFor="password"></label>
            <div className={styles.passwordContainer}>
              <input type="password" id="password" name="password" className={styles.password} />
              <button type="submit" className={styles.btnPassword}>
                <b>Cambiar Contraseña</b>
              </button>
            </div>
          </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>Teléfono</span>
            <label htmlFor="phone"></label>
            <input type="text" id="phone" name="phone" className={styles.phone} />
          </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>Instagram</span>
            <label htmlFor="instagram"></label>
            <input type="text" id="instagram" name="instagram" className={styles.customInput} />
          </div>

          <div className={styles.formGroup}>
            <span className={styles.inputTextAbove}>Facebook</span>
            <label htmlFor="facebook"></label>
            <input type="text" id="facebook" name="facebook" className={styles.customInput} />
          </div>
        </form>
      </div>
      <div className={styles.itemsContainer}>
        <div className={styles.imageContainer}>
          <img src="./img/AdoptMe.jpeg" alt="" className={styles.profile} />
          <a href="#" className={styles.changePhotoMessage} onClick={handlePhotoChange}>
            Cambiar Foto de Perfil
          </a>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit" className={styles.saveButton}>
            <b>Guardar Cambios</b>
          </button>
        </div>
      </div>
    </div>
  );
}
