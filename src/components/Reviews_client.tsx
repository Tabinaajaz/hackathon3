"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import {addReview } from "@/app/pages/addReviews"

interface Review {
  id: string;
  name: string;
  role: string;
  date: string;
  review: string;
  rating: number;
  avatar?: string;
}

interface ReviewsClientProps {
  initialReviews: Review[];
}

const ReviewsClient: React.FC<ReviewsClientProps> = ({ initialReviews }) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("review", reviewText);
    formData.append("rating", rating.toString());

    const result = await addReview(formData);
    if (result.success) {
      setReviews(result.reviews);
      setName("");
      setRole("");
      setReviewText("");
      setRating(5);
    } else {
      console.error("Failed to add review:", result.error);
    }
  };

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 2);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex items-center gap-2">
        <button className="bg-blue-600 text-white text-sm font-medium w-8 h-8 rounded-md flex items-center justify-center">
          {reviews.length}
        </button>
        <h2 className="text-2xl font-bold">Reviews</h2>
      </div>

      {/* Reviews List */}
      <div className="space-y-6 mt-4">
        {displayedReviews.map((review) => (
          <div key={review.id} className="flex flex-col md:flex-row md:items-start gap-4 border-b pb-4">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
              <p className="text-gray-700 mt-2">{review.review}</p>
              <div className="flex items-center mt-2">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      {reviews.length > 2 && (
        <button
          className="mt-6 text-blue-600 hover:underline flex items-center mx-auto"
          onClick={() => setShowAllReviews(!showAllReviews)}
        >
          {showAllReviews ? "Show Less" : "Show All"} <span className="ml-1">{showAllReviews ? "▲" : "▼"}</span>
        </button>
      )}

      {/* Add Review Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <h3 className="text-xl font-bold">Add a Review</h3>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <input
            type="text"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">
            Review
          </label>
          <textarea
            id="review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <div>
          <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
            Rating
          </label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number.parseInt(e.target.value))}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value} Star{value !== 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewsClient;
