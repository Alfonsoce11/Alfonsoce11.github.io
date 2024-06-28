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

document.getElementById("EnterYourName").addEventListener("click", EnterName); // Call the function when the button is clicked

let userName; // Declare the variable outside of the function

function EnterName() {
  userName = prompt("Enter your user name:"); // Assign a value to the variable inside the function
  console.log(userName);
  if (userName) {
    document.getElementById("EnterYourName").innerHTML = "Change Name";
    // Save to local storage
    localStorage.setItem('savedUsername', userName);
    console.log(savedUsername);
    greetUser();
  }
}

let savedUsername = localStorage.getItem('savedUsername');

function greetUser() {
  if (savedUsername) {
    document.getElementById("greetUser").innerHTML = "Hello, " + savedUsername + "!";
  }
}

greetUser();

console.log(savedUsername)

document
  .getElementById("createShortcutForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var url = document.getElementById("shortcutUrl").value;
    var name = document.getElementById("shortcutName").value;

    // Add protocol if not provided
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url;
    }

    // Create a new link element
    var link = document.createElement("a");
    link.href = url;
    link.target = "_self";
    link.textContent = name;

    // Append the link to the shortcuts section
    var shortcuts = document.getElementById("shortcuts");
    if (shortcuts.children.length > 0) {
      var newLine = document.createElement("br");
      shortcuts.appendChild(newLine);
    }
    shortcuts.appendChild(link);

    // Clear the form inputs
    document.getElementById("shortcutUrl").value = "";
    document.getElementById("shortcutName").value = "";
  });
