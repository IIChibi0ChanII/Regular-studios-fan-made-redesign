const scrollElements = document.querySelectorAll(".scroll-effect");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      } else {
        entry.target.classList.remove("in-view");
      }
    });
  },
  {
    threshold: 0.05,
  }
);

scrollElements.forEach((el) => observer.observe(el));

const musicBtn = document.getElementById("music-toggle");
const bgMusic = document.getElementById("bg-music");

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.volume = 0.3; // Adjust volume if needed
    bgMusic.play();
    musicBtn.classList.add("playing");
  } else {
    bgMusic.pause();
    musicBtn.classList.remove("playing");
  }
});

const copyrightMusic = document.getElementById("copyright-of-music");
musicBtn.addEventListener("click", () => {
  copyrightMusic.textContent = "Music by Pizza Hotline";
});
