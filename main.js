let sectionArray = document.querySelectorAll(".js-fadeIn"); // Get all sections

window.addEventListener("scroll", fadeIn); // Add scroll event listener and call fadeIn function

function fadeIn() {
  for (let i = 0; i < sectionArray.length; i++) {
    let elem = sectionArray[i];
    let distInView = elem.getBoundingClientRect().top - window.innerHeight - 10;
    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }
}
fadeIn();
