import React, { useEffect, useState } from "react";
import DataTables from "../../components/DataTables/DataTables";
import IndexContainer from "../../components/IndexContainer/IndexContainer";
import NavBar from "../../components/NavBar/NavBar";
import Posts from "../../components/Posts/Posts";
import ScrollingStocks from "../../components/ScrollingStocks/ScrollingStocks";
import "./Home.css";
import SocialPosts from "../../components/SocialPost/SocialPosts";
import { BsPencilSquare } from "react-icons/bs";

const Home = ({ aapl }) => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(true);
  }

  return (
    <div>
      <NavBar />
      {modal ? <SocialPosts/> : null}
      <div className="home-page-container">
        <ScrollingStocks aapl={aapl} />
        <IndexContainer />
        <div className="data-and-post-container">
          <div className="data-tables">
           
            <DataTables />
          </div>
          <div className="home-posts-container">
            <div className="posts-header">
              <h1>Posts</h1>
              <BsPencilSquare onClick={handleModal} style={{margin: 'auto 0', cursor: 'pointer'}} size={30}/>
            </div>
            <Posts />
            <Posts />
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
