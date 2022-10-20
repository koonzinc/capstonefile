import { Route, Routes } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import IndividualStocks from './pages/IndividualStocks/IndividualStocks';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Home from './pages/Home/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/individual-stocks" element={<IndividualStocks />}/>
      <Route path="/profile-page" element={<ProfilePage />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  );
}

export default App;
