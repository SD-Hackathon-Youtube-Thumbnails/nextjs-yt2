// components/ThumbnailEditor.js
import { useState } from "react";

const ThumbnailEditor = ({ editorData }) => {
  const [fontFamily, setFontFamily] = useState(editorData["font-family"]);
  const [textColor1, setTextColor1] = useState(editorData["text-color-1"]);
  const [textColor2, setTextColor2] = useState(editorData["text-color-2"]);
  const [borderColor, setBorderColor] = useState(editorData["border-color"]);
  const [borderSize, setBorderSize] = useState(editorData["border-size"]);
  const [dropShadowColor, setDropShadowColor] = useState(
    editorData["dropshadow-color"]
  );
  const [dropShadowOffset, setDropShadowOffset] = useState(
    editorData["dropshadow-offset"]
  );
  const [thumbnailUrl, setThumbnailUrl] = useState(editorData["fit"]);

  const updateThumbnail = async () => {
    const response = await fetch(
      `https://datawb.com/fit-text.php?img=${encodeURIComponent(
        editorData["original"]
      )}&text=${encodeURIComponent(
        editorData["text"]
      )}&font-family=${encodeURIComponent(
        fontFamily
      )}&text-color-1=${encodeURIComponent(
        textColor1
      )}&text-color-2=${encodeURIComponent(
        textColor2
      )}&border-color=${encodeURIComponent(
        borderColor
      )}&border-size=${encodeURIComponent(
        borderSize
      )}&dropshadow-color=${encodeURIComponent(
        dropShadowColor
      )}&dropshadow-offset=${encodeURIComponent(dropShadowOffset)}`
    );
    const data = await response.json();
    setThumbnailUrl(data["fit"]);
  };

  const saveThumbnail = () => {
    const savedThumbnails = JSON.parse(
      localStorage.getItem("thumbnails") || "[]"
    );
    savedThumbnails.push({ url: thumbnailUrl, editorData });
    localStorage.setItem("thumbnails", JSON.stringify(savedThumbnails));
  };

  const downloadThumbnail = async () => {
    const response = await fetch(thumbnailUrl);
    const blob = await response.blob();

    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", "thumbnail.png");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the Blob URL after the download is complete
    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
    }, 100);
  };

  return (
    <div>
      <div>
        <label htmlFor="font-family">Font Family:</label>
        <select
          id="font-family"
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          <option value="Sofia Sans Black">Sofia Sans Black</option>
          <option value="The Bold Font">The Bold Font</option>
          <option value="Impact">Impact</option>
          <option value="Bebas Neue">Bebas Neue</option>
          <option value="Montserrat">Montserrat</option>
        </select>
        <label htmlFor="text-color-1">Text Color 1:</label>
        <input
          type="color"
          id="text-color-1"
          value={textColor1}
          onChange={(e) => setTextColor1(e.target.value)}
        />
        <label htmlFor="text-color-2">Text Color 2:</label>
        <input
          type="text"
          id="text-color-2"
          value={textColor2}
          onChange={(e) => setTextColor2(e.target.value)}
        />
        <label htmlFor="border-color">Border Color:</label>
        <input
          type="text"
          id="border-color"
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}
        />
        <label htmlFor="border-size">Border Size:</label>
        <input
          type="number"
          id="border-size"
          value={borderSize}
          onChange={(e) => setBorderSize(e.target.value)}
        />
        <label htmlFor="dropshadow-color">Drop Shadow Color:</label>
        <input
          type="text"
          id="dropshadow-color"
          value={dropShadowColor}
          onChange={(e) => setDropShadowColor(e.target.value)}
        />
        <label htmlFor="dropshadow-offset">Drop Shadow Offset:</label>
        <input
          type="number"
          id="dropshadow-offset"
          value={dropShadowOffset}
          onChange={(e) => setDropShadowOffset(e.target.value)}
        />
      </div>

      <div>
        <img src={thumbnailUrl} alt="Thumbnail Preview" />
      </div>
      <div>
        <button onClick={updateThumbnail}>Update</button>
        <button onClick={saveThumbnail}>Save</button>
        <button onClick={downloadThumbnail}>Download</button>
      </div>
    </div>
  );
};

export default ThumbnailEditor;
