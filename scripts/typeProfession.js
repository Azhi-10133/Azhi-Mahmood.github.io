document.addEventListener("DOMContentLoaded", (event) => {
  let professions = ["Software Engineer", "Web Developer", "UI / UX Designer"];
  let currentProfessionIndex = 0;
  const professionElement = document.getElementById("profession");

  function deleteProfession(callback) {
    const deleteInterval = setInterval(() => {
      let text = professionElement.textContent;
      if (text.length > 0) {
        professionElement.textContent = text.substring(0, text.length - 1);
      } else {
        clearInterval(deleteInterval);
        callback();
      }
    }, 80);
  }

  function typeProfession(text) {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        professionElement.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          currentProfessionIndex =
            (currentProfessionIndex + 1) % professions.length;
          deleteProfession(() =>
            typeProfession(professions[currentProfessionIndex])
          );
        }, 1000);
      }
    }, 80);
  }
  deleteProfession(() => typeProfession(professions[currentProfessionIndex]));
});
