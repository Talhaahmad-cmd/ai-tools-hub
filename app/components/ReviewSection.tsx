const reviews = [
  {
    id: 1,
    name: "Ali",
    rating: 5,
    comment: "Excellent AI directory! Very easy to use.",
  },
  {
    id: 2,
    name: "Sara",
    rating: 5,
    comment: "I found several useful AI tools for my studies.",
  },
  {
    id: 3,
    name: "Ahmed",
    rating: 4,
    comment: "Clean design and fast search. Looking forward to more tools.",
  },
];

export default function ReviewSection() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center">
          ⭐ User Reviews
        </h2>

        <p className="text-center text-gray-600 dark:text-slate-400 mt-4">
          Here's what our users say about AI Tools Hub.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border p-6"
            >
              <div className="text-yellow-500 text-xl">
                {"⭐".repeat(review.rating)}
              </div>

              <p className="mt-4 text-gray-600 dark:text-slate-400">
                "{review.comment}"
              </p>

              <h3 className="mt-6 font-bold">
                — {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}