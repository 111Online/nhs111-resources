const downloadButtons = document.querySelectorAll("[download]");
if (downloadButtons) {
  Array.from(downloadButtons).forEach((button) => {
    button.addEventListener("click", (e) => {
      gtag("event", "click", {
        event_category: "Download button",
        event_label: button.textContent,
      });
    });
  });
}
