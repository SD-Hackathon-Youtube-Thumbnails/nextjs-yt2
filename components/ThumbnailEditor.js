// components/ThumbnailEditor.js
import { useState } from "react";
import styles from "./ThumbnailEditor.module.css";

const ThumbnailEditor = ({ editorData }) => {
  const [updatingThumbnail, setUpdatingThumbnail] = useState(false);
  const [text, setText] = useState(editorData["text"]);
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
    setUpdatingThumbnail(true); // Set loading state to true

    const response = await fetch(
      `https://datawb.com/fit-text.php?img=${encodeURIComponent(
        editorData["original"]
      )}&text=${encodeURIComponent(text)}&font_family=${encodeURIComponent(
        fontFamily
      )}&text_color-1=${encodeURIComponent(
        textColor1
      )}&text_color-2=${encodeURIComponent(
        textColor2
      )}&border_color=${encodeURIComponent(
        borderColor
      )}&border_size=${encodeURIComponent(
        borderSize
      )}&dropshadow_color=${encodeURIComponent(
        dropShadowColor
      )}&dropshadow_offset=${encodeURIComponent(dropShadowOffset)}`
    );
    const data = await response.json();
    setThumbnailUrl(data["fit"]);

    setUpdatingThumbnail(false); // Set loading state back to false
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
    <div className={styles.thumbnaileditor}>
      <div className={styles.toolbar}>
        <div className={styles.toolbargroup}>
          <label htmlFor="text">Text:</label>
          <textarea
            id="text"
            rows="3"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className={styles.toolbargroup}>
          <label htmlFor="font-family">Font Family:</label>
          <select
            id="font-family"
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
          >
            <option value="SofiaSansBlack">Sofia Sans Black</option>
            <option value="TheBoldFont">The Bold Font</option>
            <option value="Impact">Impact</option>
            <option value="BebasNeue">Bebas Neue</option>
            <option value="MontserratExtraBold">Montserrat</option>
          </select>
        </div>
        <div className={styles.toolbargroup}>
          <label htmlFor="text-color-1">Text Color 1:</label>
          <input
            type="color"
            id="text-color-1"
            value={textColor1}
            onChange={(e) => setTextColor1(e.target.value)}
          />
          <label htmlFor="text-color-2">Text Color 2:</label>
          <input
            type="color"
            id="text-color-2"
            value={textColor2}
            onChange={(e) => setTextColor2(e.target.value)}
          />
        </div>
        <div className={styles.toolbargroup}>
          <label htmlFor="border-color">Border Color:</label>
          <input
            type="color"
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
        </div>
        <div className={styles.toolbargroup}>
          <label htmlFor="dropshadow-color">Drop Shadow Color:</label>
          <input
            type="color"
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
        <div className={styles.toolbargroup}>
          <button onClick={updateThumbnail}>Update</button>
          <button onClick={saveThumbnail}>Save</button>
          <button onClick={downloadThumbnail}>Download</button>
        </div>
        {updatingThumbnail && (
          <div className={styles.loading}>
            <p>Updating thumbnail...</p>
          </div>
        )}
      </div>
      <div className={styles.thumbnailpreview}>
        <img src={thumbnailUrl} alt="Thumbnail Preview" />
      </div>
    </div>
  );
};

export default ThumbnailEditor;
