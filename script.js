const projects = [
  {
    title: "CodeBoard",
    github: "https://github.com/Alfonsoce11/CodeBoard/",
    demo: "https://cad.onshape.com/documents/9e5a6a3961387c025887fbae/w/aa8ec6e4d074e10e7ee03cf4/e/11f7a3639d4530a560166ad4?renderMode=0&uiState=685f30f229780e769f2f6943",
    desc: "A keyboard specially made for coding with quicker access to characters commonly used for coding."
  },
  {
    title: "lorem ipsum",
    github: "lorem ipsum",
    demo: "lorem ipsum",
    desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  }
]

const projectContainer = document.getElementById("projects");

projects.forEach(projectData => {
  const project = document.createElement("div");
  project.className = "project p-8 bg-stone-950 m-8 w-100 border-5 border-red-700 rounded-xl";
  project.innerHTML = `
  <h3 class="text-3xl">${projectData.title}</h3><br>
  <p>${projectData.desc}</p><br>
  <a href="${projectData.github}"><button class="p-3 bg-red-700 rounded-xl cursor-pointer text-white">GitHub</button></a>
  <a href="${projectData.demo}"><button class="p-3 bg-red-700 rounded-xl cursor-pointer text-white">Demo</button></a>`;
  projectContainer.append(project);
});

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

      document.querySelector("body").onscroll = () => {
        document.querySelector(".scrollDown").style.display = "none";
      }

      document.getElementById('menu-button').addEventListener('click', function () {
        this.classList.toggle('openButton');
      });



