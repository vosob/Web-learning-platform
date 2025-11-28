import { RenderStars } from "@/utils/RenderStars/RenderStars";
import { reviews } from "../source/HeroReviews";
import { Avatar, AvatarImage } from "./ui/avatar";

export const HeroReviews = () => {
  return (
    <ul className="container mx-auto grid grid-cols-2 gap-x-[calc(100%-580px)] gap-y-8 place-items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      {reviews.map((review) => (
        <li
          className="p-6 bg-gray-800 w-[290px] h-[200px] rounded-xl "
          key={review.id}
        >
          <div className="flex gap-3 mb-3">
            <Avatar className="size-10">
              <AvatarImage src={review.avatar} alt={review.name} />
            </Avatar>

            <div>
              <p className="text-[14px]">{review.name}</p>
              <p className="text-[12px] text-light-blue-bg ">{review.grade}</p>
            </div>
          </div>

          <div className="mb-3">{RenderStars(review.rating)}</div>
          <p>{review.description}</p>
          <span>{}</span>
        </li>
      ))}
    </ul>
  );
};
