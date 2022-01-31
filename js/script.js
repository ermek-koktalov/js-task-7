const input = document.querySelector("#input-todo");
const btn = document.querySelector("button");
const result = document.querySelector("#todo-output");

btn.addEventListener("click", () => {
  if (input.value === "") return;

  createDeleteElements(input.value);
  input.value = "";
});

function createDeleteElements(value) {
  console.log(value);
  const p = document.createElement("p");
  p.className = "p";
  p.textContent = value;
  p.addEventListener("click", () => result.removeChild(p));

  result.appendChild(p);
}
