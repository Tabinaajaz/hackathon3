"use server";

import { promises as fs } from "fs";
import path from "path";
import { Review } from "../../../type";


interface ReviewState {
  success: boolean;
  reviews?: Review[];
  error?: string;
}

export async function addReview(prevState: ReviewState, formData: FormData): Promise<ReviewState> {
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const review = formData.get("review") as string;
  const rating = Number.parseInt(formData.get("rating") as string);

  const newReview: Review = {
    id: Date.now().toString(),
    name,
    role,
    date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
    review,
    rating,
  };

  const filePath = path.join(process.cwd(), "data", "reviews.json");

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    const reviews: Review[] = JSON.parse(fileContents);
    reviews.push(newReview);
    await fs.writeFile(filePath, JSON.stringify(reviews, null, 2));

    return { success: true, reviews };
  } catch (error) {
    console.error("Error adding review:", error);
    return { success: false, error: "Failed to add review" };
  }
}
