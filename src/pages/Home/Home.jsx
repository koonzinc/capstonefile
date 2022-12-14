import React, { useEffect, useState } from "react";
import DataTables from "../../components/DataTables/DataTables";
import IndexContainer from "../../components/IndexContainer/IndexContainer";
import NavBar from "../../components/NavBar/NavBar";

import ScrollingStocks from "../../components/ScrollingStocks/ScrollingStocks";
import "./Home.css";
import SocialPosts from "../../components/SocialPost/SocialPosts";
import { BsPencilSquare } from "react-icons/bs";
import "../../components/Posts/Posts.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "../../axios.js";

const Home = ({ aapl, postData, watchlistData, userId }) => {
  const [modal, setModal] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  let token = localStorage.getItem("userToken");
  useEffect(() => {
    if (token) {
      setSignedIn(!signedIn);
    }
  }, [token]);

  const handleModal = () => {
    setModal(!modal);
  };

  const handleDelete = (stock) => {
    console.log(stock);
    console.log(token);
    console.log(userId);
    axios
      .delete(
        "watchlist-delete",

        { headers: { Authorization: `Bearer ${token}` } },
        {
          user_id: userId,
          stock: stock,
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // { headers: { Authorization: `Bearer ${token}` } }

  return (
    <div>
      <NavBar />
      {modal ? <SocialPosts modal={modal} handleModal={handleModal} /> : null}
      <div className="home-page-container">
        <ScrollingStocks aapl={aapl} />
        <IndexContainer />
        <div className="data-and-post-container">
          <div className="data-tables">
            {/* watchlist data table */}

            {signedIn ? (
              <div className="data-table-container">
                {watchlistData.map((stock, i) => (
                  <div
                    style={{ alignItems: "center" }}
                    className="pill__wrapper"
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/individual-stocks/${watchlistData[i].stock}`}
                      replace
                    >
                      <span id="pill__tickers">${stock.stock}</span>
                    </Link>
                    <span>
                      <AiOutlineCloseCircle
                        onClick={() => handleDelete(stock.stock)}
                        size={30}
                      />
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="data-table-container">
                <div id="watchlist__notSignedIn">
                  <h2 style={{ marginBottom: "-0.75rem" }}>
                    Sign up or Sign in
                  </h2>
                  <p>to create a watchlist</p>
                  <Link to="/login" replace>
                    <button
                      style={{ marginBottom: "0.5rem" }}
                      className="watchlist__buttons"
                    >
                      Sign in
                    </button>
                  </Link>
                  <Link to="/signup" replace>
                    <button
                      style={{ backgroundColor: "#2752FF", color: "white" }}
                      className="watchlist__buttons"
                    >
                      Sign up
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div className="home-posts-container">
            <div className="posts-header">
              <h1>Posts</h1>
              <BsPencilSquare
                onClick={handleModal}
                style={{ margin: "auto 0", cursor: "pointer" }}
                size={30}
              />
            </div>
            {signedIn ? (
              <div>
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
                        @williamkoonz ???&nbsp;
                      </p>
                      <p className="light-post">{postData[i].date_stamp}</p>
                    </div>
                    <div className="post-headline-info">
                      <h3 class="post-headline">{postData[i].headline}</h3>
                      <p
                        style={{ overflow: "scroll" }}
                        className="post-headline"
                      >
                        {postData[i].content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div id="posts__notSignedIn">
                <div className="inner__posts">
                  <h2
                    style={{ marginBottom: "-0.75rem", marginTop: "-0.3rem" }}
                  >
                    Sign up or Sign in
                  </h2>
                  <p>to create a post</p>
                  <div className="post__buttonContainer">
                    <Link to="/login">
                      <button
                        style={{ marginRight: "0.25rem" }}
                        className="post__buttonsNotSignedIn"
                      >
                        Sign in
                      </button>
                    </Link>
                    <Link to="signup">
                      <button
                        style={{
                          marginLeft: "0.25rem",
                          backgroundColor: "#2752FF",
                          color: "white",
                        }}
                        className="post__buttonsNotSignedIn"
                      >
                        Sign up
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
