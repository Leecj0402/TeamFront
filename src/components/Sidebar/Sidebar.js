/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Explore, Message, AddCircle, AccountCircle } from '@material-ui/icons';
import './Sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
        alt="Instagram Logo" 
        className="sidebar_logo"
      />
      <Link to="/" className="sidebar_option">
        <Home />
        <span>홈</span>
      </Link>
      <Link to="/search" className="sidebar_option">
        <Search />
        <span>검색</span>
      </Link>
      <Link to="/metaverse" className="sidebar_option">
        <Explore />
        <span>메타버스</span>
      </Link>
      <Link to="/messages" className="sidebar_option">
        <Message />
        <span>메시지</span>
      </Link>
      <Link to="/upload" className="sidebar_option">
        <AddCircle />
        <span>게시</span>
      </Link>
      <Link to="/profile" className="sidebar_option">
        <AccountCircle />
        <span>프로필</span>
      </Link>
    </div>
  );
}
