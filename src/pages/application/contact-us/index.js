import { useEffect } from "react";
// components
import AppSidebar from "../../../components/AppSidebar.js";
import AppMenuBar from "../../../components/AppMenuBar.js";
import AppFooter from "../../../components/AppFooter.js";
import AppRightSidebar from "../../../components/AppRightSidebar.js";
import GoToTop from "../../../components/GoToTop.js";
import MovieBoxArea from "../../../components/MovieBoxArea.js";


export default function Contact_Us(props) {
  const global_props = props.global_props;

  useEffect(function () {
    document.title =
      global_props["SiteData"].application_name + " | Contact Us";
  }, []);

  return (
    <>
      <GoToTop />
      <AppSidebar global_props={global_props} />
      <div className="application_backdrop_container">
        <div className="sidebar_shadow"></div>
        <div className="innerapp_container">
          {/* app menubar */}
          <AppMenuBar />

          <div className="application_body_flex_1">
            <div className="application_left">
              <div className="section_padding1">
                <div className="application_crumbs">Home / Contact Us</div>
                <div className="page_name">SEND US AN EMAIL</div>
                <div className="line_divider_2"></div>
                <form className="contact_us_form">
                    <div className="input_container">
                        <label>Your Name (required)</label>
                        <input type="text" placeholder="" name=""  id="" />
                    </div>
                    <div className="input_container">
                        <label>Your Email (required)</label>
                        <input type="text" placeholder="" name=""  id="" />
                    </div>
                    <div className="input_container">
                        <label>Your Message (required)</label>
                        <textarea></textarea>
                    </div>
                    <div className="submit_button_area">
                        <button>Submit</button>
                    </div>
                </form>
                <hr />
                <>
                {/* start movie box */}
              <MovieBoxArea />
              {/* end movie box */}</>
              </div>
            </div>

            {/* application right side backdrop */}
            <AppRightSidebar />
          </div>
        </div>
      </div>
      <div className="application_backdrop_container">
        <div className="sidebar_shadow"></div>
        <div className="innerapp_container">
          <AppFooter global_props={global_props} />
        </div>
      </div>
    </>
  );
}
