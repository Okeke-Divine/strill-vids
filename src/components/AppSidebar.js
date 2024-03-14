// images
import menuBar_image from "../assets/images/custom/menu-bg.png";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function AppSidebar(props) {
  const global_props = props.global_props;
  const [sidebar_bar_expand_btn_icon, SETsidebar_bar_expand_btn_icon] =
    useState(<i className="fa fa-bars"></i>);

  const __Execute_OnLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (window.innerWidth <= 768) {
      expandSidebar("collaspe");
    }
  };

  const expandSidebar = (fun) => {
    var app_sideBar = document.getElementById("app_sideBar");
    var sidebar_bar_expand_btn = document.getElementById(
      "sidebar_bar_expand_btn"
    );
    if (app_sideBar.style.left === "0px" || fun === "collaspe") {
      app_sideBar.style.left = "-100px";
      sidebar_bar_expand_btn.style.left = "20px";
      SETsidebar_bar_expand_btn_icon(<i className="fa fa-bars"></i>);
    } else {
      app_sideBar.style.left = "0";
      sidebar_bar_expand_btn.style.left = "120px";
      SETsidebar_bar_expand_btn_icon(<i className="fa fa-times"></i>);
      // sidebar_bar_expand_btn.innerHTML = '&times;';
    }
  };

  return (
    <>
      <div
        className="app_sideBar"
        id="app_sideBar"
        style={{ background: menuBar_image }}
      >
        <div className="siteName_Logo flex_center">
          {global_props["SiteData"].application_name}
        </div>
        <div className="navBtn_Container">
          {/* <Router> */}
          <Link onClick={__Execute_OnLinkClick} to="/" className="sidebar_Link">
            <div className="nav_item flex_center active">
              <div>
                <div className="flex_center">
                  <i className="fa fa-home"></i>
                </div>
                <div>Home</div>
              </div>
            </div>
          </Link>

          <Link
            onClick={__Execute_OnLinkClick}
            to="/search"
            className="sidebar_Link"
          >
            <div className="nav_item flex_center">
              <div>
                <div className="flex_center">
                  <i className="fa fa-search"></i>
                </div>
                <div>Search</div>
              </div>
            </div>
          </Link>

          <Link
            onClick={__Execute_OnLinkClick}
            to="/movies"
            className="sidebar_Link"
          >
            <div className="nav_item flex_center">
              <div>
                <div className="flex_center">
                  <i className="fa fa-film"></i>
                </div>
                <div>Movies</div>
              </div>
            </div>
          </Link>

          <Link
            onClick={__Execute_OnLinkClick}
            to="/tv-shows"
            className="sidebar_Link"
          >
            <div className="nav_item flex_center">
              <div>
                <div className="flex_center">
                  <i className="fa fa-folder"></i>
                </div>
                <div>TV Shows</div>
              </div>
            </div>
          </Link>

          <Link
            onClick={__Execute_OnLinkClick}
            to="/explore?sort-by=a-z"
            className="sidebar_Link"
          >
            <div className="nav_item flex_center">
              <div>
                <div className="flex_center">
                  <i className="fa fa-sort"></i>
                </div>
                <div>A-Z List</div>
              </div>
            </div>
          </Link>

          <Link
            onClick={__Execute_OnLinkClick}
            to="/my-box"
            className="sidebar_Link"
          >
            <div className="nav_item flex_center">
              <div>
                <div className="flex_center">
                  <i className="fa fa-heart"></i>
                </div>
                <div>My Box</div>
              </div>
            </div>
          </Link>

          <Link
            onClick={__Execute_OnLinkClick}
            to="/contact-us"
            className="sidebar_Link"
          >
            <div className="nav_item flex_center">
              <div>
                <div className="flex_center">
                  <i className="fa fa-envelope"></i>
                </div>
                <div>Contact</div>
              </div>
            </div>
          </Link>

          <div className="nav_item flex_center">
            <div>
              <div className="flex_center">
                <i className="fa fa-user"></i>
              </div>
              <div>More</div>
            </div>
          </div>

          {/* <div className="nav_item flex_center">
            <div>
              <div className="flex_center">
                <i className="fa fa-user"></i>
              </div>
              <div>Profile</div>
            </div>
          </div> */}
          {/* </Router> */}
        </div>
      </div>

      <button
        onClick={expandSidebar}
        className="sidebar_bar_expand_btn"
        id="sidebar_bar_expand_btn"
      >
        {sidebar_bar_expand_btn_icon}
      </button>
    </>
  );
}
// rgb(233, 30, 99);
