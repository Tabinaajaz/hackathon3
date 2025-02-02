// [
//     {
//       "id": "1",
//       "name": "John Doe",
//       "rating": 5,
//       "comment": "Great product!"
//     },
//     {
//       "id": "2",
//       "name": "Jane Smith",
//       "rating": 4,
//       "comment": "Good value for the price."
//     }
//   ]
fetch("/api/reviews", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    id: "1",
    name: "John Doe",
    role: "Customer",
    date: "2025-01-30",
    review: "Great product!",
    rating: 5,
  }),
})
  .then((res) => res.json())
  .then(console.log)
  .catch(console.error);

  