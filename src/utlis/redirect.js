import { useNavigate } from "react-router-dom";

function UrlRedirect(url) {
  const navigate = useNavigate();

  return navigate(`${url}`);
}

export default UrlRedirect;
