// components/MainScreen.js
import { useState } from "react";
import { useRouter } from "next/router";

const MainScreen = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://datawb.com/generate.php", {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const data = await response.json();
    router.push({
      pathname: "/bgselect",
      query: { bgData: JSON.stringify(data) },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Generate</button>
    </form>
  );
};

export default MainScreen;
