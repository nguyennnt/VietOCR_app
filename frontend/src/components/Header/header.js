import React from "react";
import Navbar from "./Navbar/Navbar.js";
// import video from "../../video/writing.mp4";
// import img_slide from "../../img/slide.jpg";

const Header = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      <header id="home">
        <Navbar />
        <div className="banner">
          <div className="container">
            {/* <img src={img_slide} alt="test" class="video-container"></img> */}
            <h1>
              VietOCR: Vietnamese Handwriting Recognition with Pre-trained
              Models
            </h1>
            <h2>19521917: Nguyễn Ngọc Thái Nguyên</h2>
            <h2>19521913: Nguyễn Đức Phương Nguyên</h2>
            <h3>GVHD: Nguyễn Vinh Tiệp</h3>
            <a href="#howitworks" className="scroll-link btn btn-white">
              more
            </a>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
