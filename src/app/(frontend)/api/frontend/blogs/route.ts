import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const payload = await getPayload({ config });
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get("limit") || "10");
    const category = searchParams.get("category");

    const where: { category?: { equals: string } } = {};
    if (category) {
      where.category = {
        equals: category,
      };
    }

    const result = await payload.find({
      collection: "blogs" as const,
      where,
      limit,
      sort: "-createdAt",
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
