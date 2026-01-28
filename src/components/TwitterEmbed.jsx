import { useEffect, useRef } from "react";

const TwitterEmbed = ({ tweetUrl }) => {
  const embedRef = useRef(null);

  useEffect(() => {
    // Ensure the Twitter widget script is loaded
    const loadTwitterScript = () => {
      if (window.twttr && window.twttr.widgets) {
        // If script already loaded, process the blockquote
        window.twttr.widgets.process(embedRef.current);
      } else {
        // Load the Twitter widget script
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        document.body.appendChild(script);
      }
    };

    loadTwitterScript();
  }, [tweetUrl]);

  return (
    <div ref={embedRef} className="flex justify-center my-4">
      <blockquote className="twitter-tweet" data-theme="dark">
        <a href={tweetUrl}></a>
      </blockquote>
    </div>
  );
};

export default TwitterEmbed;
