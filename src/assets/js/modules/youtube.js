const videos = document.querySelectorAll("[data-youtube-id]");

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onPlayerStateChange(event) {
  switch (event.data) {
    case 1: // playing
      gtag("event", "play", {
        event_category: "YouTube",
        event_label: event.target.getVideoData().title,
      });
      break;

    case 0: // ended
      gtag("event", "ended", {
        event_category: "YouTube",
        event_label: event.target.getVideoData().title,
      });
      break;

    case 2: // paused
      gtag("event", "paused", {
        event_category: "YouTube",
        event_label: event.target.getVideoData().title,
      });
      break;

    case -1: // unstarted
    case 3: // buffering
    case 5: // video cued
    default:
      // Discard events by default
      // Written this way to make it easy to track more later
      break;
  }
}

function onYouTubeIframeAPIReady() {
  if (videos) {
    Array.from(videos).forEach((video, index) => {
      const youtubeId = video.getAttribute("data-youtube-id");
      const youtubeTitle = video.getAttribute("data-youtube-title");

      const player = new YT.Player(video, {
        height: "390",
        width: "640",
        videoId: youtubeId,
        playerVars: {
          playsinline: 1,
        },
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    });
  }
}

// Need a global function for the youtube script to know how to call it
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
