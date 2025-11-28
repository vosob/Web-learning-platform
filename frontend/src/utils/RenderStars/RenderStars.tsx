import { FaRegStar, FaStar } from "react-icons/fa";

export const RenderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(
        <span key={i} className="size-4 inline-block text-yellow-400">
          <FaStar />
        </span>
      );
    } else if (i === fullStars && hasHalfStar) {
      stars.push(
        <span key={i} className="size-4 inline-block text-yellow-400">
          <FaRegStar />
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="size-4 inline-block text-gray-500">
          <FaStar />
        </span>
      );
    }
  }
  return stars;
};
