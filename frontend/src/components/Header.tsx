import { Button } from "./ui/button";

export const Header = () => {
  return (
    <div className="container mx-auto pt-5">
      <div className="flex">
        <div className="h-10 w-10 bg-white"></div>

        <div className="ml-auto flex gap-6">
          <Button variant={"ghost"}>Courses</Button>

          <Button variant={"ghost"}>Articles</Button>

          <Button variant={"green"}>Sign in</Button>
        </div>
      </div>
    </div>
  );
};
