import { NextResponse } from "next/server";

import { user } from "@/app/data/user";

export const GET = async () => {
	return NextResponse.json(user);
};
