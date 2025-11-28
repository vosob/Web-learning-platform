import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { NavBar } from "./NavBar/NavBar";

export const Header = () => {
  return (
    <div className="container mx-auto mb-17.5 pt-5">
      <div className="flex">
        <Link to="/">
          <div className="h-10 w-10 bg-white"></div>
        </Link>

        <div className="ml-auto flex gap-6">
          <NavBar />
          <Link to="/courses">
            <Button variant={"ghost"}>Courses</Button>
          </Link>
          <Link to="/articles">
            <Button variant={"ghost"}>Articles</Button>
          </Link>
          <Link to="/auth">
            <Button variant={"green"}>Sign in</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
