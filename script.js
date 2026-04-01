console.log("✅ script.js running!");

// Skills hover effect
const skillItems = document.querySelectorAll("#skills-list li");
skillItems.forEach(li => {
  li.addEventListener("mouseenter", () => {
    li.style.transform = "scale(1.1)";
    li.style.transition = "transform 0.3s ease";
  });
  li.addEventListener("mouseleave", () => {
    li.style.transform = "scale(1)";
  });
});

// Collapsible experience details
const toggleButtons = document.querySelectorAll(".toggle-btn");
toggleButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      btn.textContent = "View Details";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      btn.textContent = "Hide Details";
    }
  });
});

// Scroll-to-top button
const scrollBtn = document.querySelector(".scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) scrollBtn.style.opacity = "1";
  else scrollBtn.style.opacity = "0";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Image fade-in animation
const fadeImages = document.querySelectorAll("img");
fadeImages.forEach(img => {
  img.style.opacity = "0";
  img.style.transition = "opacity 1s ease";
  window.addEventListener("load", () => {
    img.style.opacity = "1";
  });
});