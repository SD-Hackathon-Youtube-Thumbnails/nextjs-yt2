// components/BackgroundSelection.js
import { useRouter } from "next/router";

const BackgroundSelection = ({ bgData }) => {
  const router = useRouter();

  const handleBackgroundSelection = async (imgUrl, text) => {
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
  };

  return (
    <div>
      {Object.entries(bgData).map(([key, url]) => {
        if (key.startsWith("bg")) {
          return (
            <img
              key={key}
              src={url}
              alt={key}
              onClick={() => handleBackgroundSelection(url, bgData.text)}
            />
          );
        }
      })}
    </div>
  );
};

export default BackgroundSelection;
