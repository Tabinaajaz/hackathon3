'use client' 

import { useState, useEffect, Key } from "react";
import { FaStar } from "react-icons/fa";
import { Review } from "../../type";




interface ReviewsClientProps {
  reviews: Review[];
}

export default function ReviewsClient({ reviews }: ReviewsClientProps) {
  const [reviewList, setReviewList] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    review: "",
    rating: 5,
  });
  const [error, setError] = useState("");

  // Fetch reviews from API
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/reviews");
        if (!response.ok) throw new Error("Failed to fetch reviews");
        const data = await response.json();
        setReviewList(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const newReview = {
      id: Date.now().toString(),
      _id: Date.now().toString(),
      ...formData,
      date: new Date().toLocaleDateString(),
      rating: Number(formData.rating),
      text: formData.review,
    };

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      // Update UI immediately
      setReviewList([newReview, ...reviewList]);
      setFormData({ name: "", role: "", review: "", rating: 5 });
    } catch (error) {
      console.error("Error submitting review:", error);
      setError("Failed to submit review. Please try again.");
    }
  };

  if (loading) return <p className="text-center">Loading reviews...</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold">Reviews</h2>

      {error && <p className="text-red-500">{error}</p>}

      <div className="space-y-6 mt-4">
        {reviewList.length > 0 ? (
          reviewList.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <h3 className="font-bold text-lg">{review.name}</h3>
              <p className="text-gray-500">{review.role} • {review.date}</p>
              <p className="text-gray-700 mt-2">{review.review}</p>
              <div className="flex items-center mt-2">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No reviews yet.</p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-2 border rounded" />
        <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Your Role" required className="w-full p-2 border rounded" />
        <textarea name="review" value={formData.review} onChange={handleChange} placeholder="Your Review" required className="w-full p-2 border rounded"></textarea>
        <select name="rating" value={formData.rating} onChange={handleChange} required className="w-full p-2 border rounded">
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>{value} Star{value !== 1 ? "s" : ""}</option>
          ))}
        </select>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Submit Review</button>
      </form>
    </div>
  );
}
