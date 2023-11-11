import { connectMongoDB } from "@/app/lib/mongobd";
import User from "@/app/models/users";
import { NextResponse } from "next/server";

 export async function POST(request){
const {name ,email}=await  request.json();
await connectMongoDB();
await User.create({name,email})
return NextResponse.json({message:"User Registered"},{status:201})

 }