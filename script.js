// Scroll button
function scrollDown(){
  document.getElementById("features").scrollIntoView({
    behavior:"smooth"
  });
}

// Reveal animation
function reveal(){
  let reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el)=>{
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
