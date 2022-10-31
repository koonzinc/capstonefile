import React, { useEffect } from "react";
import "./ProfilePage.css";
import NavBar from "../../components/NavBar/NavBar";
import ScrollingStocks from "../../components/ScrollingStocks/ScrollingStocks";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";


const ProfilePage = ({ postData }) => {
  const navigate = useNavigate();
  useEffect(() => {
    let token = localStorage.getItem("userToken");

    axios
      .get(
        "validate-token",
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => console.log(res))
      .catch((error) => {
        navigate("/login");
      });
  });

  return (
    <>
      <NavBar />

      <div className="wrapper3">
        <div className="profileContainer">
          <div className="topProfileContainer">
            <div className="photoContainer">
              <img
                className="image banner"
                src="https://media.cntraveler.com/photos/56cf6b7569d8fae9411b181a/master/pass/Adriano_Neves_Portugual_Shortlist_Open_Travel_2016.jpg"
                width={500}
                height={200}
                alt=""
              />
              <img
                className="image profile"
                src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515135672-shutterstock_284581649.jpg"
                width={200}
                height={200}
                alt=""
              />
            </div>
            <div className="infoContainer">
              <h2 id="name">William Koonz</h2>
              <h3 id="username">@williamkoonz</h3>
              <p id="bio">
                This is a banner Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Nesciunt, impedit?
              </p>
              <div className="followContainer">
                <p className="follow" id="following">
                  <span className="followCount">123</span> Following
                </p>
                <p className="follow" id="followers">
                  <span className="followCount">94</span> Followers
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
                  <p style={{overflow: 'scroll'}} className="post-headline">{postData[i].content}</p>
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
