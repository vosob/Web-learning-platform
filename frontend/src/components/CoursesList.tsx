import { courses } from "@/source/CoursesList";
import { Button } from "./ui/button";

export const CoursesList = () => {
  return (
    <section className="container text-center  text-4xl font-medium py-20">
      <h2 className="mb-10">
        Available
        <span className="text-green-accent "> Courses</span>
      </h2>
      <ul className="flex justify-between  mb-16 ">
        {courses.map((course) => (
          <li
            className="border max-w-[400px] border-gray-700 rounded-xl hover:border-green-accent transition-all duration-300 "
            key={course.id}
          >
            <img
              className="h-[230px] rounded-t-xl"
              src={course.img}
              alt={course.title}
            />
            <div className="flex flex-col p-6">
              <h3 className="text-[20px] font-bold text-left pb-2">
                {course.title}
              </h3>
              <p className="text-[16px] font-normal text-left  pb-4">
                {course.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[16px] font-normal py-0.5 px-3 rounded-xl bg-neutral-700">
                  {course.timeItem}
                </span>
                <ul className="flex gap-3 ">
                  {course.stack.map((item) => (
                    <li className="min-h-8 min-w-8" key={item.id}>
                      <item.icon />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Button variant={"green"} className="font-medium text-[16px] px-8 py-4">
        Browse All Courses
      </Button>
    </section>
  );
};
