// components
import PictureContainer_4 from "./PictureContainer_4.js";
import PictureContainer_3 from "./PictureContainer_3.js";
import Genre_sideBar from "./Genre_sideBar.js";
import ReleaseYearButton from "./ReleaseYearButton.js";

// external function
import OpenExternalLinks from "../functions/open-external-link.js"

// images
import v_img1 from "../assets/images/vertical/movie-poster-15.jpg";
import v_img2 from "../assets/images/vertical/movie-poster-3.jpg";

export default function AppRightSidebar(props) {
  const global_props = props.global_props
  const application_socials = global_props['SiteData']['socials']

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1999 }, (_, index) => currentYear - index);


  const __Release_years = years.map((year, index) => (
    <ReleaseYearButton key={index} release_year={year} />
  ));

  return (
    <div className="application_right ">
      <div className="right_container">
        {/* start social media section */}
        <div className="title_style_1">FOLLOW US</div>
        <div className="line_divider_1"></div>
        <div className="social_buttons social_buttons_right">
          <div onClick={() => OpenExternalLinks(application_socials.facebook)} className="social-network-button-1 flex_center bg-facebook">
            <i className="fa fa-facebook"></i>
          </div>

          <div onClick={() => OpenExternalLinks(application_socials.whatsapp)} className="social-network-button-1 flex_center bg-whatsapp">
            <i className="fa fa-whatsapp"></i>
          </div>

          <div onClick={() => OpenExternalLinks(application_socials.instagram)} className="social-network-button-1 flex_center bg-instagram">
            <i className="fa fa-instagram"></i>
          </div>

          <div onClick={() => OpenExternalLinks(application_socials.twitter)} className="social-network-button-1 flex_center bg-twitter">
            <i className="fa fa-twitter"></i>
          </div>

          <div onClick={() => OpenExternalLinks(application_socials.youtube)} className="social-network-button-1 flex_center bg-youtube">
            <i className="fa fa-youtube"></i>
          </div>

          <div onClick={() => OpenExternalLinks(application_socials['rss-feed'])} className="social-network-button-1 flex_center bg-rss">
            <i className="fa fa-rss"></i>
          </div>
        </div>
        {/* end social media section */}

        {/* start top rated section */}
        <div className="title_style_1">TOP RATED</div>
        <div className="line_divider_1"></div>
        <div className="top_rated_movies_container">
          <PictureContainer_3
            movie_name="Sidebar Movie 1"
            movie_thumbnail={v_img1}
            movie_year="2019"
            movie_rating="8.2"
          />
          <PictureContainer_3
            movie_name="Sidebar Movie 2"
            movie_thumbnail={v_img2}
            movie_year="1922"
            movie_rating="9.6"
          />
        </div>
        {/* end top rated section */}

        {/* start genres sections */}
        <div className="title_style_1">GENRES</div>
        <div className="line_divider_1"></div>
        <div className="genres_container">
          <Genre_sideBar genre_name="Action" genre_movie_count="10k" />
          <Genre_sideBar genre_name="Drama" genre_movie_count="786" />
          <Genre_sideBar genre_name="Love" genre_movie_count="2.5k" />
          <Genre_sideBar genre_name="Adventure" genre_movie_count="10k" />
          <Genre_sideBar genre_name="Sci-fi" genre_movie_count="10k" />
          <Genre_sideBar genre_name="Science" genre_movie_count="10k" />
          <Genre_sideBar genre_name="History" genre_movie_count="500" />
          <Genre_sideBar genre_name="Documentation" genre_movie_count="235" />
          <Genre_sideBar genre_name="Comedy" genre_movie_count="2k" />
          <Genre_sideBar genre_name="Music Video" genre_movie_count="100k" />
        </div>
        {/* end genres sections */}

        {/* start latest movie section */}
        <div className="title_style_1">LATEST</div>
        <div className="line_divider_1"></div>
        <div className="latest_movies_container-sidebar">
          <PictureContainer_4
            movie_thumbnail={v_img1}
            movie_name="Mark Angel Comedy"
            movie_category="COMEDY"
          />

          <PictureContainer_4
            movie_thumbnail={v_img1}
            movie_name="Movie 1"
            movie_category="CAT-E"
          />

          <PictureContainer_4
            movie_thumbnail={v_img1}
            movie_name="Movie 1"
            movie_category="CAT-E"
          />

          <PictureContainer_4
            movie_thumbnail={v_img1}
            movie_name="Movie 1"
            movie_category="CAT-E"
          />

          <PictureContainer_4
            movie_thumbnail={v_img1}
            movie_name="Movie 1"
            movie_category="CAT-E"
          />

          <PictureContainer_4
            movie_thumbnail={v_img1}
            movie_name="Movie 1"
            movie_category="CAT-E"
          />
        </div>
        {/* end latest movie section */}

        {/* start realease year */}
        <div className="title_style_1">RELEASE YEAR</div>
        <div className="line_divider_1"></div>
        <div className="release_year_container">{__Release_years}</div>
        {/* end realease year */}
      </div>
    </div>
  );
}
