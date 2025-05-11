document.addEventListener("DOMContentLoaded", function () {
  const text = document.querySelector(".article-content");
  if (!text) return;

  const words = text.innerText.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  const readingTime =
    minutes < 1 ? "Less than 1 min read" : `${minutes} min read`;

  const timeElement = document.getElementById("reading-time");
  if (timeElement) {
    timeElement.textContent = readingTime;
  }
});
