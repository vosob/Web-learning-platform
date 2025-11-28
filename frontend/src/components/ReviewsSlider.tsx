import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { reviews } from "../source/HeroReviews";
import { RenderStars } from "@/utils/RenderStars/RenderStars";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export const ReviewsSlider = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="font-bold text-center text-4xl mb-12">
        What Our <span className="text-green-accent">Students</span> Say
      </h2>
      <div className="mx-auto flex">
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="mx-auto max-w-7xl "
        >
          <CarouselContent className="flex gap-8">
            {reviews.map((review) => (
              <CarouselItem
                className="p-6 bg-gray-800 max-w-[290px] h-[200px] rounded-xl"
                key={review.id}
              >
                <div className="flex gap-3 mb-3">
                  <Avatar className="size-10">
                    <AvatarImage src={review.avatar} alt={review.name} />
                  </Avatar>

                  <div>
                    <p className="text-[14px]">{review.name}</p>
                    <p className="text-[12px] text-light-blue-bg ">
                      {review.grade}
                    </p>
                  </div>
                </div>

                <div className="mb-3">{RenderStars(review.rating)}</div>
                <p>{review.description}</p>
                <span>{}</span>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
