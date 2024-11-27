"use client";
import { Suspense } from "react";

import Menu from "./menu";
export default function Home() {
  return (
    <Suspense fallback={<p>Movie Search is loading...</p>}>
      <div className="min-h-full container mx-auto flex flex-col justify-center">
        <Menu></Menu>
      </div>
    </Suspense>
  );
}
