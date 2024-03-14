export default function PictureContainer_1(props) {
  const { movie_name, movie_thumbnail, star_rating, movie_description } = props;
  return (
    <div className="picture_container_1">
      <img src={movie_thumbnail} alt={movie_name} />
      <div className="picture_text">
        <div className="picture_info">
          <div className="movie_title">{movie_name}</div>
          <div className="movie_rating">
            <i
              data-rating-count="1"
              className={
                star_rating > 0
                  ? "fa fa-star movie_rating_1 star_rating_active"
                  : "fa fa-star movie_rating_1 "
              }
            ></i>
            <i
              data-rating-count="2"
              className={
                star_rating > 1
                  ? "fa fa-star movie_rating_1 star_rating_active"
                  : "fa fa-star movie_rating_1 "
              }
            ></i>
            <i
              data-rating-count="3"
              className={
                star_rating > 2
                  ? "fa fa-star movie_rating_1 star_rating_active"
                  : "fa fa-star movie_rating_1 "
              }
            ></i>
            <i
              data-rating-count="4"
              className={
                star_rating > 3
                  ? "fa fa-star movie_rating_1 star_rating_active"
                  : "fa fa-star movie_rating_1 "
              }
            ></i>
            <i
              data-rating-count="5"
              className={
                star_rating > 4
                  ? "fa fa-star movie_rating_1 star_rating_active"
                  : "fa fa-star movie_rating_1 "
              }
            ></i>
          </div>
          <div className="movie_description">{movie_description}</div>
        </div>
      </div>
    </div>
  );
}
