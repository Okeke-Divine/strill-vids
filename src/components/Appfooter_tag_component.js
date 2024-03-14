import { BrowserRouter as Router, Link, Route } from "react-router-dom";

export default function Appfooter_tag_component(props) {
  const name = props.name;
  const url_name = encodeURIComponent(name.replace(/ /g, '-'))
  const link = props.link;
  return (
    <>
      {/* <Router> */}
        <div className="footer_movie_category_item1">
          <Link className="footer_movie_category_item1_link" to={"/keyword/" + url_name}>
            <div className="">{name}</div>
          </Link>
        </div>
      {/* </Router> */}
    </>
  );
}
