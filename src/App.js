//base
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// stylesheets
import "./assets/css/main.css";

import Layout_1 from "./ui-layout/layout-1.js"

//config
import SiteData from "./data/site-data.json";

function App() {

  // store cookie to identify each user
  // dj99SMO_DISN8byuiJKKMDINinsdfksd_dfna8n23dnujddjniujdqwd8n3i_19js9jso

  const global_props = {
    SiteData: SiteData,
  };

  return (
    <>
    <Router>
      <Routes>
        <Route path="/*" element={<Layout_1 global_props={global_props} />} />
      </Routes>
    </Router>
    </>
  );

}

export default App;
