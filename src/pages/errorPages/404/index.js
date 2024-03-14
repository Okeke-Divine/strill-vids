import { useEffect } from "react";

export default function Page_404(props) {
  const global_props = props.global_props;

  useEffect(function () {
    document.title =
      global_props["SiteData"].application_name + " | 404 Not Found!";
  }, []);

  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <div className="page_404_cont">
        <div className="card-lme">
          <div>
            <span>404 not found!</span>
          </div>
          <button onClick={goBack}><i className="fa fa-angle-double-left"></i> Back</button>
        </div>
      </div>
    </>
  );
}
