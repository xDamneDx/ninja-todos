const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const generateTemplateTodo = (todo) => {
  const html = `
    <li
        class="list-group-item text-light d-flex justify-content-between align-items-center"
    >
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if (todo) {
    generateTemplateTodo(todo);
    addForm.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
