const toggleBTn = document.querySelector(".navBar_toggle_btn");
const toggleBtnIcon = document.querySelector(".navBar_toggle_btn i");
const dropdownMenu = document.querySelector(".dropdown_menu");

toggleBTn.onclick = function () {
  dropdownMenu.classList.toggle("open");
  const isOpen = dropdownMenu.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};
