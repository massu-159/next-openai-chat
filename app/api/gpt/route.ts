import { NextResponse } from "next/server";
import { OpenaiService } from "../../../services/openai-service";


export async function POST(request: Request) {
  const { prompt } = await request.json();
  const result = await OpenaiService.postChat({ prompt });
  if (result == undefined) {
    return new Response('Error', { status: 500 });
  }
  return NextResponse.json({ result });
}