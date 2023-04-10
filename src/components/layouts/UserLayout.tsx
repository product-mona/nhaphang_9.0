import React from "react";
import { LayoutProps } from "@/types";
import { Footer, Header } from "../common";

export function UserLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
