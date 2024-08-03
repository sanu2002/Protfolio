
function mycolor() {
  document.body.classList.toggle("dark_mode");
  var isDarkModeEnabled = document.body.classList.contains("dark_mode");
  localStorage.setItem("dark_mode", isDarkModeEnabled);
}

document.addEventListener("DOMContentLoaded", function () {
  var isDarkModeEnabled = JSON.parse(localStorage.getItem("dark_mode"));
  if (isDarkModeEnabled) {
    document.body.classList.add("dark_mode");
  }
  
  
});



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

