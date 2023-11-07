import React from "react";
import PostCard from "../../../components/PostCard/PostCard";
import FullPost from "../../../components/FullPost/fullPost";
import AdoptFullPost from "../../../components/AdoptFullPost/adoptFullPost";
import ReportPost from "../../../components/ReportPost/reportPost";
import SideNav from "../../../components/SideNav/sideNav.jsx";


export default function Catalogue() {
  return (
    
    <div>
      {/* <PostCard /> */}
      {/* <FullPost /> */}
      {/* <AdoptFullPost /> */}
      <div>
        <SideNav />
      </div>
      <ReportPost />
    </div>
  );
}
