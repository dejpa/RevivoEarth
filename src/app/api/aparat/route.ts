import { NextResponse } from "next/server";
import { APARAT_CHANNEL_USERNAME, fetchAparatVideos } from "@/lib/aparat";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get("username") || APARAT_CHANNEL_USERNAME;

  try {
    const videos = await fetchAparatVideos(username);
    return NextResponse.json({ videos });
  } catch {
    return NextResponse.json(
      { videos: [], error: "Failed to fetch Aparat videos" },
      { status: 502 }
    );
  }
}
