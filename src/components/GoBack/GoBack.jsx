import { Link, useLocation } from "react-router-dom";
import { useRef } from "react";

const GoBack = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");

  return <Link to={backLinkRef.current}>Go back</Link>;
};

export default GoBack;
