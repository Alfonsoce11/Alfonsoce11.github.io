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
}

// Search functionality (example)
const searchInput = document.querySelector("#search input");
const searchResults = document.querySelector("#search-results");

searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();

  // Example: Fetch search results dynamically (mocked data)
  const results = ["Projects", "Skills", "Contact"].filter((item) =>
    item.toLowerCase().includes(query)
  );

  // Clear previous results
  searchResults.innerHTML = "";

  // Display new results
  results.forEach((result) => {
    const li = document.createElement("li");
    li.textContent = result;
    searchResults.appendChild(li);
  });
});

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
  }
});

// Initial setup
displayCurrentTime();
setInterval(displayCurrentTime, 1000); // Update time every second

const audio = document.getElementById("background-music");

// Example: Mute/unmute functionality
function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
  } else {
    audio.muted = true;
  }
}

// Example: Pause/resume functionality
function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

// Light/Dark Mode Toggle
const modeToggle = document.getElementById("mode-toggle");
modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
});

// Example code for user registration using fetch API
document
  .getElementById("registrationForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch("/register", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  });

// Example code for user sign-in using fetch API
document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch("/login", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  });

document.getElementById("openPopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

document.getElementById("openPopup2").addEventListener("click", function () {
  document.getElementById("popup2").style.display = "block";
});

document.getElementById("closePopup2").addEventListener("click", function () {
  document.getElementById("popup2").style.display = "none";
});
