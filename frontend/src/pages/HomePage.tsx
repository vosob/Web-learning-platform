import { ReviewsSlider } from "@/components/ReviewsSlider";
import { CoursesList } from "../components/CoursesList";

import { Hero } from "../components/Hero";
import { AccordionComponent } from "@/components/AccordionComponent";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <CoursesList />
      <ReviewsSlider />
      <AccordionComponent />
    </div>
  );
};
