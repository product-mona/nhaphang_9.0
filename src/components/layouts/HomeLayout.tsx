import { LayoutProps } from "@/types";
import { HomeFooter, HomeHeader } from "../home";
import { HomeProtector } from "../protector";

export function HomeLayout({ children }: LayoutProps) {
  return (
    <HomeProtector>
      <>
        <HomeHeader />
        {children}
        <HomeFooter />
      </>
    </HomeProtector>
  );
}
