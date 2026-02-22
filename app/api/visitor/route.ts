import { connectDB } from "@/lib/mongodb"
import Visitor from "@/lib/models/Visitor"

export async function POST(req: Request) {
  await connectDB()

  const { visitorId } = await req.json()

  if (!visitorId) {
    return Response.json({ error: "Missing visitorId" }, { status: 400 })
  }

  const exists = await Visitor.findOne({ visitorId })

  if (!exists) {
    await Visitor.create({ visitorId })
  }

  const count = await Visitor.countDocuments()

  return Response.json({ count })
}