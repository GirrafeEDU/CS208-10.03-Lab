document.addEventListener("DOMContentLoaded", function() {
    const addBtn = document.getElementById("addBtn");
    addBtn.addEventListener("click", addBtnClick);
    document.getElementById("newTask").addEventListener("keyup", (event) => {
        if(event.key === "Enter") {
            addBtnClick(event);
        }
    });

        
});

function addBtnClick(event) {
    let inputBox = document.getElementById("newTask");
    let taskContent = inputBox.value;
    if(taskContent.trim() !== "")
    {
        addTask(taskContent);
        inputBox.value = "";
        inputBox.focus();
        
    }
    
}

function addTask(taskContent) {
    //create new list item and attach it to thet task list
    let taskList = document.querySelector("ol[id=taskList]")
    let newItem = document.createElement("li");
    newItem.innerHTML = '<span class="task-text">' + taskContent + '</span><button class="done-btn">&#10006;</button>';
    taskList.appendChild(newItem);

    let allRemoveBtns = document.querySelectorAll('.done-btn');
    allRemoveBtns[allRemoveBtns.length - 1].addEventListener("click", removeTask);

}

function removeTask(event) {
    let itemToBeRemoved = event.target.parentNode;
    itemToBeRemoved.parentNode.removeChild(itemToBeRemoved);
}
