document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.querySelector(".loader").style.display = "none";
    const mainContent = document.getElementById("main-content");
    mainContent.classList.add("show");
    window.scrollTo(0, 0);
  }, 3000);
});
