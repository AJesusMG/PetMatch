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
    petType: "Perro",
    img: "../../public/img/Perro_F.jpg",
  },
  {
    id: 2,
    petType: "Gato",
    img: "../../public/img/Cats.jpg",
  },
  {
    id: 3,
    petType: "Roedor",
    img: "../../public/img/Hamsters.jpg",
  },
  {
    id: 4,
    petType: "Ave",
    img: "../../public/img/Birds.jpg",
  },
];

export default function ChoseTypePet({ open, handleClose }) {
  const [openFirstModal, setOpenFirstModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);
  const [selectedPetType, setSelectedPetType] = useState('');
  const [openThirdModal, setOpenThirdModal] = useState(false);

  const [petData, setPetData] = useState({
    name: '',
    breed: '',
    pet_Size: '',
    age: '',
    description: '',
    allergies: '',
    exercise_ability: '',
    status: 'en adopcion'
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
      name: '',
      breed: '',
      age: '',
      pet_Size: '',
      description: '', // Agregar limpieza para el campo 'description'
      // Si este campo no debería reiniciarse, déjalo fuera
      allergies: '',
      exercise_ability: '', // Limpiar otros campos no relacionados con la creación de mascotas
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
    // Realizar acciones adicionales o enviar a tu backend aquí

    fetch('http://localhost:3000/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
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
                  style={{ flex: '1' }}
                />
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <TextField
                  name="pet_Size"
                  label="Size"
                  value={petData.pet_Size}
                  onChange={handleFormSubmit}
                  style={{ flex: '1' }}
                />
                <TextField
                  name="breed"
                  label="Breed"
                  value={petData.breed}
                  onChange={handleFormSubmit}
                  style={{ flex: '1' }}
                />
              </div>
              <TextField name="allergies" label="Allergies" value={petData.allergies} onChange={handleFormSubmit} /> {/* Agregado */}
              <TextField
                select
                name="exercise_ability"
                label="Exercise Ability"
                value={petData.exercise_ability}
                onChange={handleFormSubmit}
              >
                <MenuItem value="Poco">Poco</MenuItem>
                <MenuItem value="Moderado">Moderado</MenuItem>
                <MenuItem value="Mucho">Mucho</MenuItem>
              </TextField>
              <TextField
                name="description"
                label="Description"
                value={petData.description}
                onChange={handleFormSubmit}
                multiline
                rows={4}
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
