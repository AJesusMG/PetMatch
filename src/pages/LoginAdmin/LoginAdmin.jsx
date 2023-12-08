import React, { useState } from "react";
import { Card, CardContent, TextField, Button, Typography } from "@mui/material";

import styles from "./loginAdminStyles.module.css";

export default function LoginAdmin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Logging in with:", username, password);
    };

    return (
        <Card className={styles.card}>
            <CardContent>
                <div className={styles.titleContainer}>
                    <div className={styles.logo}>
                        <img src="./img/Logo_PNG.png" alt="easyclass" />
                    </div>
                    <Typography className={styles.titleStyles}>
                        Iniciar Sesión
                    </Typography>
                </div>
                <div className={styles.inputsContainer}>
                    <div className={styles.userContainer}>
                    <p className={styles.userStyles}>Nombre</p>
                    <TextField
                    className={styles.input}
                        label="Nombre de usuario"
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </div>
                    <div className={styles.passContainer}>
                    <p className={styles.passStyles}>Contraseña</p>
                    <TextField
                    className={styles.input}
                        label="Contraseña"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    </div>
                </div>
                <div className={styles.btnContainer}>
                <Button
                className={styles.btnStyles}
                    variant="contained"
                    onClick={handleLogin}
                >
                    Iniciar Sesión
                </Button>
                </div>
            </CardContent>
        </Card>
    );
};

