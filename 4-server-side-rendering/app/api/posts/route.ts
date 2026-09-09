import { NextResponse } from "next/server";
import { posts } from "@/app/data/posts";

export const GET = async () => {
	return NextResponse.json(posts);
};
