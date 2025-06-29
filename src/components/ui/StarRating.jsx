import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const rounded = Math.round(rating * 2) / 2;
    if (rounded >= index + 1)
      return <FaStar key={index} className="text-yellow-400" />;
    if (rounded >= index + 0.5)
      return <FaStarHalfAlt key={index} className="text-yellow-400" />;
    return <FaRegStar key={index} className="text-yellow-400" />;
  });

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default StarRating;
