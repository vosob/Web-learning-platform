import { ReviewsSlider } from "@/components/ReviewsSlider";
import { CoursesList } from "../components/CoursesList";

import { Hero } from "../components/Hero";
import { Acardion } from "@/components/Acardion";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <CoursesList />
      <ReviewsSlider />
      <Acardion />
    </div>
  );
};
