import { useState } from "react";
import Input from "./Components/Input";
import Header from "./Components/Header";

const App = () => {
  const [link, setLink] = useState("");
  const accessToken = "93a23c2f9358c5cdd3311f4ebe29c18360acb75b";
  const handleChange = (event) => {
    setLink(event.target.value);
  };

  async function shortenUrl(longUrl) {
    const apiUrl = "https://api-ssl.bitly.com/v4/shorten";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ long_url: longUrl }),
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`Failed to shorten URL: ${errorMessage}`);
    }

    const responseData = await response.json();
    return responseData.link;
  }

  async function handleShortenClick() {
    const longUrl = link;
    try {
      const shortUrl = await shortenUrl(longUrl);
      setLink(shortUrl);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="container">
      <Header />
      <Input
        handleInputChange={handleChange}
        handleButtonClick={handleShortenClick}
        value={link}
      />
    </div>
  );
};
export default App;
