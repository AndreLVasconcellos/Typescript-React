import { SpotifyGateway } from "@/services/SpotifyGateway";
import { NextRequest, NextResponse } from "next/server";

type Options = {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, {params}: Options) {
  console.log(params)
  const playlists = await SpotifyGateway.getPlaylists(params.id)
  return NextResponse.json(playlists)
}