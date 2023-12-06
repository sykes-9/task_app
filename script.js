const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
    // Display an alert if the input is empty
        alert('Please enter a task!');
    }
    else{
        // Create a new li element
        let li = document.createElement("li");
        // Set the innerHTML of the li element to the value of the inputBox
        li.innerHTML = inputBox.value;
        // Append the li element to the listContainer (assuming listContainer is defined somewhere in your code)
        listContainer.appendChild(li);


        // Create a <span> element with the multiplication sign
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        // Append the <span> to the <li>
        li.appendChild(span);
    }

    // Clear the input field after adding the task
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        // If the clicked element is an <li>, toggle the "checked" class
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        // If the clicked element is a <span>, remove its parent <li>
        e.target.parentElement.remove();
        saveData();
    } 
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();