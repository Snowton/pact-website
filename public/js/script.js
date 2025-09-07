const tog = document.getElementsByClassName("toggle");
let i;

for (i = 0; i < tog.length; i++) {
  tog[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}

const group_photos = document.querySelectorAll(".group img");

for (i = 0; i < group_photos.length; i++) {
  if (group_photos[i].closest(".group").querySelector(".frame")) {
    continue;
  }

  group_photos[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
}

const ham = document.getElementsByClassName("ham");
ham[0].addEventListener("click", function() {
  this.classList.toggle("active");
  let answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
})

// const nav_toggle = document.getElementsByClassName("toggle-nav");
// nav_toggle[0].addEventListener("click", function() {
//   let answer = this.nextElementSibling;
//     if (answer.style.maxHeight) {
//       answer.style.maxHeight = null;
//     } else {
//       answer.style.maxHeight = answer.scrollHeight + "px";
//     }
// })


const buttons = document.querySelectorAll("[data-carousel-button]")
const circles = document.querySelectorAll(".circle");

// Updates current slide to next/prev slide
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides =  button.closest("[data-carousel]").querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    updateCurrentDot(slides.children[newIndex]);
  })
})

// Updates the navigation circles by updating current circle
function updateCurrentDot(newSlide) {
  const slides =  newSlide.closest("[data-carousel]").querySelector("[data-slides]");
  const dots = newSlide.closest("[data-carousel]").querySelector("[data-dots]");
  const activeDot = dots.querySelector("[data-active]");

  let newIndex = [...slides.children].indexOf(newSlide)
  dots.children[newIndex].dataset.active = true
  delete activeDot.dataset.active;
}

// Associates navigation circle to slide
circles.forEach((circle) => {
    circle.addEventListener("click", () => {
        const slides =  circle.closest("[data-carousel]").querySelector("[data-slides]");
        const dots = circle.closest("[data-carousel]").querySelector("[data-dots]");

        const activeSlide = slides.querySelector("[data-active]");
        let currentIndex = [...slides.children].indexOf(activeSlide)
        let newIndex = [...dots.children].indexOf(circle)

        if (currentIndex !== newIndex) {
          slides.children[newIndex].dataset.active = true;
          delete activeSlide.dataset.active;

          updateCurrentDot(slides.children[newIndex]);
        }
    })
})