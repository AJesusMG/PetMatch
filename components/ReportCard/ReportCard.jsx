import React, { useState } from "react";

import styles from "./reportCardStyles.module.css";
import { Button, Card, CardContent, TextField } from "@mui/material";

const ReportCard = () => {
    const [textValue, setTextValue] = useState("");
    const maxCharacterLimit = 250;

    const handleTextChange = (event) => {
        const newTextValue = event.target.value;
        if (newTextValue.length <= maxCharacterLimit) {
            setTextValue(newTextValue);
        }
    };

    return (
        <div>
            <Card className={styles.card}>
                <CardContent style={{ padding: "20px 20px 20px 20px" }}>
                    <div className={styles.topContainer}>
                        <p className={styles.pStyle}>Escribe tu motivo de reporte</p>
                        <Button variant="contained" className={styles.btnStyles}>
                            Reportar
                        </Button>
                    </div>
                    <div className={styles.myAccountCard__separator}></div>
                    <div>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Escribe tu motivo de reporte"
                            multiline
                            maxRows={8}
                            value={textValue}
                            onChange={handleTextChange}
                            inputProps={{
                                maxLength: maxCharacterLimit,
                            }}
                            className={styles.inputStyle}
                            style={{ height: "200px" }}
                        />
                        <div className={styles.counterContainer}>
                            <p className={styles.characterCounter}>
                                {textValue.length}/{maxCharacterLimit}
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ReportCard;
