"use client";

import React from "react";

export default function Page() {
  return (
      <div>
        <h1 className="text-2xl">Hello there :3</h1>
        <h2 className="mt-2">
          I am Silencio, a young and naive programmer from Germany who will retreat to the backend upon spotting a css class.
          Its nice to meet you! On this page you will find various random things I have done over the years. Enjoy your stay!
        </h2>

        <h2 className="mt-8">
          You might want to look through my <a href="/projects" className="text-indigo-500">projects</a>.
        </h2>
        <h2>
          If you want to contact me, check out the <a href="/contact" className="text-indigo-500">contact</a> page.
        </h2>
      </div>
  );
}
