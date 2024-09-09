import { User } from "@/app/models/User"
import mongoose from "mongoose"

export async function POST(req) {
    const body = await req.json();
    //connect to database
    mongoose.connect(process.env.MONGO_URL)
    //create user
    const createdUser = await User.create(body)
    return Response.json(createdUser)
}