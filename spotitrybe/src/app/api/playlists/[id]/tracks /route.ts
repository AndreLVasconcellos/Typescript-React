import { SpotifyGateway } from "@/services/SpotifyGateway"
import { NextRequest, NextResponse } from "next/server"

type Options = {
  params: {
    id: string
  }
}

export async function GET(request: NextRequest, {params}: Options) {
  const tracks = await SpotifyGateway.getTracks(params.id)
  return NextResponse.json(tracks)
}