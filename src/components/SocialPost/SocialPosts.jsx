import React, { useState } from "react";
import "./SocialPosts.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function SocialPosts({ modal, handleModal }) {
  return (
    <div className="modal__background">
      <div className="modal">
        <div className="semi__container">
          <div className="exit">
            <AiOutlineCloseCircle
              onClick={handleModal}
              size={27}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="photo__inputContainer">
            <img
              className="profile__photo"
              src="https://picsum.photos/30/30"
              alt=""
            />
            <textarea
              className="input"
              placeholder="what's happening?"
              rows="7"
            ></textarea>
          </div>
          <div className="button__container">
            <button className="send">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
