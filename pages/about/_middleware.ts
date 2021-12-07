import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  console.log("ABOUT MIDDLEWARE");
  return NextResponse.rewrite("/test3");
}
