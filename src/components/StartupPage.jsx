import { useEffect } from "react";
import tag from "/Audio/Say2Cups_Tag_2.wav";

export function Startup() {
  useEffect(() => {
    // Get the audio element
    const audio = new Audio(tag);

    // Get the link
    const link = document.getElementById("no-link");

    const playAudioAndNavigateToHome = (event) => {
      event.preventDefault(); // Prevent the default anchor behavior
      audio.play(); // Play the sound

      // Redirect after the sound has played (adjust time as needed)
      audio.onended = function () {
        window.location.href = "/";
      };
    };

    // Add click event listener
    const listener = link.addEventListener("click", playAudioAndNavigateToHome);

    document.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        playAudioAndNavigateToHome(e);
      }
    });

    return removeEventListener("click", listener);
  }, []);

  return (
    <>
      <iframe
        id="bg-video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mVp3YwTLHjQ?si=4kg-1T2XQPmYGtOE&mute=1&start=0&autoplay=1&controls=0&showinfo=0&modestbranding=1&rel=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>

      <h1 className="text_flick">
        <a href="/" id="no-link">
          PRESS ENTER
        </a>
      </h1>
    </>
  );
}
