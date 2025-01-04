import { NavLink, Outlet } from "react-router-dom";
import css from "../AdditionalInfo/AdditionalInfo.module.css";
const AdditionalInfo = () => {
  return (
    <>
      <h3 className={css.titlethree}>Additional information</h3>
      <div className={css.infowraper}>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default AdditionalInfo;
