import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import styles from './choseTypePetStyles.module.css';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import UploadImage from '../UploadImage/uploadImage';

const data = [
  {
    id: 1,
    PetName: "Perro",
    img: "../../public/img/Perro_F.jpg",
  },
  {
    id: 2,
    PetName: "Gato",
    img: "../../public/img/Cats.jpg",
  },
  {
    id: 3,
    PetName: "Roedor",
    img: "../../public/img/Hamsters.jpg",
  },
  {
    id: 4,
    PetName: "Ave",
    img: "../../public/img/Birds.jpg",
  },
];

export default function ChoseTypePet() {
  const [open, setOpen] = React.useState(false);
  const [uploadImageOpen, setUploadImageOpen] = useState(false);

  const handleOpen = (mascota) => {

    setOpen(false);
    setUploadImageOpen(true);
  };
  const handleClose = () => {
    setOpen(true);
  };
  const handleCloseUploadImage = () => {
    setUploadImageOpen(false);
    setOpen(true); // Puedes configurar el modal principal en true si deseas regresar a él
  };

  return (
    <div>
      <Button onClick={() => setOpen(true)} style={{ borderRadius: '50%', width: '40px', height: '50px', color: '#000' }}><AddIcon /></Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={styles.modalContainer}>
        <div className={styles.headModalChooseType}>
            <Button style={{ width: '30px', height: '30px', color: '#000', padding: '0'}} className={styles.headModalChooseTypeCloseButtton} onClick={handleClose}><CloseIcon/></Button>
            <h2 className={styles.headModalChooseTypeTitle}>Elige qué es...</h2>
          </div>
          <div className={styles.headModalChooseTypeImageGrid}>
            {data.map((mascota) => (
              <div className={styles.imgContainer} key={mascota.id} onClick={() => handleOpen(mascota)}>
                <img className={styles.imgAnimal} src={mascota.img} alt="Animal" />
                <div className={styles.overlay}>
                  <p>{mascota.PetName}</p>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Modal>
      <Modal
        open={uploadImageOpen}
        onClose={handleCloseUploadImage}
        aria-labelledby="upload-image-modal-title"
        aria-describedby="upload-image-modal-description"
      >
        <Box className={styles.modalContainer}>
          <UploadImage/>
          <Button onClick={handleCloseUploadImage}>Volver</Button>
        </Box>
      </Modal>
    </div>
  );
}
