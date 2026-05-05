// Smooth scroll
function scrollToSection(){
  document.getElementById("features").scrollIntoView({
    behavior: "smooth"
  });
}

// Auto changing testimonials
const testimonials = [
  "Amazing design!",
  "Boosted my business 🚀",
  "Super clean UI ❤️"
];

let i = 0;

setInterval(() => {
  document.getElementById("testimonial-text").innerText = testimonials[i];
  i = (i + 1) % testimonials.length;
}, 2000);
