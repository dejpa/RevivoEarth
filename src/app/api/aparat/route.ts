import { NextResponse } from "next/server";
import { APARAT_USERNAME, getAparatVideos } from "@/lib/aparat";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const videos = await getAparatVideos();

    return NextResponse.json({
      username: APARAT_USERNAME,
      count: videos.length,
      videos,
    });
  } catch (error) {
    return NextResponse.json(
      {
        username: APARAT_USERNAME,
        count: 0,
        videos: [],
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 200 }
    );
  }
}