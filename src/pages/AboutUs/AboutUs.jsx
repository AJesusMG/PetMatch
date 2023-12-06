import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";

import styles from "./aboutUsStyles.module.css";

export default function AboutUs() {
    return (
        <div>
            <NavBar />
            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.titleStyle}>¿Quiénes Somos?</h1>
                    <p className={styles.subtitleStyle}>El Mejor amigo de tu mejor amigo</p>
                </div>
                <div className={styles.firstParagrahpContainer}>
                    <p>Nos REINVENTAMOS para brindar algo más que una simple plataforma de adopcioon;  al ser la red social de mascotas líder en el mercado mexicano, nos convertimos en los expertos del cuidado y bienestaranimal y lo compartimos con todos los dueños de PetMatch en México.</p>
                </div>
                <div className={styles.titleContainer}>
                    <h1 className={styles.sdTitleStyle}>Misión</h1>
                    <p className={styles.sdSubtitleStyle}>Enriquecemos tu vida y la de tu maskota.</p>
                </div>
                <div className={styles.secondParagrahpContainer}>
                    <p>Creemos que las masKotas nos hacen mejores personas porque enriquecen nuestras vidas y fortalecen nuestras bondades, así nace nuestra misión</p>
                </div>
                <div className={styles.titleContainer}>
                    <h1 className={styles.thrTitleStyle}>Visión</h1>
                    <p className={styles.thrSubtitleStyle}>Ser la red social especializada líder en el mercado de las mascotas en México.</p>
                </div>
                <div className={styles.thirdParagrahpContainer}>
                    <p>La familia PetMatch está formada por amantes de las mascotas cuyo compromiso es ser siempre el mejor aliado de la relación que una mascota tiene con su dueño, esto nos ha permitido lograr día a día nuestra visión.</p>
                </div>
            </div>
            <div className={styles.footerContainer}>
                <Footer />
            </div>
        </div>
    )
}