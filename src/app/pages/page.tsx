import { promises as fs } from "fs"
import path from "path"
import ReviewsClient from "@/components/Reviews_client"

async function getReviews() {
  const filePath = path.join(process.cwd(), "data", "reviews.json")
  try {
    const fileContents = await fs.readFile(filePath, "utf8")
    return JSON.parse(fileContents)
  } catch (error) {
    console.error("Error reading reviews:", error)
    return []
  }
}

export default async function ReviewsPage() {
  const reviews = await getReviews()
  return <ReviewsClient initialReviews={reviews} />
}
