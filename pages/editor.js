// pages/editor.js
import { useRouter } from "next/router";
import ThumbnailEditor from "../components/ThumbnailEditor";

const EditorPage = () => {
  const router = useRouter();
  const editorData = JSON.parse(router.query.editorData || "{}");

  return <ThumbnailEditor editorData={editorData} />;
};

export default EditorPage;
