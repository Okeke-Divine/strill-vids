export default function GoToTop() {

  const scrollToTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div>
        <button onClick={scrollToTop} className="app_go-to-top flex_center">
          <i className="fa fa-angle-up"></i>
        </button>
      </div>
    </>
  );
}
