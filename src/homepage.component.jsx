import React from "react";
import "./homepage.styles.scss";
const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">HATS</div>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
      </div>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">SNEAKERS</div>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
      </div>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">JACKETS</div>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
      </div>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">MEN</div>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
      </div>
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <div className="title">WOMEN</div>
            <span className="subtitle">Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
