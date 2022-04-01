import React, { useState, useEffect } from "react";
import Link from "next/link";
export default function ConnectedOnly() {
  return (
    <>
      <div>You need to be connected to access this page</div>
      <div>
        <Link href="/login">
          <button className="bg-green-500 rounded px-2 py-1 text-white">
            <a> Login </a>
          </button>
        </Link>
      </div>
    </>
  );
}
