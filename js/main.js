// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

// Add Task Function
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create task item
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  taskItem.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;

  // Add Delete Functionality
  taskItem.querySelector('.delete-btn').addEventListener('click', () => {
    taskItem.remove();
    updateTaskCount();
  });

  // Append task to list
  taskList.appendChild(taskItem);

  // Clear input field
  taskInput.value = '';

  // Update task count
  updateTaskCount();
});

// Update Task Count
function updateTaskCount() {
  const tasks = document.querySelectorAll('.task-item');
  taskCount.textContent = `You Have ${tasks.length} Task${tasks.length !== 1 ? 's' : ''}`;
}
