import React, { useState } from "react";
import "./SocialPosts.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "../../axios";

export default function SocialPosts({ modal, handleModal }) {
  const [headlineData, setHeadlineData] = useState("");
  const [content, setContent] = useState("fhjfbhdsujbfsjhd");
  const [date, setDate] = useState("01-01-01");
  const [user, setUser] = useState(1);

  const createPost = (e) => {
    e.preventDefault();
    axios
      .post("posts", {
        user_id: user,
        headline: headlineData,
        content: content,
        date_stamp: date,
      },)

      .then((res) => {
        console.log("API response: ", res);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  console.log(headlineData);
  console.log(content);
  console.log(date);

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
            <div className="content__wrapper">
              <form onSubmit={createPost}>
                <input
                  onChange={(e) => setHeadlineData(e.target.value)}
                  className="modal__headline"
                  placeholder="headline"
                />

                {/* <textarea
                onChange={(e) => setContent(e.target.value)}
                className="textarea"
                placeholder="what's happening?"
                rows="7"
              ></textarea> */}
              </form>
            </div>
          </div>
          <div className="button__container">
            <button type="submit" className="send">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
