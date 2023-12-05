import React, { useState } from "react";
import { Card, CardContent, Avatar, TextField, Button } from "@mui/material";
import Dog from "../../public/img/Mopri.png";

import styles from "./answerCardStyles.module.css";

const AnswerCard = (props) => {
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
          <div className={styles.userInfo}>
            <div className={styles.avatarContainer}>
              <Avatar src={Dog} className={styles.iconStyle} />
            </div>
            <div className={styles.userContainer}>
              <p className={styles.userStyle}>{props.userName}</p>
            </div>
          </div>
          <div className={styles.textContainer}>
            <p className={styles.commentStyle}>{props.truncatedComment}</p>
          </div>
          <div className={styles.answerContainer}>
            <div className={styles.avatarContainer}>
              <Avatar src={Dog} className={styles.iconStyles} />
            </div>
            <div className={styles.inputContainer}>
              <TextField
                id="outlined-multiline-flexible"
                label="Escribe tu respuesta"
                multiline
                maxRows={3}
                value={textValue}
                onChange={handleTextChange}
                inputProps={{
                  maxLength: maxCharacterLimit,
                }}
                className={styles.inputStyle}
              />
              <div className={styles.counterContainer}>
                <p className={styles.characterCounter}>
                  {textValue.length}/{maxCharacterLimit}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Button variant="contained" className={styles.btnStyles}>
              Responder
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnswerCard;
