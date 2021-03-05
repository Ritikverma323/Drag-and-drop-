const imageBox = document.querySelector(".image-box");
const whiteBoxes = document.querySelectorAll(".whitebox");

imageBox.addEventListener("dragstart", (e) => {
  console.log("dragstart");
  e.target.classList.add("hold");
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);

  console.log(e.target);
});

imageBox.addEventListener("dragend", () => {
  console.log("dragend");
});

for (whiteBoxe of whiteBoxes) {
  whiteBoxe.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("dragover");
  });
  whiteBoxe.addEventListener("dragenter", () => {
    console.log("dragenter");
  });
  whiteBoxe.addEventListener("dragleave", () => {
    console.log("dragleave");
  });
  whiteBoxe.addEventListener("drop", (e) => {
    console.log("drop");
    e.target.append(imageBox);
    imageBox.classList.remove("hide");
    imageBox.classList.remove("hold");
  });
}
