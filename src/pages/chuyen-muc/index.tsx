import { HomeLayout } from "@/components/layouts";
import { NextPageWithLayout } from "@/types";
import router from "next/router";

const ChuyenMucPage: NextPageWithLayout = () => {
  return (
    <div className="ChuyenMucPage">
      <h1 onClick={() => router.push("/")}>Back Home</h1>
    </div>
  );
};

ChuyenMucPage.Layout = HomeLayout;

export default ChuyenMucPage;
