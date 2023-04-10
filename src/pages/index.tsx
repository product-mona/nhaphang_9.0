import { HomeLayout } from "@/components/layouts";
import { NextPageWithLayout } from "@/types";
import { Button } from "antd";
import { Inter } from "next/font/google";
import router from "next/router";

const inter = Inter({ subsets: ["latin"] });

const Index: NextPageWithLayout = () => {

  return (
    <div className="HomePage">
      <h3 onClick={() => router.push("/chuyen-muc")}>Chuyen-muc</h3>
      <Button  title="quản trị"   onClick={() => router.push("/manager")}>Manager</Button>
    </div>
  );
};

Index.Layout = HomeLayout;

export default Index;
