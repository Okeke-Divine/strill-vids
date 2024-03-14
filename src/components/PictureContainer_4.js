export default function PictureContainer_2(props) {
  const movie_thumbnail = props.movie_thumbnail
  const movie_category = props.movie_category
  const movie_name = props.movie_name
return (
  <>
    <div className="picture_container_2 picture_container_4-2_extended">
      <div className="inner1">
          <img src={movie_thumbnail} />
          <div className="text">{movie_category}</div>
      </div>
      <div className="movie_name">{movie_name}</div>
    </div>
  </>
);
}
