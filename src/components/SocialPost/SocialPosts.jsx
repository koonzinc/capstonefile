import React, { useState } from "react";
import "./SocialPosts.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "../../axios";

export default function SocialPosts({ modal, handleModal }) {
  const [headlineData, setHeadlineData] = useState("");
  const [content, setContent] = useState("fhjfbhdsujbfsjhd");
  const [date, setDate] = useState("01-01-01");
  const [userId, setUserId] = useState(1);

  let token = localStorage.getItem("userToken");
  const sendPost = async (e) => {
    e.preventDefault();

    const holder = await axios.post(
      "posts",
      {
        user_id: userId,
        headline: headlineData,
        content: content,
        date_stamp: date,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log("holder",holder);
  };

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
              <form onSubmit={sendPost}>
                <input
                  onChange={(e) => setHeadlineData(e.target.value)}
                  className="modal__headline"
                  placeholder="headline"
                  value={headlineData}
                />

                {/* <textarea
                onChange={(e) => setContent(e.target.value)}
                className="textarea"
                placeholder="what's happening?"
                rows="7"
              ></textarea> */}
                <div className="button__container">
                  <button type="submit" className="send">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
