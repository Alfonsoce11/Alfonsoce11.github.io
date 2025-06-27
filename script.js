// Function to display current time
function displayCurrentTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  document.getElementById("current-time").textContent = now.toLocaleDateString(
    "en-US",
    options
  );
}

// Toggle sidebar open/close
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
  document.getElementById("sidebar-toggle").classList.toggle("sidebar-toggle-close")
}



// Event listener for sidebar toggle buttons
document.querySelectorAll(".sidebar-toggle").forEach(function (button) {
  button.addEventListener("click", toggleSidebar);
});

// Event listener for clicking outside sidebar to close
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.querySelectorAll(".sidebar-toggle");

  if (!sidebar.contains(event.target) && event.target !== toggleButton) {
    sidebar.classList.remove("open");
    document.getElementById("menu-button").classList.remove("openButton")
    
  }
});

displayCurrentTime();
setInterval(displayCurrentTime, 1000); // Update time every second


// Light/Dark Mode Toggle
const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.contains("dark-mode");
  if (isDarkMode) {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    localStorage.setItem("mode", "light");
  } else {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    localStorage.setItem("mode", "dark");
  }
});

// Load the saved mode from local storage
const savedMode = localStorage.getItem("mode");
if (savedMode === "dark") {
  document.body.classList.add("dark-mode");
} else if (savedMode === "light") {
  document.body.classList.add("light-mode");
}

      document.querySelector("body").onscroll = () => {
        document.querySelector(".scrollDown").style.display = "none";
      }

      document.getElementById('menu-button').addEventListener('click', function () {
        this.classList.toggle('openButton');
      });


fetch('https://raw.githubusercontent.com/Alfonsoce11/Alfonsoce11/refs/heads/main/README.md')
.then(response => response.text())
.then(data => {
  document.getElementById("aboutMe").innerHTML = data;
});



