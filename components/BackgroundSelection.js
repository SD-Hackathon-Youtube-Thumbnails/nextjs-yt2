// components/BackgroundSelection.js

import { useRouter } from "next/router";
import { useState } from "react";

const BackgroundSelection = ({ bgData }) => {
  const router = useRouter();
  const [loadingImage, setLoadingImage] = useState(false);

  const handleBackgroundSelection = async (imgUrl, text) => {
    setLoadingImage(true); // Set loading state to true

    const response = await fetch(
      `https://datawb.com/fit-text.php?img=${encodeURIComponent(
        imgUrl
      )}&text=${encodeURIComponent(text)}`
    );
    const data = await response.json();
    router.push({
      pathname: "/editor",
      query: { editorData: JSON.stringify(data) },
    });

    setLoadingImage(false); // Set loading state back to false
  };

  return (
    <div>
      <h1>Select a background</h1>
      {loadingImage && (
        <div>
          <p>Loading image...</p>
        </div>
      )}
      <div style={{ display: "flex", flexWrap: "wrap" }}></div>
      {Object.entries(bgData).map(([key, url]) => {
        if (key.startsWith("bg")) {
          return (
            <img
              key={key}
              src={url}
              alt={key}
              style={{ width: "600px", cursor: "pointer" }}
              onClick={() => handleBackgroundSelection(url, bgData.text)}
            />
          );
        }
      })}
    </div>
  );
};

export default BackgroundSelection;
