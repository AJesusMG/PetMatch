import React from "react";
import { Card } from "@mui/material";
import Dog from "../../public/img/Mopri.png";

import styles from "./fullPostStyles.module.css";

const FullPost = ({}) => {
    return (
      <Card className={styles.Card}>
        <img className={styles.Dog} src={Dog} alt="Dog" />
      </Card>
    );
  };
  
  export default FullPost;
