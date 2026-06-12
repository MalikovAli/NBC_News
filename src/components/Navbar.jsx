import React from "react";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isDetailPage = location.pathname === '/detail';
  return (
    <section>
      <div className="navbar-box" style={isDetailPage ? { marginBottom: '0px' } : {}}>
        <div className="navbar-icon-box">
          <img className="navbar-image" src="src/image/nbc-news.png" alt="" />
        </div>
        <ul className="navbar-ul">
          <li>
            <span className="circle"></span>Corona Updates
          </li>
          <li>Politics</li>
          <li>Business</li>
          <li>Sports</li>
          <li>World</li>
          <li>Travel</li>
          <li>Podcasts</li>
        </ul>
        <div className="right-arrow-box">
          <img src="src/image/right-arrow.svg" alt="" />
        </div>
        <div className="navbar-icons">
          <div className="profil-box">
            <img className="profil-image" src="src/image/profil.svg" alt="" />
          </div>
          <div className="search-box">
            <img className="search-image" src="src/image/search.svg" alt="" />
          </div>
          <div className="burger-menu-box">
            <img
              className="burger-menu-image"
              src="src/image/burger-menu.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
