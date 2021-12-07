// pages/_middleware.ts

import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
export function middleware(req: NextRequest, ev: NextFetchEvent) {
  // return new Response("Hello, world!");
  // console.log("hello");
  // console.log(process.env.test);

  // return new Response(
  //   "Open the network tab in devtools to see the response headers",
  //   {
  //     headers: { "custom-test": "custom-test" },
  //   }
  // );
  const { pathname } = req.nextUrl;
  console.log("pathname", pathname);
  console.log("hostname", req.headers.get("host"));
  console.log("ROOT URL", process.env.ROOT_URL);
  console.log("CURR HOST", process.env.CURR_HOST);
}
