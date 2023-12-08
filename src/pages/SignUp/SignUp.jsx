import React from 'react'
import MenuAdmin from '../../../components/MenuAdmin/MenuAdmin'
import AdoptFullPost from '../../../components/AdoptFullPost/AdoptFullPost'
import AdoptFullPostInProfile from '../../../components/AdoptFullPostInProfile/AdoptFullPostInProfile'
import { Grid } from '@mui/material'
import AdoptFullPostReport from '../../../components/AdoptFullPostReport/AdoptFullPostReport'
import ReportCard from '../../../components/ReportCard/ReportCard'
import AnswerCard from '../../../components/AnswerCard/AnswerCard'
import FullComment from '../../../components/FullComment/FullComment'

const FullPostInfo = [
  {
    id: 1,
    img: "https://picsum.photos/200/300?random=1",
    userName: "Nutriayapa",
    description: "Hoy quiero presentarles a este hermoso perro blanco que ha llegado a mi vida y está en busca de un nuevo hogar. Se trata de un encantador Husky de un año de edad que ha conquistado nuestros corazones con su belleza y personalidad juguetona.",
    race: "Husky ",
    size: "Grande",
    age: "0.5 - 1 año",
    instagram: "a.jesus.g",
    whatsapp: "2712452978",
    facebook: "Alan Morales"
  }
]
const FullPostInfoInProfile = [
  {
    id: 1,
    userName: "Nutriayapa",
    img: "https://picsum.photos/200/300?random=1",
    location: "Queretaro, Rancho Largo",
    description: "Hoy quiero presentarles a este hermoso perro blanco que ha llegado a mi vida y está en busca de un nuevo hogar. Se trata de un encantador Husky de un año de edad que ha conquistado nuestros corazones con su belleza y personalidad juguetona.",
    race: "Husky",
    size: "Grande",
    age: "0.5 - 1 año",
    instagram: "a.jesus.g",
    whatsapp: "2712452978",
    facebook: "Alan Morales"
  }
]

export const SignUp = () => {
  return (
    <div>
      {/* <ProfileMenu /> */}
      {/* <MenuAdmin /> */}
      {/* <Grid>
        {FullPostInfo.map((post, index) => (
          <Grid item key={index}>
            <AdoptFullPost {...post} />
          </Grid>
        ))}
      </Grid> */}
      {/* <Grid>
        {FullPostInfo.map((post, index) => (
          <Grid item key={index}>
            <AdoptFullPostReport {...post} />
          </Grid>
        ))}
      </Grid> */}
      {/* <Grid>
        {FullPostInfoInProfile.map((post, index) => (
          <Grid item key={index}>
            <AdoptFullPostInProfile {...post} />
          </Grid>
        ))}
      </Grid> */}
      {/* <ReportCard /> */}
      {/* <AnswerCard /> */}
      <FullComment />
    </div>
  )
}

export default SignUp
