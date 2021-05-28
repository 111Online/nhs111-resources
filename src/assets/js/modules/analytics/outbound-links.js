const externalLinks = document.querySelectorAll("[href^=http]");

if (externalLinks) {
  Array.from(externalLinks).forEach((link) => {
    link.addEventListener("click", (e) => {
      ga("send", "event", "outbound", "click", link.getAttribute("href"), {
        transport: "beacon",
        hitCallback: function () {
          document.location = link.getAttribute("href");
        },
      });
    });
  });
}
