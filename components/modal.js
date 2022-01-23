export const modalTemplate = `
        <h1>
            Add project 
        </h1>
        <button id="close" class="btn-close">X</button>
        <hr>
       <p>
           name
       </p>
      
          <input type="text" id="name"> 
          <hr>
          <p> languages (separated with comma) </p> <input type="text" id="lang"> <p></p>
          <hr>
          <p>  description  </p> <textarea></textarea>  <p></p>
          <hr>
          <p>  license  </p> <input type="text" id="license"> <p></p>
          <hr>
          <p>  contributions  </p> <input type="text" id="contrib"> <p></p>
          <hr>
          <p>  code  </p> <input type="text" id="code"> <p></p>
          <p>  live version  </p> <input type="text" id="live"> <p></p>

        <button id="add" class="btn-add-project">Add project</button>
        

    `;

export function showAddModal(addModal, modal) {
  if (addModal) {
    addModal.addEventListener("click", () => {
      modal.style.display = "block";
    });
  }
}

export function closeModal() {
  const close = modal.querySelector("#close");

  close.addEventListener("click", () => (modal.style.display = "none"));
}
