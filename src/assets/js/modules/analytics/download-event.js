const downloadButtons = document.querySelectorAll("[download]");
if (downloadButtons) {
  Array.from(downloadButtons).forEach((button) => {
    button.addEventListener("click", (e) => {
      ga("send", {
        hitType: "event",
        eventCategory: "Download button",
        eventAction: "click",
        eventLabel: button.textContent,
      });
    });
  });
}
