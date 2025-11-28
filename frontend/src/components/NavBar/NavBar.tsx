import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Link to="/"></Link>
      <Link to="/courses"> </Link>
      <Link to="/articles"></Link>
      <Link to="/auth"></Link>
    </div>
  );
};
