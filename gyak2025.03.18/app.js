const newTaksBtn = document.querySelector('#new-task-btn');
const tasksElem = document.querySelector('#tasks');

document.querySelector('#new-task-btn').addEventListener('click', () => {
    const text = document.querySelector('#new-task-text').value;
    const taskLi = document.createElement('li');
    taskLi.textContent = text;
    taskLi.addEventListener('click', () => {
        taskLi.style.textDecoration = 'line-through';
    });
    tasksElem.appendChild(taskLi);
});