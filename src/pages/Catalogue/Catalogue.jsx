import React from "react";
import { Grid } from "@mui/material";
import SideBar from "../../../components/SideBar/sideBar";
import PostCard from "../../../components/PostCard/PostCard";
import styles from "./catalogueStyles.module.css";

const PostInfo = [
  {
    id: 1,
    img: "https://dog.ceo/api/breeds/image/random",
    userName: "@Usuario1",
  },
  {
    id: 2,
    img: "https://dog.ceo/api/breeds/image/random",
    userName: "@Usuario2",
  },
  {
    id: 3,
    img: "https://dog.ceo/api/breeds/image/random",
    userName: "@Usuario3",
  },
  {
    id: 4,
    img: "https://dog.ceo/api/breeds/image/random",
    userName: "@Usuario4",
  },
];

export default function Catalogue() {
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className={styles.postContainer}>
        <Grid container spacing={2}>
          {PostInfo.map((post, index) => (
            <Grid item key={index}>
              <PostCard {...post} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
