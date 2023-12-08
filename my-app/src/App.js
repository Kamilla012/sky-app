import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import SatellitesSearch from './components/SatellitesSearch';
import StarsChart from './components/StarsChart';
import IndexPage from './pages/IndexPage';
import Profile from './pages/Profile';
import SatelliteMap from './components/SatelliteMap';
import { SatelliteMapPage } from './pages/SatelliteMapPage';
import { StarsInfo } from './components/StarsInfo';
import ConstellationDetail from './components/ConstellationDetail';

function App() {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Layout userInfo={userInfo} setUserInfo={setUserInfo} />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage setUserInfo={setUserInfo} />} />
        <Route path="/blog" element={<IndexPage showAllPosts={true} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/satellites" element={<SatellitesSearch />} />
        <Route path="/satellitesMapPage" element={<SatelliteMapPage />} />
        <Route path="/profile" element={<Profile />} />
      
        <Route path="/constellations/:name" element={<ConstellationDetail />} />
        <Route path="/starsCharts" element={<StarsChart />} />
      </Route>
    </Routes>
  );
}

export default App;
