import React from "react";
import Content from "./Content";
import './CfRating.css'

function CfRating() {
  return (
    <div className="tot">
      <div className="mockup-window  border bg-base-300">
        <div className="flex justify-center px-4 py-6 xyz bg-base-200">
        {/* <div className="dropdown dropdown-hover">
  <label tabIndex={0} className="btn m-1">Hover</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div> */}
        <Content />

        </div>
      </div>
      
    </div>
  );
}

export default CfRating;
