import { SpotifyGateway } from "@/services/SpotifyGateway";
import { NextResponse } from "next/server";

export async function GET() {
  const categories = await SpotifyGateway.getCategories();
  return NextResponse.json(categories)
}