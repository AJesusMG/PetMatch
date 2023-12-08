import React, { useState } from 'react';
import Button from '@mui/material/Button';
import styles from './uploadImageStyles.module.css';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Hacer la petición POST a localhost:3000/uploads con el archivo seleccionado
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
;

      fetch('http://localhost:3000/uploads', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then((data) => {
          console.log('File uploaded:', data);

          // Segunda petición POST a localhost:3000/posts
          return fetch('http://localhost:3000/posts', {
            method: 'POST',
          });
        })
        .then((response) => {
          if (response.ok) {
            console.log('Post created successfully');
            // Realizar acciones adicionales si es necesario con la respuesta del servidor
          } else {
            throw new Error('Network response was not ok.');
          }
        })
        .catch((error) => {
          console.error('There was an error:', error);
          // Manejar el error de la solicitud
        });
    }
  };

  return (
    <React.Fragment>
      <div className={styles.modalContainer}>
        <div className={styles.headModalUploadImage}>
          <Button style={{ width: '30px', height: '30px', color: '#000', padding: '0' }}>
            <CloseIcon />
          </Button>
          <h2>Sube una foto</h2>
          <Button onClick={handleUpload} variant="contained" color="primary">
            Publicar
          </Button>
        </div>
        <div className={styles.ContentModalUploadGrid}>
          <div>
            <CloudQueueIcon />
          </div>
          <Button component="label" variant="contained" color="success">
            Seleccionar desde la computadora
            <input type="file" onChange={handleFileChange} style={{ display: 'none' }} name='image'/>
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}