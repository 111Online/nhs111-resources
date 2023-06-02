const externalLinks = document.querySelectorAll("[href^=http]");

if (externalLinks) {
  Array.from(externalLinks).forEach((link) => {
    link.addEventListener("click", (e) => {
      gtag("event", "click", {
        transport_type: "beacon",
        event_category: "outbound",
        event_label: link.getAttribute("href"),
        event_callback: function () {
          document.location = link.getAttribute("href");
        },
      });
    });
  });
}
