let cursor = document.querySelector(".cursor");
var interactables = document.querySelectorAll(".interactable");

document.addEventListener("mousemove", function (e) {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.left = x - 25 + "px";
  cursor.style.top = y - 25 + "px";
});

interactables.forEach((interactable) => {
  interactable.addEventListener("mouseenter", () => {
    cursor.classList.add("focus-cursor");
  });

  interactable.addEventListener("mouseleave", () => {
    cursor.classList.remove("focus-cursor");
  });
});
