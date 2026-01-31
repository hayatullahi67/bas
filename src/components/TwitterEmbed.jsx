import { useEffect, useRef } from "react";

const TwitterEmbed = ({ tweetUrl }) => {
  const embedRef = useRef(null);

  // Clean the URL (remove extra spaces, leading colons, and ensure twitter.com domain if x.com)
  const getCleanUrl = (url) => {
    if (!url) return "";
    let clean = url.trim().replace(/^[:\s]+/, "");
    // Ensure it's a valid https link
    if (!clean.startsWith("http")) clean = "https://" + clean;
    return clean;
  };

  useEffect(() => {
    const cleanUrl = getCleanUrl(tweetUrl);
    if (!cleanUrl) return;

    // Function to load the tweet
    const loadTweet = () => {
      if (window.twttr && window.twttr.widgets) {
        // Clear previous content to prevent duplicates
        if (embedRef.current) {
          embedRef.current.innerHTML = "";

          // Create the blockquote required by Twitter widgets.js
          const bq = document.createElement("blockquote");
          bq.className = "twitter-tweet";
          bq.setAttribute("data-theme", "dark");

          const link = document.createElement("a");
          link.href = cleanUrl;
          bq.appendChild(link);

          embedRef.current.appendChild(bq);

          // Tell Twitter to process the new element
          window.twttr.widgets.load(embedRef.current);
        }
      }
    };

    // Initialize or load script
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      script.onload = loadTweet;
      document.head.appendChild(script);
    } else {
      loadTweet();
    }
  }, [tweetUrl]);

  return (
    <div className="flex justify-center w-full min-h-[300px] py-4">
      <div
        ref={embedRef}
        className="w-full max-w-[550px]"
        style={{ minHeight: "200px" }}
      >
        {/* Twitter will render the tweet here */}
        <div className="flex items-center justify-center h-full text-gray-500 animate-pulse text-sm">
          Loading post...
        </div>
      </div>
    </div>
  );
};

export default TwitterEmbed;
