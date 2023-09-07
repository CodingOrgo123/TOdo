const task = document.getElementById("to-do-box");
const list = document.getElementById("list");

function addTask() {
    if (task.value === '') {
        alert("You Need To write Something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = task.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    task.value = "";
}
list.addEventListener("click", function(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
    } else if (e.target.tagName == "SPAN") {
        e.target.parentElement.remove();
    }

}, false)