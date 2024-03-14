import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// components
import PictureContainer_1 from "../components/PictureContainer_1.js";
import AppSidebar from "../components/AppSidebar.js";
import AppMenuBar from "../components/AppMenuBar.js";
import AppFooter from "../components/AppFooter.js";
import AppRightSidebar from "../components/AppRightSidebar.js";
import GoToTop from "../components/GoToTop.js";
import PlaceholderLoader1 from "../components/PlaceholderLoader1.js";

// sub pages
import Main_Home from "../pages/application/home/main-home.js";
import Main_Contact_Us from "../pages/application/contact-us/main-contact-us.js";
import SearchPage from "../pages/application/search/main-search.js";
import Page_404 from "../pages/errorPages/404/index.js";

//utils
import ApiEndpoint1 from "../utlis/axiosConfig.js";

export default function Layout_1(props) {
  const global_props = props.global_props;
  const [slideShowMovieInfo, setSlideShowMovieInfo] = useState([]);
  const [movieSlideShowConfigure, setMovieSlideShowConfigure] = useState(null);

  useEffect(() => {
    async function fetchMovieSlideShowDetails() {
      try {
        const response = await ApiEndpoint1.get(
          "/api/v1/movie/?random=true&total=10"
        );
        setSlideShowMovieInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovieSlideShowDetails();
  }, []);

  useEffect(() => {
    if (slideShowMovieInfo.length === 0) {
      setMovieSlideShowConfigure(movieSlideShowLoading);
    } else {
      setMovieSlideShowConfigure(movieSlideShow);
    }
  }, [slideShowMovieInfo]);

  const movieSlideShowLoading = (
    <>
      <div className="section_1 section_side-pad">
        <div className="placeholderLoaderFlexCont">
          <PlaceholderLoader1 />
          <PlaceholderLoader1 />
          <PlaceholderLoader1 />
          <PlaceholderLoader1 />
          <PlaceholderLoader1 />
          <PlaceholderLoader1 />
        </div>
      </div>
    </>
  );

  const movieSlideShow = (
    <div className="pictureSlideShow">
      {slideShowMovieInfo.map((movie) => (
        <PictureContainer_1
          movie_name={movie.name}
          movie_thumbnail={movie.thumbnail_horizontal}
          star_rating={movie.average_rating}
          movie_description={movie.description}
          key={movie.movie_id}
        />
      ))}
    </div>
  );

  return (
    <>
      <GoToTop />
      <AppSidebar global_props={global_props} />

      <div className="application_backdrop_container">
        <div className="sidebar_shadow"></div>
        <div className="innerapp_container">
          {/* app menubar */}
          <AppMenuBar />
          {/* picture slide Shows */}
          <Routes>
            <Route path="/" element={movieSlideShowConfigure} />
          </Routes>

          <div className="application_body_flex_1">
            <div className="application_left">
              <Routes>
                <Route
                  path="/"
                  element={<Main_Home global_props={global_props} />}
                />
                <Route
                  path="/contact-us"
                  element={<Main_Contact_Us global_props={global_props} />}
                />
                <Route
                  path="/search"
                  element={<SearchPage global_props={global_props} />}
                />
                <Route
                  path="/*"
                  element={<Page_404 global_props={global_props} />}
                />
              </Routes>
            </div>

            {/* application right side backdrop */}
            <AppRightSidebar global_props={global_props} />
          </div>
        </div>
      </div>
      <div className="application_backdrop_container">
        <div className="sidebar_shadow"></div>
        <div className="innerapp_container">
          <AppFooter global_props={global_props} />
        </div>
      </div>
    </>
  );
}
