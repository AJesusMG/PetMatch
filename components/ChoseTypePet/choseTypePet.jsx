import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import styles from './choseTypePetStyles.module.css';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';  
import { TextField, MenuItem } from '@mui/material';
import UploadImage from '../UploadImage/uploadImage';


const data = [
  {
    id: 1,
    petType: "Perros",
    img: "../../public/img/Perro_F.jpg",
  },
  {
    id: 2,
    petType: "Gatos",
    img: "../../public/img/Cats.jpg",
  },
  {
    id: 3,
    petType: "Roedores",
    img: "../../public/img/Hamsters.jpg",
  },
  {
    id: 4,
    petType: "Aves",
    img: "../../public/img/Birds.jpg",
  },
];

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

function extractUserIdFromCookies(cookieString) {
  const cookies = cookieString.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'user_id') {
      return value; // Assuming the user ID is stored with the name 'userid'
    }
  }
  return null;
}

const cookies = document.cookie;
const userId = extractUserIdFromCookies(cookies);

export default function ChoseTypePet({ open, handleClose }) {
  const [openFirstModal, setOpenFirstModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [selectedPetType, setSelectedPetType] = useState('');
  const [openThirdModal, setOpenThirdModal] = useState(false);

  const [petData, setPetData] = useState({
    owner: userId,
    name: '',
    breed: '',
    pet_Size: '',
    age: '',
    description: '',
    allergies: '',
    exercise_ability: '',
    weather: '',
    outdoor_Time: ''

  });

  const handleOpenFirstModal = () => {
    setOpenFirstModal(true);
  };

  const handleCloseFirstModal = () => {
    setOpenFirstModal(false);
  };

  const handleOpenSecondModal = (mascota) => {
    setSelectedPetType(mascota.petType);
    setOpenFirstModal(false);
    setOpenSecondModal(true);
  };

  const handleCloseSecondModal = () => {
    setOpenSecondModal(false);
    setOpenFirstModal(true);
    setSelectedPetType('');
    setPetData({
      owner: userId,
      name: '',
      breed: '',
      pet_Size: '',
      age: '',
      description: '',
      allergies: '',
      exercise_ability: '',
      weather: '',
      outdoor_Time: ''// Limpiar otros campos no relacionados con la creación de mascotas
      // Si este campo no debería reiniciarse, déjalo fuera
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setPetData({ ...petData, [e.target.name]: e.target.value });
  };

  const handleNextButtonClick = () => {
    // Aquí puedes completar los datos de la mascota con el tipo seleccionado y los datos del formulario
    const completePetData = {
      ...petData,
      type: selectedPetType,
    };
    console.log('Datos de la mascota:', completePetData);


    const token = extractTokenFromCookies(cookies);
    // Realizar acciones adicionales o enviar a tu backend aquí

    fetch('http://localhost:3000/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
        'credentials': 'include'
      },
      body: JSON.stringify(completePetData)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(data => {
        console.log('Pet created:', data);
        setOpenSecondModal(false); // Cierra el segundo modal
        setOpenThirdModal(true); // Abre el tercer modal
      })
      .catch(error => {
        console.error('There was an error creating the pet:', error);
        // Manejar el error de la solicitud
      });

  };




  return (
    <div>
      <Button onClick={handleOpenFirstModal} style={{ borderRadius: '50%', width: '40px', height: '50px', color: '#000' }}><AddIcon /></Button>
      <Modal
        open={openFirstModal}
        onClose={handleCloseFirstModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={styles.modalContainer}>
          <div className={styles.headModalChooseType}>
            <Button style={{ width: '30px', height: '30px', color: '#000', padding: '0' }} className={styles.headModalChooseTypeCloseButtton} onClick={handleCloseFirstModal}><CloseIcon /></Button>
            <h2 className={styles.headModalChooseTypeTitle}>Elige qué es...</h2>
          </div>
          <div className={styles.headModalChooseTypeImageGrid}>
            {data.map((mascota) => (
              <div className={styles.imgContainer} key={mascota.id} onClick={() => handleOpenSecondModal(mascota)}>
                <img className={styles.imgAnimal} src={mascota.img} alt="Animal" />
                <div className={styles.overlay}>
                  <p>{mascota.petType}</p>
                </div>
              </div>
            ))}
          </div>
        </Box>
      </Modal>
      <Modal
        open={openSecondModal}
        onClose={handleCloseSecondModal}
        aria-labelledby="upload-image-modal-title"
        aria-describedby="upload-image-modal-description"
      >
        <form onSubmit={handleFormSubmit} >
          <Box className={styles.modalContainer}>
            <div className={styles.headModalAddInfo}>
              <Button style={{ width: '30px', height: '30px', color: '#000', padding: '0' }} className={styles.headModalChooseTypeCloseButtton} onClick={handleCloseSecondModal}>Atras</Button>
              <h2 className={styles.headModalAddInfoTitle} >Ingresa los datos de tu mascota</h2>
              <Button onClick={handleNextButtonClick}>Siguiente</Button>
            </div>
            <div className={styles.formInfoPet}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <TextField
                  name="name"
                  label="Name"
                  value={petData.name}
                  onChange={handleFormSubmit}
                  style={{ flex: '1' }}
                />
                <TextField
                  name="age"
                  label="Age"
                  value={petData.age}
                  onChange={handleFormSubmit}
                  type="text" // Tipo de entrada de texto para que pueda aceptar números
                  inputProps={{
                    pattern: '[0-9]*', // Patrón para aceptar solo números
                    inputMode: 'numeric', // Modo de entrada numérica en dispositivos móviles
                  }}
                  style={{ flex: '1' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <TextField
                  select
                  name="pet_Size"
                  label="Size"
                  value={petData.pet_Size}
                  onChange={handleFormSubmit}
                  style={{ flex: '1' }}
                >
                  <MenuItem value="Pequeno">Pequeño</MenuItem>
                  <MenuItem value="Mediano">Mediano</MenuItem>
                  <MenuItem value="Grande">Grande</MenuItem>
                </TextField>
                <TextField
                  name="breed"
                  label="Breed"
                  value={petData.breed}
                  onChange={handleFormSubmit}
                  style={{ flex: '1' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <TextField
                  select
                  name="allergies"
                  label="Allergies"
                  value={petData.allergies}
                  onChange={handleFormSubmit}
                  style={{ flex: '1' }}
                >
                  <MenuItem value="Yes">Si</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </TextField> {/* Agregado */}
              <TextField
                select
                name="exercise_ability"
                label="Exercise Ability"
                value={petData.exercise_ability}
                onChange={handleFormSubmit}
                  style={{ flex: '1' }}
              >
                <MenuItem value="Poco">Poco</MenuItem>
                <MenuItem value="Moderado">Moderado</MenuItem>
                <MenuItem value="Mucho">Mucho</MenuItem>
              </TextField>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <TextField
                  select
                  name="outdoor_Time"
                  label="¿Pasas mucho tiempo afuera?"
                  value={petData.outdoor_Time}
                  onChange={handleFormSubmit}
                  style={{ flex: '1' }}
                >
                  <MenuItem value="Si">Si</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </TextField> {/* Agregado */}
                <TextField
                  select
                  name="weather"
                  label="Clima preferente"
                  value={petData.weather}
                  onChange={handleFormSubmit}
                  style={{ flex: '1' }}
                >
                  <MenuItem value="Frio">Frio</MenuItem>
                  <MenuItem value="Calor">Calor</MenuItem>
                  <MenuItem value="Templado">Templado</MenuItem>
                  <MenuItem value="Todos los climas">Todos los climas</MenuItem>
                </TextField>
              </div>
              <TextField
                name="description"
                label="Description"
                value={petData.description}
                onChange={handleFormSubmit}
                multiline
                rows={9}
              />
            </div>

          </Box>
        </form>
      </Modal>
      <Modal
        open={openThirdModal}
        onClose={() => setOpenThirdModal(false)}
        aria-labelledby="third-modal-title"
        aria-describedby="third-modal-description"
      >
        <Box className={styles.modalContainer}>
          <UploadImage />
        </Box>
      </Modal>
    </div>
  );
}
