import { NextResponse } from "next/server";
import { getAparatVideos } from "@/lib/aparat";

export async function GET() {
  try {
    const videos = await getAparatVideos();

    return NextResponse.json({
      videos,
    });
  } catch {
    return NextResponse.json(
      {
        videos: [],
        error: "Failed to fetch Aparat videos",
      },
      { status: 200 }
    );
  }
}