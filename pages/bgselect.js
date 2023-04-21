// pages/bgselect.js
import { useRouter } from "next/router";
import BackgroundSelection from "../components/BackgroundSelection";

const BackgroundSelectPage = () => {
  const router = useRouter();
  const bgData = JSON.parse(router.query.bgData || "{}");

  return <BackgroundSelection bgData={bgData} />;
};

export default BackgroundSelectPage;
