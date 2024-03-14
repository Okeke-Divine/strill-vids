export default function AppFooter_movie_item1(props) {
  const link = props.link;
  const name = props.name;
  const type = props.type;
  const UrlRedirect = props.UrlRedirect;
  function urlShit() {
    if (type === "genre") {
      UrlRedirect("/genre/" + name);
    } else if (type === "country") {
      UrlRedirect("/country/" + name);
    }
  }
  return (
    <>
      <div onClick={urlShit} className="footer_movie_category_item">
        {name}
      </div>
    </>
  );
}
