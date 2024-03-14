import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AppMenuBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleMenubarSearchRedirect = (e) => {
    e.preventDefault();
    if (query.trim().length > 0) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <>
      <div className="app_menuBar">
        <div className="search_bar">
          <form onSubmit={handleMenubarSearchRedirect}>
            <input
              type="search"
              placeholder="Quick Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            ></input>
            <button className="searchFormSubmitBtn" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="nav_action_buttons">
          <div>
            {/* -------- */}
            <div className="dropdown_1">
              <button className="">
                <i className="fa fa-user"></i>
              </button>
              <div className="dropdown_1-content dropdown1_to_left">
                <div className="menubar_account_coming_soon_dropdown shadow-lg">
                  <div>
                    <i className="fa fa-spin fa-spinner"></i> Coming soon...
                  </div>
                </div>
              </div>
            </div>
            {/* -------- */}
          </div>
        </div>
      </div>
    </>
  );
}
