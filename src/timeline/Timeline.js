import React from 'react';
import Post from "./posts/Post";
import Sugesstions from "./Sugesstions"; 
import "./Timeline.css";

function Timeline() {
  return (
    <div className="timeline">
      
        <Sugesstions />
        <Post/>
    </div>
    
  );
}

export default Timeline;
