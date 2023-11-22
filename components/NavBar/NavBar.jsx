import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

import styles from "./navbarStyles.module.css";
import Logo from "../../public/img/logo.svg";

const NavBar = () => {
  return (
    <AppBar className={styles.navbarStyle}>
      <Toolbar>
        <img src={Logo} alt="PetMatch Logo" className={styles.logo} />
        <Link className={styles.nameStyle}>PetMatch</Link>
        <nav className={styles.linksContainer}>
          <Link className={styles.navLink}>Inicio</Link>
          <Link className={styles.navLink}>Adopta +</Link>
          <Link className={styles.navLink}>Acerca de Nosotros</Link>
        </nav>
        <div className={styles.btnsContainer}>
          <Button className={styles.btnInicarStyle} variant="outlined">Iniciar Sesión</Button>
          <Button className={styles.btnRegistrarStyle} variant="contained">Registrate</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
