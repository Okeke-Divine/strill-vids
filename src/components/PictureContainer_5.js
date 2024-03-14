export default function PictureContainer_5(props) {
  const movie_thumbnail = props.movie_thumbnail;
  const movie_rating = props.movie_rating;
  const movie_name = props.movie_name;
  const numbering = props.numbering;
  return (
    <>
      <div>
        <div className="picture_container_5">
          <div className="movie_thumbnail">
            <img src={movie_thumbnail} />
          </div>
          <div className="movie_numbering_1">{numbering}</div>
          <div className="app_bullet_1">
            <div></div>
          </div>
          <div className="movie_rating">{movie_rating}</div>
          <div className="movie_name">{movie_name}</div>
        </div>
      </div>
    </>
  );
}
