import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import styles from './uploadImageStyles.module.css';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import CloseIcon from '@mui/icons-material/Close';

function extractTokenFromCookies(cookieString) {
  const cookies = cookieString.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'token') {
      return value;
    }
  }
  return null;
}

export default function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null); // Referencia para el input

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Hacer la petición POST a localhost:3000/uploads con el archivo seleccionado
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);
      console.log(formData);



      const cookies = document.cookie;
      const token = extractTokenFromCookies(cookies);

      fetch('http://localhost:3000/uploads', {
        headers: {
          'Authorization': 'Bearer ' + token,
        },
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
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
            },
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

  const handleButtonClick = () => {
    // Simula el clic en el input de tipo file
    fileInputRef.current.click();
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
          <Button
            variant="contained"
            color="success"
            onClick={handleButtonClick} // Manejar el clic del botón
          >
            Seleccionar desde la computadora
          </Button>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            name="image"
          />
        </div>
      </div>
    </React.Fragment>
  );
}