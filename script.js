const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const aboutToggle = document.getElementById("aboutToggle");
const aboutSubLinks = document.getElementById("aboutSubLinks");
const aboutArrow = document.getElementById("aboutArrow");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Toggle sub-links for About Us
aboutToggle.addEventListener("click", () => {
  const isOpen = aboutSubLinks.style.display === "flex";
  aboutSubLinks.style.display = isOpen ? "none" : "flex";
  aboutArrow.textContent = isOpen ? "▾" : "▴";
});
// POLL FUNCTIONALITY (Put inside <script> or your JS file)
document.getElementById("pollForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Show thank you message
  document.getElementById("pollMessage").style.display = "block";

  // Disable all inputs and the button
  const inputs = this.querySelectorAll("input, button");
  inputs.forEach(function (input) {
    input.disabled = true;
  });
})


!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s);
    js.id=id;
    js.src='https://weatherwidget.io/js/widget.min.js';
    fjs.parentNode.insertBefore(js,fjs);
  }
}(document,'script','weatherwidget-io-js');
document.getElementById('mascotQuiz').addEventListener('submit', function(e) {
  e.preventDefault();

  const options = document.getElementsByName('quiz');
  let selected = false;
  let correct = false;

  options.forEach(option => {
    if (option.checked) {
      selected = true;
      if (option.value === "c") {
        correct = true;
      }
      option.disabled = true;
    } else {
      option.disabled = true;
    }
  });

  const message = document.getElementById('quizMessage');
  if (!selected) {
    message.textContent = "Please select an answer!";
    message.style.color = "red";
  } else {
    message.textContent = correct ? "Correct! 🦅 It's Hunter the Hawk!" : "Oops! The correct answer was Hunter the Hawk.";
    message.style.color = correct ? "green" : "red";
  }

  message.style.display = "block";
});


