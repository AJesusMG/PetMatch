import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { Link as RouterLink } from 'react-router-dom';

import styles from "./navbarStyles.module.css";
import Logo from "../../public/Logo.svg";

const NavBar = () => {
  return (
    <AppBar className={styles.navbarStyle}>
      <Toolbar>
        <img src={Logo} alt="PetMatch Logo" className={styles.logo} />
        <Link to="/" component={RouterLink} className={styles.nameStyle}>PetMatch</Link>
        <nav className={styles.linksContainer}>
          <Link to="/" component={RouterLink} className={styles.navLink}>Inicio</Link>
          <Link to="/Catalog" component={RouterLink} className={styles.navLink}>Adopta +</Link>
          <Link to="/AboutUs" component={RouterLink} className={styles.navLink}>Acerca de Nosotros</Link>
        </nav>
        <div className={styles.btnsContainer}>
          <Link to="/Login" component={RouterLink} >
            <Button className={styles.btnInicarStyle} variant="outlined">Iniciar Sesión</Button>
          </Link>
          <Link to="/Login?mode=signUp" component={RouterLink}>
            <Button className={styles.btnRegistrarStyle} variant="contained">
              Regístrate
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
