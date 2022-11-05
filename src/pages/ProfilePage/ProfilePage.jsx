import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import NavBar from "../../components/NavBar/NavBar";
import ScrollingStocks from "../../components/ScrollingStocks/ScrollingStocks";
import axios from "../../axios";
import { useNavigate, useParams } from "react-router-dom";

const ProfilePage = ({ postData }) => {
  const navigate = useNavigate();
  const { userName } = useParams();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    // let token = localStorage.getItem("userToken");

    // axios
    //   .get("validate-token", { headers: { Authorization: `Bearer ${token}` } })
    //   .then((res) => console.log(res))
    //   .catch((error) => {
    //     navigate("/login");
    //   });

    axios
      .get("user-profile?key=" + userName, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((res) => setUserInfo(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(userInfo);
  return (
    <>
      <NavBar />

      <div className="wrapper3">
        <div className="profileContainer">
          <div className="topProfileContainer">
            <div className="photoContainer">
              <img
                className="image banner"
                src={userInfo && userInfo.banner}
                width={500}
                height={200}
                alt=""
              />
              <img
                className="image profile"
                src={userInfo && userInfo.profile_photo}
                width={200}
                height={200}
                alt=""
              />
            </div>
            <div className="infoContainer">
              <h2 id="name">{userInfo && userInfo.name}</h2>
              <h3 id="username">@{userInfo && userInfo.user_name}</h3>
              <p id="bio">
                {userInfo.bio}
              </p>
              <div className="followContainer">
                <p className="follow" id="following">
                  <span className="followCount">{userInfo && userInfo.following}</span> Following
                </p>
                <p className="follow" id="followers">
                  <span className="followCount">{userInfo && userInfo.followers}</span> Followers
                </p>
              </div>
              <button id="edit-btn">Edit Profile</button>
            </div>
          </div>
          <div className="postSelector">
            <div id="headerContainer">
              <h1>Posts</h1>
            </div>
          </div>
          <div className="bottomPostContainer">
            {postData.map((post, i) => (
              <div className="posts-container">
                <img
                  id="post-profile-image"
                  src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg"
                  alt=""
                />
                <div className="post-profile-info">
                  <p id="profile-post-name">William Koonz</p>
                  <p className="light-post" id="profile-post-username">
                    @williamkoonz •&nbsp;
                  </p>
                  <p className="light-post">{postData[i].date_stamp}</p>
                </div>
                <div className="post-headline-info">
                  <h3 class="post-headline">{postData[i].headline}</h3>
                  <p style={{ overflow: "scroll" }} className="post-headline">
                    {postData[i].content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
