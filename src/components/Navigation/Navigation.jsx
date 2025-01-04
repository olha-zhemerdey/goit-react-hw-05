import css from "./Navigation.module.css";
import { NavLink, Outlet } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <header className={css.header}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
