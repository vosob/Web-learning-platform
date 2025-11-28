import { reviews } from "../source/HeroReviews";

export const HeroReviews = () => {
  return (
    <ul className="mb-28">
      {reviews.map((review) => (
        <li
          className="p-6 flex flex-col bg-gray-800 w-[290px] rounded-xl "
          key={review.id}
        >
          <p className="pb-0.5 text-[14px]">{review.name}</p>
          <p className="pb-3 text-[12px] text-light-blue-bg ">{review.grade}</p>
          <p>{review.rating}</p>
          <p>{review.description}</p>
          <span>{}</span>
        </li>
      ))}
    </ul>
  );
};
