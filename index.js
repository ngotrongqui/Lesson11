let todoList = [
    { id: 1, value: "Study JavaScript" },
    { id: 2, value: "Study CSS" },
    { id: 3, value: "Study HTML" },
  ];
  
  showItems(todoList);
  
  function showItems(list) {
    /* <li id="item-1" class="todo-item">Study JavaScript</li> */
    let listContent = "";
    for (let index = 0; index < list.length; index++) {
      listContent += `
    <div class="todo-wrapper">
      <li id="item-${list[index].id}" class="todo-item">
        ${list[index].value}
      </li>
      <button onclick="deleteTodoItem(${list[index].id})">Delete</button>
    </div>
    `;
    }
    const ul = document.getElementById("list");
    ul.innerHTML = listContent;
  }
  
  function addNewItem() {
    const input = document.getElementById("content");
    const content = input.value;
    const item = { id: todoList.length + 1, value: content };
    todoList.push(item);
  
    // const li = document.createElement("li");
    // li.setAttribute("id", "item-" + item.id);
    // li.setAttribute("class", "todo-item");
    // li.innerHTML = item.value;
    const newItem = `
    <div class="todo-wrapper">
      <li id="item-${item.id}" class="todo-item">
        ${item.value}
      </li>
      <button onclick="deleteTodoItem(${item.id})">Delete</button>
    </div>
    `;
  
    const ul = document.getElementById("list");
    ul.insertAdjacentHTML("beforeend", newItem);
    input.value = "";
  }
  
  function deleteTodoItem(id) {
    todoList = todoList.filter((element) => element.id !== id);
    showItems(todoList);
  }
  
  function search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('todo-wrapper');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="todo-item";                 
        }
    }
  }
  
  //Edit an existing task.
  
  var editTask=function(){
    console.log("Edit Task...");
    console.log("Change 'edit' to 'save'");
    
    
    var listItem=this.parentNode;
    
    var editInput=listItem.querySelector('input[type=text]');
    var li=listItem.querySelector("li");
    var containsClass=listItem.classList.contains("todo-item");
  
        if(containsClass){
          li.innerText=editInput.value;
        }else{
          editInput.value=li.innerText;
        }
    
        //toggle .editmode on the parent.
        listItem.classList.toggle("todo-item");
    }
    