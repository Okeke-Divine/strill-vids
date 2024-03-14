import MovieBox from "./MovieBox.js";

// images
import v_img1 from "../assets/images/vertical/movie-poster-15.jpg";
import v_img2 from "../assets/images/vertical/movie-poster-3.jpg";
import v_img3 from "../assets/images/vertical/movie-poster-8.jpg";

export default function MovieBoxArea() {
  return (
    <>
      {/* start movie box */}
      <div className="movie_box section_1">
        <div className="section_title">Movie Box</div>
        <div className="movie_box_container">
          <MovieBox movie_thumbnail={v_img1} />
          <MovieBox movie_thumbnail={v_img2} />
          <MovieBox movie_thumbnail={v_img3} />
        </div>
      </div>
      {/* end movie box */}{" "}
    </>
  );
}
