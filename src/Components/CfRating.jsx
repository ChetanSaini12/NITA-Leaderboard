import React from "react";
import Content from "./Content";
import './CfRating.css'
import ThemeCmp from "../ThemeCmp";

function CfRating() {
  return (
    <div className="tot">
      <div className="mockup-window  border bg-base-300">
       <div className="thm"> <ThemeCmp/> </div>
        <div className="flex justify-center px-4 py-6 xyz bg-base-200">
        <Content />

        </div>
      </div>
      
    </div>
  );
}

export default CfRating;
