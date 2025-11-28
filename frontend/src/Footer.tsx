import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section className="bg-gray-900">
      <div className="container  flex justify-around gap-8 pt-12 pb-12">
        <div className="flex flex-col items-start gap-y-2">
          <h3 className="mb-4">Courses</h3>
          <Link to="/">
            <button className="hover:text-green-accent text-sm cursor-pointer">
              Ultimate React
            </button>
          </Link>

          <Link to="/">
            <button className="hover:text-green-accent text-sm cursor-pointer">
              Next level NextJS
            </button>
          </Link>
          <Link to="/">
            <button className="hover:text-green-accent text-sm cursor-pointer">
              Tailwind Crash Course
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-start gap-y-2">
          <h3 className="mb-4">Resourses</h3>
          <Link to="/articles">
            <button className="hover:text-green-accent text-sm cursor-pointer">
              Articles
            </button>
          </Link>
          <Link to="/">
            <button className="hover:text-green-accent text-sm cursor-pointer">
              Labs
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-start gap-y-2">
          <h3 className="mb-4">Follow me</h3>
          <Link to="/">
            <button className="hover:text-green-accent text-sm cursor-pointer">
              YouTube
            </button>
          </Link>

          <Link to="/">
            <button className="hover:text-green-accent text-sm cursor-pointer">
              GitHub
            </button>
          </Link>
        </div>

        <div className="flex flex-col items-start gap-y-2">
          <h3 className="mb-4">Legal</h3>
          <Link to="/">
            <button className="hover:text-green-accent text-sm cursor-pointer">
              Teams Service
            </button>
          </Link>

          <Link to="/">
            <button className="hover:text-green-accent text-sm cursor-pointer">
              Privacy Policy
            </button>
          </Link>
        </div>
      </div>
      <div className="h-px bg-gray-600 w-[1090px] mx-auto"></div>
      <p className="pt-6 text-sm pl-[400px] pb-10 text-[#8a8da7]">
        © 2025 WebDevUltra. All rights reserved.
      </p>
    </section>
  );
};
