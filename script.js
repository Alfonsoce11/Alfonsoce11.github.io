const projects = [
  {
    title: "CodeBoard",
    github: "https://github.com/Alfonsoce11/CodeBoard/",
    demo: "https://cad.onshape.com/documents/9e5a6a3961387c025887fbae/w/aa8ec6e4d074e10e7ee03cf4/e/11f7a3639d4530a560166ad4?renderMode=0&uiState=685f30f229780e769f2f6943",
    img: "https://file.garden/ZXPZOz_dI1vYUjXR/codeBoard.png",
    desc: "A keyboard specially made for coding with quicker access to characters commonly used for coding."
  },
  {
    title: "Mouse",
    github: "",
    demo: "https://cad.onshape.com/documents/e5149cefcc6fcf6e46e5d30a/w/83f9b9912ecc8fbebcb307da/e/7d9534075d7e9d5a90a8b9f2",
    img: "https://file.garden/ZXPZOz_dI1vYUjXR/mouse",
    desc: "A mouse I designed using with the bambu lab mouse kit. <a href='https://us.store.bambulab.com/products/wireless-mouse-components-kit-002' target='_blank'>Here is the kit it uses.</a>"
  },
]

const projectContainer = document.getElementById("projects");

projects.forEach(projectData => {
  const project = document.createElement("div");
  project.className = "project m-8 rounded-xl";
  project.innerHTML = `
  <h3 class="text-3xl">${projectData.title}</h3><br>
  ${projectData.img ? `<img src="${projectData.img}" alt="${projectData.title} image" class="project-image">` : ""}
  <p>${projectData.desc}</p><br>
  <div class="project-buttons-container">
  <a href="${projectData.github}" class="project-button-link" target="_blank"><button class="p-3 rounded-xl project-button">GitHub<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"  viewBox="0 0 16 16" class="github-project-icon"><path fill="currentColor" d="M8 0c4.42 0 8 3.58 8 8a8.01 8.01 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38c0-.27.01-1.13.01-2.2c0-.75-.25-1.23-.54-1.48c1.78-.2 3.65-.88 3.65-3.95c0-.88-.31-1.59-.82-2.15c.08-.2.36-1.02-.08-2.12c0 0-.67-.22-2.2.82c-.64-.18-1.32-.27-2-.27s-1.36.09-2 .27c-1.53-1.03-2.2-.82-2.2-.82c-.44 1.1-.16 1.92-.08 2.12c-.51.56-.82 1.28-.82 2.15c0 3.06 1.86 3.75 3.64 3.95c-.23.2-.44.55-.51 1.07c-.46.21-1.61.55-2.33-.66c-.15-.24-.6-.83-1.23-.82c-.67.01-.27.38.01.53c.34.19.73.9.82 1.13c.16.45.68 1.31 2.69.94c0 .67.01 1.3.01 1.49c0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8"/></svg></button></a>
  <a href="${projectData.demo}" class="project-button-link" target="_blank"><button class="p-3 rounded-xl project-button">Demo<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" class="github-project-icon"><rect width="24" height="24" fill="none"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"/></svg></button></a>
  ${projectData.youtube ?  `<a href="${projectData.youtube}" class="project-button-link" target="_blank"><button class="p-3 rounded-xl project-button">YouTube<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/></svg></button></a>` : ""}
  </div>`;
  projectContainer.append(project);
});

      document.querySelector("body").onscroll = () => {
        document.querySelector(".scrollDown").style.display = "none";
      }

      document.getElementById('menu-button').addEventListener('click', function () {
        this.classList.toggle('openButton');
      });



