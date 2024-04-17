function addTask() {
    let input = document.getElementById("taskInput").value;
    if (input === '') {
        alert("No task was entered!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = input;

    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.className = "close";
    closeButton.onclick = function() {
        li.remove();
    };

    li.appendChild(closeButton);
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = '';
}
