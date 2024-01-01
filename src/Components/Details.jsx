import React, { useState, useEffect } from "react";
import "./Details.css";

function Details(props) {
  // const [isOpen, setIsOpen] = useState(props.ind == -1);
  const [isOpen, setIsOpen] = useState(props.ind > -1);

  const handleCloseModal = () => {
    setIsOpen(false);
    props.updateInd(-1);
  };

  useEffect(() => {
    setIsOpen(props.ind > -1);
  }, [props.ind]);

  return (
    <div className="box">
      <input
        type="checkbox"
        checked={isOpen}
        onChange={handleCloseModal}
        id="my-modal-4"
        className="modal-toggle"
      />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box w-11/12 max-w-5xl relative" htmlFor="">
          <hr className="line1"></hr>
          <hr className="line2"></hr>
          <button className="aatar">
            <img src={props.avatar} alt={props.handle} className="DAvatar" />
          </button>
          <div>
            <kbd>
              <b> {props.handle}</b>
            </kbd>
          </div>
          <div>
            <kbd>
              <b>College Rank : {props.state + 1}</b>
            </kbd>
          </div>
          <div className="Rating">
            <div className="RatCol">
              <div>Current Rating</div>
              <hr className="line"></hr>
              <div>
                <code> {props.curRating}</code>
              </div>
              <div
                className={`badge  badge-lg text-black ${
                  props.curRating >= 2100
                    ? "bg-mstr rt"
                    : props.curRating >= 1900
                    ? "bg-cm rt"
                    : props.curRating >= 1600
                    ? "bg-expert rt"
                    : props.curRating >= 1400
                    ? "bg-specialist rt"
                    : props.curRating >= 1200
                    ? "bg-pupil rt"
                    : "bg-newbie rt"
                }`}
              >
                {props.rank.charAt(0).toUpperCase() + props.rank.slice(1)}
              </div>
            </div>
            <div className="RatCol">
              <div>Max. Rating</div>
              <hr className="line"></hr>
              <div>
                <code> {props.maxRating}</code>
              </div>
              <div
                className={`badge  badge-lg text-black ${
                  props.maxRating >= 2100
                    ? "bg-mstr rt"
                    : props.maxRating >= 1900
                    ? "bg-cm rt"
                    : props.maxRating >= 1600
                    ? "bg-expert rt"
                    : props.maxRating >= 1400
                    ? "bg-specialist rt"
                    : props.maxRating >= 1200
                    ? "bg-pupil rt"
                    : "bg-newbie rt"
                }`}
              >
                {props.maxRank.charAt(0).toUpperCase() + props.maxRank.slice(1)}
              </div>
            </div>
          </div>


          {/* {Element.map((elem, index) => (
            <div>{elem.id}</div>
          ))} */}

        </label>
      </label>
    </div>
  );
}

export default Details;
