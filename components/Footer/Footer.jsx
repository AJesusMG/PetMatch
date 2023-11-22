"use client";
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import styles from "./footerStyles.module.css";

export default function Footer() {

    return (
        <Box component="footer" className={styles.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={8} className={styles.sectionLinks}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" gutterBottom>
                            PetMatch
                        </Typography>
                        <Typography variant="body2">
                            Encuentra a tu compañero peludo excepcional en nuestra página web especializada en adopción de mascotas. 
                            ¡Prepara tu corazón para el amor incondicional y adopta a tu amigo peludo ahora!
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} className={styles.sectionLinks} my={3.5}>
                        <Typography variant="body2" className="" gutterBottom >
                            <Link href="#" className={styles.linkDecoration}>Términos y Condiciones</Link>
                        </Typography>
                        <Typography variant="body2" className="" gutterBottom>
                            <Link href="#" className={styles.linkDecoration}>
                                Contáctanos
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} my={3.5}>
                        <Typography variant="body2">
                            <Link href="#" className={styles.linkDecoration}>
                                ¿Quiénes somos?
                            </Link>
                        </Typography>
                        <Typography variant="body2" className="" gutterBottom>
                            <Link href="#" className={styles.linkDecoration}>
                                Catalogo
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" align="center">
                        {"Copyright © "}
                        2023 Universidad Autónoma de Querétaro
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
