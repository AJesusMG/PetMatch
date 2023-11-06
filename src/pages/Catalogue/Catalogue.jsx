import React from "react";
import PostCard from "../../../components/PostCard/PostCard";
import FullPost from "../../../components/FullPost/fullPost";
import SideNav from "../../../components/SideNav/sideNav.jsx";

export default function Catalogue() {
  return (
    <div>
      {/* <PostCard /> */}
      <SideNav />
      <FullPost />
    </div>
  );
}
