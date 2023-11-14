import React from "react";
import PostCard from "../../../components/PostCard/PostCard";
import FullPost from "../../../components/FullPost/fullPost";
import AdoptFullPost from "../../../components/AdoptFullPost/adoptFullPost";
import ReportPost from "../../../components/ReportPost/reportPost";
import SideNav from "../../../components/SideNav/sideNav.jsx";

import SideBar from "../../../components/SideBar/sideBar";

export default function Catalogue() {
  return (
    
    <div>
      <div>
        <SideBar />
      </div>
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
