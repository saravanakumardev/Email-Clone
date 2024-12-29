
const selectAllCheckbox = document.getElementById("selectAll");
const checkboxes = document.querySelectorAll(".emaillist-list input[type='checkbox']:not(#selectAll)");

selectAllCheckbox.addEventListener("change", function () {
  checkboxes.forEach(checkbox => {
    checkbox.checked = this.checked;
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const toggleButtons = document.querySelectorAll(".toggleButton");
  const detailsSections = document.querySelectorAll(".details");

  detailsSections[0].style.display = "block";

  toggleButtons.forEach(button => {
    button.addEventListener("click", function() {
      const target = this.getAttribute("data-target");
      const details = document.getElementById(target);

      detailsSections.forEach(section => {
        section.style.display = "none";
      });

      details.style.display = "block";
    });
  });
});

$ ()


