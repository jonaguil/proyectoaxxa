 $( document ).ready(function() {
    const toggleButton = document.getElementById("toggleButton");
    const icontoggleButton = document.getElementsByClassName("toggle-button_icon");
        const hiddenRow = document.querySelector(".hidden");

        toggleButton.addEventListener("click", () => {
            hiddenRow.classList.toggle("hidden");
            if (hiddenRow.classList.contains("hidden")) {
                icontoggleButton[0].classList.toggle("fa-arrow-down");
                icontoggleButton[0].classList.toggle("fa-arrow-up");
            } else {
            icontoggleButton[0].classList.toggle("fa-arrow-up");
            icontoggleButton[0].classList.toggle("fa-arrow-down");
            }
        });
  });