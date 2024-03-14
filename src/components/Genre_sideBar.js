export default function Genre_sideBar(props) {
    const genre_name = props.genre_name
    const genre_movie_count = props.genre_movie_count
  return (
    <>
      <div className="genre_item">
        <div className="flex_center">
          <div className="tiny_box"></div>
          <div className="genre_name">{genre_name}</div>
        </div>
        <div className="movie_count">{genre_movie_count}</div>
      </div>
    </>
  );
}
