let toDoDiv = document.getElementsByTagName("div")[0];
let inputFormTodo = document.getElementsByTagName("input")[0];
let addbtn = document.getElementsByTagName("button")[0];
let outPutCon = document.getElementsByTagName("ol")[0];
let editTodoIndex = null;

console.log(toDoDiv, inputFormTodo, addbtn, outPutCon);

function add() {
  if (editTodoIndex) {
    editTodoIndex.parentNode.childNodes[0].textContent = inputFormTodo.value;
    addbtn.innerHTML = "Add";
    editTodoIndex = null;
  } else {
    let liEl = document.createElement("li");
    let textSpan = document.createElement("span");
    let btnSpan = document.createElement("span");

    liEl.appendChild(textSpan);
    liEl.appendChild(btnSpan);

    let textSpanText = document.createTextNode(inputFormTodo.value);
    textSpan.appendChild(textSpanText);

    let deleteBtn = document.createElement("button");
    let deleteBtnText = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.setAttribute("onclick", "dltTodo(this.parentNode)");
    let edtBtn = document.createElement("button");
    let editBtnText = document.createTextNode("Edit");
    edtBtn.appendChild(editBtnText);
    edtBtn.setAttribute("onclick", "editTodo(this.parentNode)");

    outPutCon.appendChild(liEl);
    btnSpan.appendChild(deleteBtn);
    btnSpan.appendChild(edtBtn);

    inputFormTodo.value = "";
    inputFormTodo.focus();
  }
}
function dltTodo(deleteInedx) {
  deleteInedx.parentNode.remove(deleteInedx);
}

function editTodo(editIndex) {
  inputFormTodo.value = editIndex.parentNode.childNodes[0].textContent;
  addbtn.innerHTML = "Update";
  editTodoIndex = editIndex;
}
