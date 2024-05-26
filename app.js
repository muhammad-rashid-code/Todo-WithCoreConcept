let InputTodo = document.getElementsByTagName("input")[0];
let outPutTodo = document.getElementsByTagName("ol")[0];

function addTodo() {
  let liEl = document.createElement("li");
  let textSpan = document.createElement("span");
  let btnSpna = document.createElement("span");

  liEl.appendChild(textSpan);
  liEl.appendChild(btnSpna);

  let textSpanText = document.createTextNode(InputTodo.value);
  textSpan.appendChild(textSpanText);

  let dltBtn = document.createElement("button");
  let dltBtnText = document.createTextNode("Delete");
  dltBtn.appendChild(dltBtnText);
  dltBtn.setAttribute("onclick", "dltTodo(this.parentNode)");

  let editBtn = document.createElement("button");
  let editBtnText = document.createTextNode("Edit");
  editBtn.appendChild(editBtnText);
  editBtn.setAttribute("onclick", "editTodo(this.parentNode)");

  btnSpna.appendChild(dltBtn);
  btnSpna.appendChild(editBtn);
  outPutTodo.appendChild(liEl);
  //________________________________________
  InputTodo.value = "";
  InputTodo.focus();
}

function dltTodo(index) {
  index.parentNode.remove(index);
}

let addTodoDiv = document.getElementsByTagName("div")[0];
let editTodoDiv = document.getElementsByTagName("div")[1];
let editTodoEl = document.getElementsByTagName("input")[1];
let todoindex;

function editTodo(index) {
  editTodoEl.value = index.parentNode.childNodes[0].textContent;
  addTodoDiv.setAttribute("class", "hide");
  editTodoDiv.removeAttribute("class", "hide");

  editTodoEl.focus();
  todoindex = index;
}

function updateTodo() {
  todoindex.parentNode.childNodes[0].textContent = editTodoEl.value;
  editTodoDiv.setAttribute("class", "hide");
  addTodoDiv.removeAttribute("class", "hide");
}
