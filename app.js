import { modalTemplate } from "./components/modal.js";
import { listProjects, addProject } from "./projects.js";
import { showAddModal, closeModal } from "./components/modal.js";
function main() {
  const listing = document.querySelector("#listing");
  const addModal = document.querySelector("#add-modal");
  const modal = document.querySelector("#modal");

  console.log(listing);

  let testingLoading = false;

  if (testingLoading) {
    listing.textContent = "Loading projects...";

    setTimeout(listProjects, 4000);
  } else {
    listProjects(listing);
  }
  modal.innerHTML = modalTemplate;

  showAddModal(addModal, modal);
  closeModal();
  const add = document.querySelector("#add");

  addProject(add);
}

main();
