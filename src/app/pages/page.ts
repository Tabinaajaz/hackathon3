// import { promises as fs } from "fs";
// import path from "path";
// import { NextResponse } from "next/server";

// const filePath = path.join(process.cwd(), "data", "reviews.json");

// // Get reviews
// export async function GET() {
//   try {
//     const fileContents = await fs.readFile(filePath, "utf8");
//     return NextResponse.json(JSON.parse(fileContents));
//   } catch (error) {
//     console.error("Error fetching reviews:", error);
//     return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
//   }
// }

// // Add review
// export async function POST(req: Request) {
//   try {
//     const newReview = await req.json();
//     const fileContents = await fs.readFile(filePath, "utf8");
//     const reviews = JSON.parse(fileContents);
    
//     reviews.unshift(newReview); // Add new review to the beginning

//     await fs.writeFile(filePath, JSON.stringify(reviews, null, 2));
//     return NextResponse.json({ success: true, reviews });
//   } catch (error) {
//     console.error("Error saving review:", error);
//     return NextResponse.json({ error: "Failed to save review" }, { status: 500 });
//   }
// }
import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

const filePath = path.join(process.cwd(), "data", "reviews.json");

// GET all reviews
export async function GET() {
  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    return NextResponse.json(JSON.parse(fileContents));
  } catch (error) {
    console.error("❌ Error fetching reviews:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

// POST a new review
export async function POST(req: Request) {
  try {
    const newReview = await req.json();
    
    // Read existing reviews
    let reviews = [];
    try {
      const fileContents = await fs.readFile(filePath, "utf8");
      reviews = JSON.parse(fileContents);
    } catch (error) {
      console.warn("⚠️ reviews.json not found. Creating a new one.");
    }

    reviews.unshift(newReview); // Add new review at the start

    await fs.writeFile(filePath, JSON.stringify(reviews, null, 2));

    return NextResponse.json({ success: true, reviews });
  } catch (error) {
    console.error("❌ Error saving review:", error);
    return NextResponse.json({ error: "Failed to save review" }, { status: 500 });
  }
}
