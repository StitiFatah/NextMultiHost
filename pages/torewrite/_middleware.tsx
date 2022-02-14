// pages/_middleware.ts

// import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
// export function middleware(req: NextRequest, ev: NextFetchEvent) {
//   // return new Response("Hello, world!");
//   // console.log("hello");
//   // console.log(process.env.test);

//   // return new Response(
//   //   "Open the network tab in devtools to see the response headers",
//   //   {
//   //     headers: { "custom-test": "custom-test" },
//   //   }
//   // );
//   const { pathname } = req.nextUrl;
//   console.log("pathname", pathname);
//   console.log("hostname", req.headers.get("host"));
//   console.log("ROOT URL", process.env.ROOT_URL);
//   console.log("CURR HOST", process.env.CURR_HOST);
// }

import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log("pathname", pathname);
  // Get hostname (e.g. vercel.com, test.vercel.app, etc.)
  const hostname = req.headers.get("host");

  // If localhost, assign the host value manually
  // If prod, get the custom domain/subdomain value by removing the root URL
  // (in the case of "test.vercel.app", "vercel.app" is the root URL)

  // const currentHost =
  // process.env.NODE_ENV == "production"
  // ? hostname.replace(`.${process.env.ROOT_URL}`, "")
  // : process.env.CURR_HOST;

  const currentHost = hostname?.replace(`.${process.env.ROOT_URL}`, "");

  console.log("hostname", hostname);
  console.log("current host", currentHost);
  // Prevent security issues – users should not be able to canonically access
  // the pages/sites folder and its respective contents. This can also be done
  // via rewrites to a custom 404 page

  if (pathname.includes(`/_sites`)) {
    return new Response(null, { status: 404 });
  }

  if (
    !pathname.includes(".") && // exclude all files in the public folder
    !pathname.startsWith("/api") // exclude all API routes
  ) {
    const new_path_name = pathname.replace("/torewrite", "");

    const rewrited_path =
      process.env.NODE_ENV === "production"
        ? `https://${hostname}/torewrite/_sites/${currentHost}${new_path_name}`
        : `http://domain-2.localhost:3000/torewrite/_sites/${currentHost}${new_path_name}`;

    console.log("current_host", currentHost);
    console.log("new_path_name", new_path_name);

    // const rewrited_path = `/_sites/${currentHost}${pathname}`;

    console.log("rewrited_path", rewrited_path);
    // console.log(`pushed to ${rewrited_path}`);
    // rewrite to the current hostname under the pages/sites folder
    // the main logic component will happen in pages/sites/[site]/index.tsx
    return NextResponse.rewrite(rewrited_path);
  }
}
