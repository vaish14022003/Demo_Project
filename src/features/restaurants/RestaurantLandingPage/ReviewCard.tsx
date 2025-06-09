import React from 'react';

interface ReviewProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewCard: React.FC<ReviewProps> = ({ name, rating, comment, date }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow-sm mb-4">
      <div className="flex justify-between items-center mb-1">
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded">
          {rating} ★
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-2">{comment}</p>
      <span className="text-xs text-gray-400">{date}</span>
    </div>
  );
};

export default ReviewCard;
