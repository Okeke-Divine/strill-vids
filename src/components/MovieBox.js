export default function MovieBox(props) {
    const movie_thumbnail = props.movie_thumbnail
  return (
    <>
      <div>
        <div className="movie_box_1">
            <div className="left">
                <img src={movie_thumbnail} />
            </div>
            <div className="right">
                <div className="movie_name">Movie Name</div>
                <div className="movie_rating_complex">
                    <div>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </div>
                    <div>[4105 vote(s)]</div>
                </div>
                <div className="movie_brief_details">
                    <div className="bDetail_item">
                        <div className="detail_title">MPAA</div>
                        <div className="detail_content">TV-MA</div>
                    </div>
                    <div className="bDetail_item">
                        <div className="detail_title">Runtime</div>
                        <div className="detail_content">132 Min</div>
                    </div>
                    <div className="bDetail_item">
                        <div className="detail_title">Year</div>
                        <div className="detail_content">2019</div>
                    </div>
                    <div className="bDetail_item">
                        <div className="detail_title"><i className="fa fa-star star_rating_active"></i></div>
                        <div className="detail_content">3.2/5</div>
                    </div>
                </div>
                <div className="movie_genre sub_content_1"><b>Genre(s):</b> Action, Adventure, Science Fiction</div>
                <div className="movie_actor sub_content_1"><b>Actor(s):</b> Connor Slater, Sam Brown, Trevor Gill</div>
                <div className="movie_country sub_content_1"><b>Country(s):</b> Nigeria</div>
                <div className="movie_description sub_content_1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,....</div>
                <div className="button_zone">
                    <button className="button_more_details"><i className="fa fa-play-circle"></i> More Details</button>
                    <button className="button_add_to_favourite"><i className="fa fa-heart"></i>Add to favourite</button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
