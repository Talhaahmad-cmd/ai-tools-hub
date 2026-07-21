"use client";

import { useEffect, useState } from "react";

type Review = {
  rating: number;
  text: string;
};

type Props = {
  toolId: number;
};

export default function Reviews({ toolId }: Props) {

  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");


  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem(`reviews-${toolId}`) || "[]"
    );

    setReviews(saved);
  }, [toolId]);


  const addReview = () => {

    if (!text.trim()) return;


    const newReview = {
      rating,
      text,
    };


    const updated = [
      ...reviews,
      newReview,
    ];


    setReviews(updated);


    localStorage.setItem(
      `reviews-${toolId}`,
      JSON.stringify(updated)
    );


    setText("");
  };


  return (
    <div className="mt-12">

      <h2 className="text-3xl font-bold mb-6">
        Reviews ⭐
      </h2>


      <div className="bg-slate-900 p-6 rounded-2xl">


        <select
          value={rating}
          onChange={(e)=>setRating(Number(e.target.value))}
          className="bg-slate-800 px-4 py-2 rounded-lg"
        >
          <option value="5">⭐⭐⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="2">⭐⭐</option>
          <option value="1">⭐</option>
        </select>


        <textarea
          value={text}
          onChange={(e)=>setText(e.target.value)}
          placeholder="Write your review..."
          className="w-full mt-4 bg-slate-800 rounded-xl p-4"
        />


        <button
          onClick={addReview}
          className="mt-4 bg-cyan-500 px-6 py-3 rounded-xl"
        >
          Submit Review
        </button>


      </div>


      <div className="mt-8 space-y-4">

        {reviews.map((review,index)=>(

          <div
            key={index}
            className="bg-slate-800 p-5 rounded-xl"
          >

            <p>
              {"⭐".repeat(review.rating)}
            </p>

            <p className="mt-2 text-slate-300">
              {review.text}
            </p>

          </div>

        ))}

      </div>


    </div>
  );
}