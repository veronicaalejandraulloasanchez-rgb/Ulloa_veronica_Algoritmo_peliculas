// Navegación entre secciones
const menuItems = document.querySelectorAll("#menu li");
const sections = document.querySelectorAll("main section");

menuItems.forEach(item => {
  item.addEventListener("click", () => {
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(item.dataset.section).classList.add("active");
  });
});

// Quiz simple
function checkAnswer(answer) {
  const result = document.getElementById("quiz-result");
  if (answer === "George Miller") {
    result.textContent = "✅ Correcto: George Miller dirigió Fury Road.";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Incorrecto, intenta de nuevo.";
    result.style.color = "red";
  }
}
