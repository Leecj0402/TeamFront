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
import Home from './Home.js';
import Search from './Search.js';
import Metaverse from './Metaverse.js';
import Profile from './Profile.js';
import Message from './components/Messages.js';


export default function App() {
  const { username, posts, user } = Auth.useAuth();

  return (
    <Router>
      <div className="App">
        {/* 왼쪽 사이드바 */}
        <Sidebar />

        {/* 오른쪽 본문 영역 */}
        <div className="app_content">
          {/* 헤더 영역 */}
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

          {/* 라우트 정의 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/metaverse" element={<Metaverse />} />
            <Route path="/messages" element={<Message />} /> {/* Messages 경로 추가 */}
            <Route path="/upload" element={<Upload />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>

          {/* 기본 피드와 사용자 업로드 */}
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
