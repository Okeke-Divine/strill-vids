import { useEffect } from "react";

//components
import PictureContainer_2 from "../../../components/PictureContainer_2.js";
import PictureContainer_5 from "../../../components/PictureContainer_5.js";
import MovieBoxArea from "../../../components/MovieBoxArea.js";

// horizontal images
import img1 from "../../../assets/images/horizontal/movie-backdrop-1.jpg";
import img2 from "../../../assets/images/horizontal/movie-backdrop-2.jpg";
import img3 from "../../../assets/images/horizontal/movie-backdrop-4.jpg";
import img4 from "../../../assets/images/horizontal/movie-backdrop-8.jpg";
import img5 from "../../../assets/images/horizontal/movie-backdrop-9.jpg";

// vertical images
import v_img1 from "../../../assets/images/vertical/movie-poster-15.jpg";
import v_img2 from "../../../assets/images/vertical/movie-poster-3.jpg";
import v_img3 from "../../../assets/images/vertical/movie-poster-8.jpg";
import v_img4 from "../../../assets/images/vertical/movie-poster-9.jpg";
import v_img5 from "../../../assets/images/vertical/movie-poster-8.jpg";
import v_img6 from "../../../assets/images/vertical/movie-poster-16.jpg";
import v_img7 from "../../../assets/images/vertical/movie-poster-21.jpg";
import v_img8 from "../../../assets/images/vertical/movie-poster-3.jpg";
import v_img9 from "../../../assets/images/vertical/movie-poster-12.jpg";
import v_img10 from "../../../assets/images/vertical/movie-poster-40.jpg";
export default function Main_Home(props) {
  const global_props = props.global_props;
  useEffect(function () {
    document.title = global_props["SiteData"].application_name + " | Homepage ";
  }, []);

  return (
    <>
      {/* start latest movies */}
      <div className="section_1 section_side-pad latest_movies">
        <div className="section_title">Latest Movies</div>
        <div className="section_body">
          <div className="movielist_1">
            <PictureContainer_2
              movie_thumbnail={v_img1}
              movie_name="Movie 1"
              movie_category="CAT-E"
            />
            <PictureContainer_2
              movie_thumbnail={v_img2}
              movie_name="Movie 2"
              movie_category="EP"
            />
            <PictureContainer_2
              movie_thumbnail={v_img3}
              movie_name="Movie 3"
              movie_category="COMEDY"
            />
            <PictureContainer_2
              movie_thumbnail={v_img4}
              movie_name="Movie 4"
              movie_category="CAT-E"
            />
            <PictureContainer_2
              movie_thumbnail={v_img5}
              movie_name="Movie 5"
              movie_category="S"
            />
            <PictureContainer_2
              movie_thumbnail={v_img9}
              movie_name="Movie 9"
              movie_category="SHORTS"
            />
            <PictureContainer_2
              movie_thumbnail={v_img6}
              movie_name="Movie 6"
              movie_category="CAT-E"
            />
            <PictureContainer_2
              movie_thumbnail={v_img7}
              movie_name="Movie 7"
              movie_category="CAT-E"
            />
            <PictureContainer_2
              movie_thumbnail={v_img8}
              movie_name="Movie 8"
              movie_category="COMDEY"
            />
            <PictureContainer_2
              movie_thumbnail={v_img10}
              movie_name="Movie 10"
              movie_category="TV-SHOWS"
            />
            {/* divider */}
            <PictureContainer_2
              movie_thumbnail={v_img1}
              movie_name="Movie 1"
              movie_category="CAT-E"
            />
            <PictureContainer_2
              movie_thumbnail={v_img2}
              movie_name="Movie 2"
              movie_category="EP"
            />
          </div>
        </div>
      </div>
      {/* end lastest movies */}

      {/* start latest tv shows */}
      <div className="section_1 section_side-pad latest_movies">
        <div className="section_title">Latest TV Shows</div>
        <div className="section_body">
          <div className="movielist_1">
            <PictureContainer_2
              movie_thumbnail={v_img1}
              movie_name="Movie 1"
              movie_category="CAT-E"
            />
            <PictureContainer_2
              movie_thumbnail={v_img2}
              movie_name="Movie 2"
              movie_category="EP"
            />
            <PictureContainer_2
              movie_thumbnail={v_img3}
              movie_name="Movie 3"
              movie_category="COMEDY"
            />
            <PictureContainer_2
              movie_thumbnail={v_img4}
              movie_name="Movie 4"
              movie_category="CAT-E"
            />
            <PictureContainer_2
              movie_thumbnail={v_img5}
              movie_name="Movie 5"
              movie_category="S"
            />
            <PictureContainer_2
              movie_thumbnail={v_img9}
              movie_name="Movie 9"
              movie_category="SHORTS"
            />
            <PictureContainer_2
              movie_thumbnail={v_img6}
              movie_name="Movie 6"
              movie_category="CAT-E"
            />
            <PictureContainer_2
              movie_thumbnail={v_img7}
              movie_name="Movie 7"
              movie_category="CAT-E"
            />
            <PictureContainer_2
              movie_thumbnail={v_img8}
              movie_name="Movie 8"
              movie_category="COMDEY"
            />
            <PictureContainer_2
              movie_thumbnail={v_img10}
              movie_name="Movie 10"
              movie_category="TV-SHOWS"
            />
            {/* divider */}
            <PictureContainer_2
              movie_thumbnail={v_img1}
              movie_name="Movie 1"
              movie_category="CAT-E"
            />
            <PictureContainer_2
              movie_thumbnail={v_img2}
              movie_name="Movie 2"
              movie_category="EP"
            />
          </div>
        </div>
      </div>
      {/* end latest tv shows */}

      {/* start top movies and tv show flex box */}
      <div className="top_movies_tv_show_flex_box">
        <div className="top_movies_1 section_1">
          <div className="section_title">Top Movies</div>
          <div className="top_movie_container">
            <PictureContainer_5
              movie_thumbnail={img1}
              movie_rating="5.3"
              movie_name="Movie 1 - Akila and the bee"
              numbering="1"
            />
            <PictureContainer_5
              movie_thumbnail={img2}
              movie_rating="9.2"
              movie_name="Far from home (S03E09) - Sensational"
              numbering="2"
            />
            <PictureContainer_5
              movie_thumbnail={img3}
              movie_rating="7.1"
              movie_name="Movie 3"
              numbering="3"
            />
            <PictureContainer_5
              movie_thumbnail={img4}
              movie_rating="6.6"
              movie_name="Movie 4"
              numbering="4"
            />
            <PictureContainer_5
              movie_thumbnail={img5}
              movie_rating="8.6"
              movie_name="Movie 5"
              numbering="5"
            />
            <PictureContainer_5
              movie_thumbnail={v_img10}
              movie_rating="8.6"
              movie_name="Movie 6"
              numbering="6"
            />
          </div>
        </div>
        <div className="top_tv_shows_1 section_1">
          <div className="section_title">Top TV Shows</div>
          <div className="top_tv_show_container">
            <PictureContainer_5
              movie_thumbnail={v_img2}
              movie_rating="10.6"
              movie_name="Tv Show 1"
              numbering="1"
            />
            <PictureContainer_5
              movie_thumbnail={v_img4}
              movie_rating="8.6"
              movie_name="Tv Show 2"
              numbering="2"
            />
            <PictureContainer_5
              movie_thumbnail={v_img6}
              movie_rating="8.6"
              movie_name="Tv Show 3"
              numbering="3"
            />
            <PictureContainer_5
              movie_thumbnail={v_img8}
              movie_rating="2.6"
              movie_name="Tv Show 4"
              numbering="4"
            />
            <PictureContainer_5
              movie_thumbnail={v_img7}
              movie_rating="8.6"
              movie_name="Tv Show 5"
              numbering="5"
            />
            <PictureContainer_5
              movie_thumbnail={v_img5}
              movie_rating="9.6"
              movie_name="Tv Show 6"
              numbering="6"
            />
          </div>
        </div>
      </div>
      {/* end top movies and tv show flex box */}

      {/* start movie box */}
      <MovieBoxArea />
      {/* end movie box */}
    </>
  );
}
