import { getItem } from "./components/item.js";

const count = document.querySelector("#count");
export async function listProjects(listing) {
  const projectsData = localStorage.getItem("projects");

  if (projectsData) {
    const projects = JSON.parse(projectsData);

    console.log(projects);

    projects.forEach((project) => {
      const listingTemplate = getItem(project);

      listing.innerHTML += listingTemplate;
    });

    count.textContent = "total " + projects.length;
  }
}
export function addProject(add) {
  const name = document.querySelector("#name");
  const lang = document.querySelector("#lang");
  const desc = document.querySelector("textarea");
  const license = document.querySelector("#license");
  const contrib = document.querySelector("#contrib");
  const code = document.querySelector("#code");
  const live = document.querySelector("#live");

  add.addEventListener("click", () => {
    if (
      name.value === "" &&
      lang.value === "" &&
      desc.value === "" &&
      license.value === "" &&
      contrib.value === "" &&
      code.value === "" &&
      live.value === ""
    ) {
      alert('Fill all fields please');
    } else {
      const obj = {
        name: name.value,
        languages: lang.value,
        desc: desc.value,
        license: license.value,
        contrib: contrib.value,
        code: code.value,
        live: live.value,
      };
      const projectsData = localStorage.getItem("projects");

      const projects = JSON.parse(projectsData) || [];
      projects.push(obj);

      localStorage.setItem("projects", JSON.stringify(projects));

      listProjects(listing);
    }
  });


}
