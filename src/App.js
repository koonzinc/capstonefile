import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import IndividualStocks from './pages/IndividualStocks/IndividualStocks';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Home from './pages/Home/Home';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Api from './API/Api';
import Login from './pages/Login/Login';
import SocialPosts from './components/SocialPost/SocialPosts';

function App() {
  const [aapl, setAapl] = useState('')

  const aaplUrl = 'https://finnhub.io/api/v1/search?q=AAPL&token=cd9g9uaad3i97v8iuvfgcd9g9uaad3i97v8iuvg0'

  useEffect(() => {
    getAapl();
  }, [])

  const getAapl = async () => {
    const response = await axios.get(aaplUrl);
    const aaplSymbol = response.data.result[0].symbol;
    setAapl(aaplSymbol);
  }
  

  return (
    <Routes>
      <Route path="/" element={<Home aapl={aapl} />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/individual-stocks/:stockId" element={<IndividualStocks aapl={aapl}  />}/>
      <Route path="/profile-page" element={<SocialPosts />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  );
}

export default App;
