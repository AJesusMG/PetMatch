import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './CommentCard.module.css';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 24, fontWeight:'bold'}} variant="h1" gutterBottom>
        Noticias relevantes sobre el cuidado de los perros...


        <br />
        <br />
      </Typography>
      <div className={styles.dataContainer}>
        <Typography sx={{ mb: 0.2 }} variant="body2" className={styles.userComment}>
          Savanah
        </Typography>
        <Typography sx={{ mb: 0.5 }} variant="body2" className={styles.dateComment}>
          27/11/2023
        </Typography>
      </div>
      <Typography sx={{fontWeight: 'bold'}}>
        Sabias que los husky aúllan por esto...
        <br />
        <br />
      </Typography>

      <div className={styles.dataContainer}>
        <Typography sx={{ mb: 0.2 }} variant="body2" className={styles.userComment}>
          Savanah
        </Typography>
        <Typography sx={{ mb: 0.5 }} variant="body2" className={styles.dateComment}>
          27/11/2023
        </Typography>
      </div>
      <Typography sx={{fontWeight: 'bold'}}>
      Sabias que los husky aúllan por esto...
       
        <br />
        <br />
      </Typography>

      <div className={styles.dataContainer}>
        <Typography sx={{ mb: 0.2 }} variant="body2" className={styles.userComment}>
          Savanah
        </Typography>
        <Typography sx={{ mb: 0.5 }} variant="body2" className={styles.dateComment}>
          27/11/2023
        </Typography>
      </div>
      <Typography sx={{fontWeight: 'bold'}}>
      Sabias que los husky aúllan por esto...
       
        <br />
        <br />
      </Typography>



    </CardContent>
    
  </React.Fragment>
);

export default function CommentCard() {
  return (
    <Box className={styles.Card}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}