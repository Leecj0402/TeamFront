/** @format */

import './styles.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Post from './components/Post/Post';
import Sidebar from './components/Sidebar/Sidebar'; // 사이드바 컴포넌트 추가
import { Typography } from '@material-ui/core';
import Upload from './components/Upload/Upload';
import Modal from './components/Modal/Modal';
import Users from './components/Users/Users';
import * as Auth from './Firebase/authContext';

// 페이지 컴포넌트 임포트
import Home from './pages/Home';
import Search from './pages/Search';
import Metaverse from './pages/Metaverse'; // Explore를 Metaverse로 변경
import Messages from './pages/Messages';
import Profile from './pages/Profile';

export default function App() {
  const { username, posts, user } = Auth.useAuth();

  return (
    <Router>
      <div className="App">
        <Sidebar />

        <div className="app_content">
          <div className="app_header">
            <img
              className="app_headerImage"
              src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-app-ebf8a.appspot.com/o/logo%2Finstalogo.png?alt=media&token=7f38c3b4-6a80-4088-8c27-87779ddd2bbb"
              alt="instagram logo"
            />

            <div className="app_username">
              Hello 👋 {user ? username : 'Guest'}
            </div>

            <div className="app_login">
              <Modal />
            </div>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/metaverse" element={<Metaverse />} /> {/* Metaverse 경로 추가 */}
            <Route path="/messages" element={<Messages />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

          <div className="app_body">
            <Users />
            {username && <Upload />}

            {posts &&
              posts.map((each) => (
                <Post
                  key={each.id}
                  id={each.id}
                  imgUrl={each.post.imageUrl}
                  username={each.post.username}
                  caption={each.post.caption}
                />
              ))}
          </div>
        </div>
      </div>
    </Router>
  );
}
