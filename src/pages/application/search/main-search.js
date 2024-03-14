import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SearchForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q");
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(q);
  useEffect(() => {
    setInputValue(q)
  },[q])

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 0){
      navigate(`/search?q=${inputValue}`);
    }
  }

  return (
    <form  onSubmit={handleFormSubmit}>
      <div className="_page_searchForm_cont">
        <input
          className=""
          placeholder="Search..."
          value={inputValue}
          onChange={handleInputChange}
        />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
    </form>
  );
};

export default function SearchPage(props) {
  const global_props = props.global_props;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const q = queryParams.get("q");

  const customQ = (q === null) ? '' : q

  useEffect(function () {
    document.title = global_props["SiteData"].application_name + " | Search ";
  }, []);
  return (
    <>
      <div className="section_padding1">
        <div className="application_crumbs">Home / Search </div>

        <SearchForm />

        <div className="sortNdFilterZone"></div>

        <div className="searchResultContent"></div>
      </div>
    </>
  );
}
