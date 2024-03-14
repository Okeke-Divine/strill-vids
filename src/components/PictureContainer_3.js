export default function PictureContainer_3(props) {
  const movie_name = props.movie_name
  const movie_thumbnail = props.movie_thumbnail
  const movie_year = props.movie_year
  const movie_rating = props.movie_rating
  return (
    <>
      <div className="picture_container_3">
        <div>
            <img src={movie_thumbnail} />
            <div className="movie-year">{movie_year}</div>
            <div className="movie-rating"><i className="fa fa-star star_rating_active"></i> {movie_rating}</div>
            <div className="movie-name">{movie_name}</div>
        </div>
      </div>
    </>
  );
}
