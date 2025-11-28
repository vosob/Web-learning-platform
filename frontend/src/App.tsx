import { CoursesList } from "./components/CoursesList";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

export const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <CoursesList />
    </div>
  );
};
