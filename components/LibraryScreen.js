// components/LibraryScreen.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const LibraryScreen = () => {
  const [thumbnails, setThumbnails] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const savedThumbnails = JSON.parse(
      localStorage.getItem("thumbnails") || "[]"
    );
    setThumbnails(savedThumbnails);
  }, []);

  const downloadThumbnail = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "thumbnail.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const editThumbnail = (editorData) => {
    router.push({
      pathname: "/editor",
      query: { editorData: JSON.stringify(editorData) },
    });
  };

  return (
    <div>
      <h2>Saved Thumbnails</h2>
      <div>
        {thumbnails.map((thumbnail, index) => (
          <div key={index}>
            <img src={thumbnail.url} alt={`Thumbnail ${index + 1}`} />
            <button onClick={() => downloadThumbnail(thumbnail.url)}>
              Download
            </button>
            <button onClick={() => editThumbnail(thumbnail.editorData)}>
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryScreen;
