const btn          = document.querySelector(".btn");
const pop_up_btn   = document.querySelector(".pop_up-btn");
const image_input  = document.querySelector(".image-input");
const image        = document.querySelector(".img-container");
const pop_up_image = document.querySelector(".pop_up-img-container");
const container    = document.querySelector(".container");
const pop_up       = document.querySelector(".pop_up");
const original     = document.querySelector(".original");
const heart        = document.querySelector(".heart-btn");
const square       = document.querySelector(".square-btn");
const circle       = document.querySelector(".circle-btn");
const rectangle    = document.querySelector(".rectangle-btn");

btn.addEventListener("click", () => {
  image_input.click();
});

pop_up_btn.addEventListener("click", () => {
  container.style.display = "flex";
  pop_up.style.display = "none";
});

image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    image.style.backgroundImage = `url(${uploaded_image})`;
    container.style.display = "none";
    pop_up.style.display = "flex";
    pop_up_image.style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

original.addEventListener("click", () => {
  pop_up_image.classList.add("original");
  pop_up_image.classList.remove("heart");
  pop_up_image.classList.remove("square");
  pop_up_image.classList.remove("circle");
  pop_up_image.classList.remove("rectangle");
  image.classList.add("original");
  image.classList.remove("heart");
  image.classList.remove("square");
  image.classList.remove("circle");
  image.classList.remove("rectangle");
});

heart.addEventListener("click", () => {
  pop_up_image.classList.remove("original");
  pop_up_image.classList.add("heart");
  pop_up_image.classList.remove("square");
  pop_up_image.classList.remove("circle");
  pop_up_image.classList.remove("rectangle");
  image.classList.remove("original");
  image.classList.add("heart");
  image.classList.remove("square");
  image.classList.remove("circle");
  image.classList.remove("rectangle");
});

square.addEventListener("click", () => {
  pop_up_image.classList.remove("original");
  pop_up_image.classList.remove("heart");
  pop_up_image.classList.add("square");
  pop_up_image.classList.remove("circle");
  pop_up_image.classList.remove("rectangle");
  image.classList.remove("original");
  image.classList.remove("heart");
  image.classList.add("square");
  image.classList.remove("circle");
  image.classList.remove("rectangle");
});

circle.addEventListener("click", () => {
  pop_up_image.classList.remove("original");
  pop_up_image.classList.remove("heart");
  pop_up_image.classList.remove("square");
  pop_up_image.classList.add("circle");
  pop_up_image.classList.remove("rectangle");
  image.classList.remove("original");
  image.classList.remove("heart");
  image.classList.remove("square");
  image.classList.add("circle");
  image.classList.remove("rectangle");
});

rectangle.addEventListener("click", () => {
  pop_up_image.classList.remove("original");
  pop_up_image.classList.remove("heart");
  pop_up_image.classList.remove("square");
  pop_up_image.classList.remove("circle");
  pop_up_image.classList.add("rectangle");
  image.classList.remove("original");
  image.classList.remove("heart");
  image.classList.remove("square");
  image.classList.remove("circle");
  image.classList.add("rectangle");
});
