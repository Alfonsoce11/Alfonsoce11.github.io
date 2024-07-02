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
    document.getElementById("sidebar-toggle").classList.remove("sidebar-toggle-close")
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
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("mode", isDarkMode ? "dark" : "light");
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
});

// Load the saved mode from local storage
const savedMode = localStorage.getItem("mode");
 if (savedMode === "dark") {
  document.body.classList.add("dark-mode");
} else if (savedMode === "light") {
  document.body.classList.add("light-mode");
} 

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

document.getElementById("createShortcutForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var url = document.getElementById("shortcutUrl").value;
  var name = document.getElementById("shortcutName").value;

  // Add protocol if not provided
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    url = "https://" + url;
  }

  // Create and save the shortcut
  var shortcuts = JSON.parse(localStorage.getItem("shortcuts")) || [];
  shortcuts.push({ url: url, name: name });
  localStorage.setItem("shortcuts", JSON.stringify(shortcuts));

  // Append the link to the shortcuts section
  renderShortcuts();

  // Clear the form inputs
  document.getElementById("shortcutUrl").value = "";
  document.getElementById("shortcutName").value = "";
});

function renderShortcuts() {
  var shortcuts = JSON.parse(localStorage.getItem("shortcuts")) || [];
  var shortcutsContainer = document.getElementById("shortcuts");
  shortcutsContainer.innerHTML = ""; // Clear current shortcuts

  shortcuts.forEach((shortcut, index) => {
    var link = document.createElement("a");
    link.href = shortcut.url;
    link.target = "_self";
    link.textContent = shortcut.name;
    shortcutsContainer.appendChild(link);

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteShortcut(index);
    };
    shortcutsContainer.appendChild(deleteButton);
    deleteButton.className = "deleteButton";

    var newLine = document.createElement("br");
    var newLine2 = document.createElement("br");
    shortcutsContainer.appendChild(newLine);
    shortcutsContainer.appendChild(newLine2);
  });
}

function deleteShortcut(index) {
  var shortcuts = JSON.parse(localStorage.getItem("shortcuts")) || [];
  shortcuts.splice(index, 1);
  localStorage.setItem("shortcuts", JSON.stringify(shortcuts));
  renderShortcuts();
}

// Load shortcuts on page load
document.addEventListener("DOMContentLoaded", function () {
  renderShortcuts();
});

document.getElementById('searchEngine').addEventListener('change', saveSearchEngine);

        // Save the selected search engine to local storage
        function saveSearchEngine() {
          const engine = document.getElementById('searchEngine').value;
          localStorage.setItem('preferredSearchEngine', engine);
          updateFormAction();
      }

      // Load the saved search engine from local storage
      function loadSearchEngine() {
          const savedEngine = localStorage.getItem('preferredSearchEngine');
          if (savedEngine) {
              document.getElementById('searchEngine').value = savedEngine;
              updateFormAction();
          }
      }

      // Update the form action based on the selected search engine
      function updateFormAction() {
          const savedEngine = localStorage.getItem('preferredSearchEngine');
          const engine = document.getElementById('searchEngine').value;

          document.querySelectorAll("form.search").forEach(form => {
            form.action = engine;
        });
      }

      // Load the preferred search engine when the page loads
      window.onload = loadSearchEngine;