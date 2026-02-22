import { connectDB } from "@/lib/mongodb"
import Visitor from "@/lib/models/Visitor"

export async function GET() {
  await connectDB()
  const count = await Visitor.countDocuments()
  return Response.json({ count })
}