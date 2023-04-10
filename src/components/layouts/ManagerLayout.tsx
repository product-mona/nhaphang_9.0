import React from "react";
import { LayoutProps } from "@/types";
import { MainProtector } from "../protector";
import { ManagerFooter, ManagerHeader } from "../manager";

export function ManagerLayout({ children }: LayoutProps) {
  return (
    <MainProtector>
      <div className="ManagerLayout">
        <ManagerHeader />
        <p>{children}</p>
        <ManagerFooter />
      </div>
    </MainProtector>
  );
}
