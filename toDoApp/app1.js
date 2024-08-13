function add() {
    if (editTodoIndex) {
      // Update existing todo item
      editTodoIndex.parentNode.childNodes[0].textContent = inputFormTodo.value;
      addbtn.innerHTML = "Add"; // Change the button label back to "Add"
      editTodoIndex = null; // Reset edit index
    } else {
      // Add new todo item
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
    }
  
    inputFormTodo.value = "";
    inputFormTodo.focus();
  }
  