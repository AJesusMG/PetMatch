import React, { useState } from "react";
import { Avatar, Grid, Modal, Backdrop, Fade } from "@mui/material";
import SideBar from "../../../components/SideBar/sideBar";
import PostCard from "../../../components/PostCard/PostCard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ProfileMenu from "../../../components/ProfileMenu/ProfileMenu";
import AdoptFullPost from '../../../components/AdoptFullPost/AdoptFullPost'
import Profile from "../../../public/img/dog_1.png";
import ReportCard from "../../../components/ReportCard/ReportCard";

import styles from "./catalogStyles.module.css";

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
const userId = extractUserIdFromCookies(cookies)



function handleUpload()  {
  // ... (tu lógica de subida de archivo)
  const token = extractTokenFromCookies(cookies);

  console.log(userId)

  fetch('http://localhost:3000/posts/postsFilteredByPreferences', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      'userId' : userId 
      // Aquí puedes agregar tus headers si es necesario
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then((data) => {
      console.log('Posts filtered by preferences:', data);
      // Realizar acciones con la respuesta del servidor
    })
    .catch((error) => {
      console.error('There was an error:', error);
      // Manejar el error de la solicitud
    });
};

handleUpload()

const PostInfo = [
  {
    id: 1,
    img: "https://picsum.photos/200/300?random=1",
    userName: "@Usuario1",
  },
  {
    id: 2,
    img: "https://picsum.photos/200/300?random=2",
    userName: "@Usuario2",
  },
  {
    id: 3,
    img: "https://picsum.photos/200/300?random=3",
    userName: "@Usuario3",
  },
  {
    id: 4,
    img: "https://picsum.photos/200/300?random=4",
    userName: "@Usuario4",
  },
  {
    id: 5,
    img: "https://picsum.photos/200/300?random=5",
    userName: "@Usuario5",
  },
  {
    id: 6,
    img: "https://picsum.photos/200/300?random=6",
    userName: "@Usuario6",
  },
  {
    id: 7,
    img: "https://picsum.photos/200/300?random=7",
    userName: "@Usuario7",
  },
  {
    id: 8,
    img: "https://picsum.photos/200/300?random=8",
    userName: "@Usuario8",
  },
  {
    id: 9,
    img: "https://picsum.photos/200/300?random=9",
    userName: "@Usuario9",
  },
  {
    id: 10,
    img: "https://picsum.photos/200/300?random=10",
    userName: "@Usuario10",
  },
  {
    id: 11,
    img: "https://picsum.photos/200/300?random=11",
    userName: "@Usuario11",
  },
  {
    id: 12,
    img: "https://picsum.photos/200/300?random=12",
    userName: "@Usuario12",
  },
];

const handleProfileClick = () => {
  // Agrega aquí la lógica de redirección o acciones específicas del perfil
  console.log("Perfil clickeado");
  // Puedes agregar aquí la lógica de redirección o acciones específicas del perfil
};


const ProfileInfo = [
  {
    id: 1,
    userName: "Nutriayapa",
    email: "alanj.ajmg@outlook.com"
  }
]

export default function Catalog() {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isAdoptModalOpen, setAdoptModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState({

    description: "Hoy quiero presentarles a este hermoso perro blanco que ha llegado a mi vida y está en busca de un nuevo hogar. Se trata de un encantador Husky de un año de edad que ha conquistado nuestros corazones con su belleza y personalidad juguetona.",
    race: "Husky ",
    size: "Grande",
    age: "0.5 - 1 año",
    instagram: "a.jesus.g",
    whatsapp: "2712452978",
    facebook: "Alan Morales",

  });
  const [isReportModalOpen, setReportModalOpen] = useState(false);

  const handleProfileClick = () => {
    setProfileMenuOpen(true);
  };

  const handleModalClose = () => {
    setProfileMenuOpen(false);
  };

  const handlePostCardClick = (post) => {
    setSelectedPost({
      description: "Hoy quiero presentarles a este hermoso perro blanco que ha llegado a mi vida y está en busca de un nuevo hogar. Se trata de un encantador Husky de un año de edad que ha conquistado nuestros corazones con su belleza y personalidad juguetona.",
      race: "Husky ",
      size: "Grande",
      age: "0.5 - 1 año",
      instagram: "a.jesus.g",
      whatsapp: "2712452978",
      facebook: "Alan Morales",
      ...post,
    });
    setAdoptModalOpen(true);
  };

  const handleAdoptModalClose = () => {
    setAdoptModalOpen(false);
  };

  const handleReportButtonClick = () => {
    setReportModalOpen(true);
  };

  return (
    <div className={styles.containerFlex}>
      <div className={styles.sideContainer}>
        <SideBar />
      </div>
      <div className={styles.catalogContainer}>
        <div className={styles.iconContainer}>
          <Avatar
            alt="Profile Image"
            src={Profile}
            onClick={handleProfileClick}
            className={styles.iconStyle}
          >
            <AccountCircleIcon />
          </Avatar>
        </div>
        <div className={styles.topContainer}>
          <div>
            <p className={styles.titleCatalogue}>Mascotas en Adopcion</p>
          </div>
        </div>
        <div className={styles.postContainer}>
          <Grid container spacing={2}>
            {PostInfo.map((post, index) => (
              <Grid item key={index}>
                <PostCard {...post} onClick={() => handlePostCardClick(post)} />
              </Grid>
            ))}
          </Grid>
        </div>
        {/* Modal de AdoptFullPost */}
        <Modal
          open={isAdoptModalOpen}
          onClose={handleAdoptModalClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
            style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          }}
        >
          <Fade in={isAdoptModalOpen}>
            <div className={styles.modalBackdrop} onClick={handleAdoptModalClose}>
              <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
                {/* Pasa la información del post seleccionado al componente AdoptFullPost */}
                {selectedPost && <AdoptFullPost {...selectedPost} onReportButtonClick={handleReportButtonClick} />}
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
      {/* Modal de ProfileMenu */}
      <Modal
        open={isProfileMenuOpen}
        onClose={handleModalClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: { backgroundColor: "transparent" },
        }}
      >
        <Fade in={isProfileMenuOpen}>
          <div className={styles.menuContainer}>
            <Grid>
              {ProfileInfo.map((post, index) => (
                <Grid item key={index}>
                  <ProfileMenu {...post} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Fade>
      </Modal>
      {/* Modal de ReportCard */}
      <Modal
        open={isReportModalOpen}
        onClose={() => setReportModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
        }}
      >
        <Fade in={isReportModalOpen}>
          <div className={styles.reportModalBackdrop} onClick={() => setReportModalOpen(false)}>
            <div className={styles.reportModalContainer} onClick={(e) => e.stopPropagation()}>
              <ReportCard />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}