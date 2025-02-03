import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "reviews.json");

// GET all reviews
export async function GET() {
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return Response.json(JSON.parse(fileContents));
  } catch (error) {
    console.error("❌ Error fetching reviews:", error);
    return Response.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

// POST a new review
export async function POST(req: Request) {
  try {
    const newReview = await req.json();

    let reviews = [];
    try {
      const fileContents = await fs.readFile(filePath, "utf8");
      reviews = JSON.parse(fileContents);
    } catch (error) {
      console.warn("⚠️ reviews.json not found. Creating a new one.");
    }

    reviews.unshift(newReview); // Add new review at the start

    await fs.writeFile(filePath, JSON.stringify(reviews, null, 2));

    return Response.json({ success: true, reviews });
  } catch (error) {
    console.error("❌ Error saving review:", error);
    return Response.json({ error: "Failed to save review" }, { status: 500 });
  }
}
