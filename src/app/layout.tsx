import React from "react";
import "../../public/globals.css";

export const metadata = {
  title: 'Silencio',
  description: 'My homepage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={"bg-black"}>
        {children}
      </body>
    </html>
  )
}
