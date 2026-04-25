const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function loadTasks(){
    const savedTasks = localStorage.getItem('data');
    if (savedTasks) {
        taskList.innerHTML = savedTasks;
        attachClickEvents();
    }
}

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

addBtn.addEventListener('click', function(){
    const taskText = taskInput.value;

    if (taskText.trim()===""){
        alert("Hoe enter a task bitchass");
        return;
    } 

const card = document.createElement('div');
card.className = 'task-card';   

card.innerHTML = `
    <p>${taskText}</p>
    <div class="card-buttons">
        <button class="complete-btn">Done</button>
        <button class="delete-btn">Delete</button>
    </div>
`

card.querySelector('.delete-btn').addEventListener('click', function(){
    card.remove();
})

card.querySelector('.complete-btn').addEventListener('click', function(){
    card.style.textDecoration = 'line-through';
    card.style.opacity = '0.5';
})

taskList.appendChild(card);
taskInput.value = "";
saveData();
attachClickEvents();


});
function attachClickEvents() {
    const cards = document.querySelectorAll('.task-card');
    cards.forEach(card => {
        card.querySelector('.delete-btn').onclick = function() {
            card.remove();
            saveData(); 
        };
        card.querySelector('.complete-btn').onclick = function() {
            card.style.textDecoration = 'line-through';
            card.style.opacity = '0.5';
            saveData();
        };
    });
}


