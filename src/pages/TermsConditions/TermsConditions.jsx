import React from "react";
import NavBar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";

import styles from "./termsConditionsStyles.module.css";
import { Card } from "@mui/material";

export default function TermsConditions() {
    return (
        <div>
            <NavBar />
            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    <h1 className={styles.titleStyle}>Terminos y Condiciones de Uso</h1>
                </div>
                <Card className={styles.card}>
                    <div className={styles.subContainer}>
                        <p className={styles.subtitleStyle}>1. Aceptación de los Términos y Condiciones</p>
                    </div>
                    <div className={styles.firstParagrahpContainer}>
                        <p className={styles.textStyle}>El Usuario no podrá utilizar el Sitio Web en caso de que el Usuario carezca o tenga limitada su capacidad de ejercicio para aceptar los presentes Términos y Condiciones por cualquier causa.
                            <br />Al visitar y/o usar el Sitio Web, el Usuario expresamente manifiesta estar conforme y obligarse a la totalidad de los presentes Términos y Condiciones, los demás documentos incorporados a los mismos por referencia, así como a las leyes y reglamentos aplicables de conformidad a la legislación vigente para el uso del Sitio Web.<br />
                            Estos términos y condiciones son obligatorios y vinculantes para los contratantes, por lo que cualquier persona que no los acepte deberá abstenerse de utilizar y/o visitar el sitio web y/o cualquier otro servicio que ofrezca PetMatch.<br />
                            PetMatch no guardará una copia individualizada del presente convenio celebrado entre el Usuario y PetMatch, por lo que se le recomienda al Usuario que guarde una copia de los presentes Términos y Condiciones para su propio expediente.<br />
                            En caso de que el Usuario viole lo expresado en estos términos y condiciones, PetMatch, podrá cancelar su uso, así como excluir al Usuario de futuras operaciones, y/o tomar la acción legal que juzgue conveniente para sus intereses.</p>
                    </div>
                </Card>
                <Card className={styles.card}>
                    <div className={styles.subContainer}>
                        <p className={styles.subtitleStyle}>2. Cuenta del Usuario</p>
                    </div>
                    <div className={styles.firstParagrahpContainer}>
                        <p className={styles.textStyle}>El usuario puede registrar una cuenta personal (en adelante, "Cuenta del Usuario") al ingresar la información solicitada en el sitio web de PetMatch. La Cuenta del Usuario es personal, única e intransferible. A través de esta cuenta, el usuario podrá acceder a su historial de adopciones, verificar el estado de sus solicitudes, acceder a su lista de favoritos, beneficiarse de promociones y descuentos proporcionados por PetMatch, personalizar su experiencia según sus preferencias y utilizar cualquier funcionalidad futura que PetMatch pueda implementar en la Cuenta del Usuario.
                            <br /> Cada usuario solo puede poseer una Cuenta del Usuario. En el caso de que PetMatch identifique múltiples cuentas con datos coincidentes o relacionados, se reserva el derecho de cancelarlas, suspenderlas o inhabilitarlas a su sola discreción. El usuario será responsable de todas las actividades realizadas desde su Cuenta del Usuario. Se prohíbe la venta, cesión, transferencia o transmisión de la Cuenta del Usuario, ya sea de forma onerosa o gratuita.</p>
                    </div>
                </Card>
                <Card className={styles.cardStyle}>
                    <div className={styles.subContainer}>
                        <p className={styles.subtitleStyle}>3. Tratamiento de datos personales</p>
                    </div>
                    <div className={styles.firstParagrahpContainer}>
                        <p className={styles.textStyle}>Los datos recabados por PetMatch del Usuario durante el uso del Sitio Web serán tratados por PetMatch conforme al Aviso de Privacidad mismo que se incorpora por referencia a los presentes Términos y Condiciones.</p>
                    </div>
                </Card>
                <Card className={styles.card}>
                    <div className={styles.subContainer}>
                        <p className={styles.subtitleStyle}>4. Responsabilidado</p>
                    </div>
                    <div className={styles.firstParagrahpContainer}>
                        <p className={styles.textStyle}>El acceso del Usuario a PetMatch no implica la obligación de informar, controlar o tomar acción en relación con la presencia o ausencia de virus, gusanos u otros elementos informáticos dañinos. Los Usuarios no podrán imputar responsabilidad alguna a PetMatch ni exigir indemnización por perjuicios derivados de dificultades técnicas o fallas en los sistemas o en internet. <br />
                        PetMatch no garantiza el acceso y uso continuado e ininterrumpido de la plataforma. En ocasiones, PetMatch podría no estar disponible debido a dificultades técnicas, fallas de internet u otras circunstancias ajenas y no imputables a PetMatch. <br /> En tales casos, se procurará restablecer el servicio con la mayor celeridad posible sin que esto genere responsabilidad alguna. La disponibilidad de herramientas para la detección y desinfección de programas informáticos dañinos corresponde al Usuario. PetMatch no se responsabiliza de los daños o perjuicios causados al Usuario debido a fallos o desconexiones en las redes de telecomunicaciones que resulten en la suspensión, cancelación o interrupción del servicio de PetMatch durante su prestación o con carácter previo.</p>
                    </div>
                </Card>
                <Card className={styles.card}>
                    <div className={styles.subContainer}>
                        <p className={styles.subtitleStyle}>5. Contenido del Sitio Web</p>
                    </div>
                    <div className={styles.firstParagrahpContainer}>
                        <p className={styles.textStyle}>PetMatch contiene contenido de propiedad de PetMatch y terceros (en adelante, el "Contenido"). Si consideras que algún Contenido publicado en PetMatch viola derechos de propiedad intelectual o industrial, puedes notificarlo enviando un correo electrónico a notificaciones@petmatch.com<br /> PetMatch no asume que su Contenido pueda ser legalmente visto fuera de determinada jurisdicción. El acceso al Contenido desde fuera de esta jurisdicción es responsabilidad del Usuario, quien debe cumplir con las leyes locales.<br />
                        PetMatch contiene enlaces a sitios web de terceros como una ventaja para el Usuario. PetMatch no respalda ni es responsable del contenido de estos sitios web de terceros. El Usuario accede a estos sitios bajo su propio riesgo y responsabilidad.<br />
                        Se prohíbe a los Usuarios utilizar PetMatch para transmitir, distribuir, almacenar o destruir material que infrinja derechos de propiedad intelectual de PetMatch o terceros. PetMatch se reserva el derecho de suspender el uso a cualquier Usuario que viole esta sección.</p>
                    </div>
                </Card>
                <Card className={styles.cardStyles}>
                    <div className={styles.subContainer}>
                        <p className={styles.subtitleStyle}>6. Terminación y modificación de los Términos y Condiciones</p>
                    </div>
                    <div className={styles.firstParagrahpContainer}>
                        <p className={styles.textStyle}>PetMatch se reserva el derecho de suspender el acceso al Sitio Web y/o de terminar los presentes Términos y Condiciones en cualquier momento. <br/> PetMatch también se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán efectivas una vez publicadas en el Sitio Web y/o comunicadas por correo electrónico al Usuario. Si el Usuario no acepta los términos y condiciones modificados, deberá dejar de utilizar el Sitio Web.</p>
                    </div>
                </Card>
            </div>
            <div className={styles.footerContainer}>
                <Footer />
            </div>
        </div>
    )
}