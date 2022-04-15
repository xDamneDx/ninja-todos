const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const searchForm = document.querySelector(".search");
const searchInput = searchForm.querySelector("input");

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

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
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

searchForm.addEventListener("submit", (e) => e.preventDefault());

searchInput.addEventListener("keyup", () => {
  filterTodos(searchInput.value.trim().toLowerCase());
});
