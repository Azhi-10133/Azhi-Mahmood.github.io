document.addEventListener("DOMContentLoaded", (event) => {
  const links = document.querySelectorAll(".navBar__links a");

  links.forEach((link) => {
    link.addEventListener("click", function () {
      links.forEach((node) => {
        node.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
