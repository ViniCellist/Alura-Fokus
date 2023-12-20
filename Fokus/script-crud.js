const btnAddTask = document.querySelector('.app__button--add-task')
const formAddTask = document.querySelector('.app__form-add-task')
const textArea = document.querySelector('.app__form-textarea')
const ulTask = document.querySelector('.app__section-task-list')

const tasks = JSON.parse(localStorage.getItem('tasks')) || []

function updateTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}

function createElementTask(task) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/200/svg">
		    <circle cx="12" cy="12" fill="#FFF></circle>
		    <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
	    </svg>
    `

    const paragraph = document.createElement('p')
    paragraph.textContent = task.descriptionTask
    paragraph.classList.add('app__section-task-list-item-description')

    const btn = document.createElement('button')
    btn.classList.add('app_button-edit')

    btn.onclick = () => {
        const newDescription = prompt("Qual é o novo nome da tarefa?")
        paragraph.textContent = newDescription
        task.descriptionTask = newDescription
        updateTask()
    }

    const btnImage = document.createElement('img')
    btnImage.setAttribute('src', 'imagens/edit.png')
    btn.append(btnImage)

    li.append(svg)
    li.append(paragraph)
    li.append(btn)

    return li
}

btnAddTask.addEventListener('click', () => {
    formAddTask.classList.toggle('hidden')
})

formAddTask.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = {
        descriptionTask: textArea.value
    }
    tasks.push(task)
    const elementTask = createElementTask(task)
    ulTask.append(elementTask)
    updateTask()
    textArea.value = ''
    formAddTask.classList.add('hidden')
})

tasks.forEach(task => {
    const elementTask = createElementTask(task)
    ulTask.append(elementTask)
})