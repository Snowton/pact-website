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

// const nav_toggle = document.getElementsByClassName("toggle-nav");
// nav_toggle[0].addEventListener("click", function() => {
//   let answer = this.nextElementSibling;
//     if (answer.style.maxHeight) {
//       answer.style.maxHeight = null;
//     } else {
//       answer.style.maxHeight = answer.scrollHeight + "px";
//     }
// })