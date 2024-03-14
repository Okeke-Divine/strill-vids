import { useEffect } from "react";

// components
import AppSidebar from "../../../components/AppSidebar.js";
import AppMenuBar from "../../../components/AppMenuBar.js";
import AppFooter from "../../../components/AppFooter.js";
import AppRightSidebar from "../../../components/AppRightSidebar.js";
import GoToTop from "../../../components/GoToTop.js";

export default function Skeleton(props) {
  const global_props = props.global_props;

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
            <div className="application_left"></div>

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
