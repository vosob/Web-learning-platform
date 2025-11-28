import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";

export const StartComponent = () => {
  return (
    <section className="container">
      <h2 className="font-bold text-center text-4xl mb-6">
        Ready to Start Your <span className="text-green-accent">Journey?</span>
      </h2>
      <h3 className="text-center mb-7">
        Join thousands of developers who have transformed their careers with our
        courses.
      </h3>
      <div className=" flex justify-center gap-4">
        <Link to="./auth">
          <Button variant={"green"} className="py-4 px-8 ">
            Get started
          </Button>
        </Link>

        <Link to="./courses">
          <Button variant={"ghost"} className="py-4 px-8">
            Browse Courses
          </Button>
        </Link>
      </div>
    </section>
  );
};
