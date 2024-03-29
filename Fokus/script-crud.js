const btnAddTask = document.querySelector('.app__button--add-task');
const formAddTask = document.querySelector('.app__form-add-task');
const formRemoveTask = document.querySelector('.app__form-footer__button--cancel');
const textArea = document.querySelector('.app__form-textarea');
const ulTask = document.querySelector('.app__section-task-list');
const paragraphDescriptionTask = document.querySelector('.app__section-active-task-description');

const btnRemoveComplete = document.querySelector('#btn-remover-concluidas');
const btnRemoveAll = document.querySelector('#btn-remover-todas');

const cleanForm = () => {
    textArea.value = '';
    formAddTask.classList.add('hidden');
};

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
let taskSelect = null;
let liTaskSelect = null;

function updateTask() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

function createElementTask(task) {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/200/svg">
		    <circle cx="12" cy="12" fill="#FFF></circle>
		    <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
	    </svg>
    `

    const paragraph = document.createElement('p');
    paragraph.textContent = task.descriptionTask;
    paragraph.classList.add('app__section-task-list-item-description');

    const btn = document.createElement('button');
    btn.classList.add('app_button-edit');

    btn.onclick = () => {
        const newDescription = prompt("Qual é o novo nome da tarefa?");
        if (newDescription) {
            paragraph.textContent = newDescription;
            task.descriptionTask = newDescription;
            updateTask();
        };
        
    };

    const btnImage = document.createElement('img');
    btnImage.setAttribute('src', 'imagens/edit.png');
    btn.append(btnImage);

    li.append(svg);
    li.append(paragraph);
    li.append(btn);

    if (task.complete) {
        li.classList.add('app__section-task-list-item-complete');
        btn.setAttribute('disabled', 'disabled');
    } else {
        li.onclick = () => {
            document.querySelectorAll('app__section-task-list-item-active')
                .forEach(element => {
                    element.classList.remove('app__section-task-list-item-active');
                });
            if (taskSelect == task) {
                paragraphDescriptionTask.textContent = '';
                taskSelect = null;
                liTaskSelect = null;
                return;
            };
            taskSelect = task;
            liTaskSelect = li;
            paragraphDescriptionTask.textContent = task.descriptionTask;
            li.classList.add('app__section-task-list-item-active');
    
        };
    };

    return li;
};

btnAddTask.addEventListener('click', () => {
    formAddTask.classList.toggle('hidden');
})

formAddTask.addEventListener('submit', (event) => {
    event.preventDefault();
    const task = {
        descriptionTask: textArea.value
    };
    tasks.push(task);
    const elementTask = createElementTask(task);
    ulTask.append(elementTask);
    updateTask();
    textArea.value = '';
    formAddTask.classList.add('hidden');
});

formRemoveTask.addEventListener('click', cleanForm);

tasks.forEach(task => {
    const elementTask = createElementTask(task);
    ulTask.append(elementTask);
});

document.addEventListener('FocoFinished', () => {
    if (taskSelect && liTaskSelect) {
        liTaskSelect.classList.remove('app__section-task-list-item-active');
        liTaskSelect.classList.add('app__section-task-list-item-complete');
        liTaskSelect.querySelector('button').setAttribute('disabled', 'disabled');
        taskSelect.complete = true;
        updateTask();
    };
});

const removeTask = (onlyComplete) => {
    let selector = ".app__section-task-list-item";
    if (onlyComplete) {
        selector = ".app__section-task-list-item-complete";
    };

    document.querySelectorAll(selector).forEach(element => {
        element.remove();
    });
    tasks = onlyComplete ? tasks.filter(tasks => !tasks.complete) : [];
    updateTask();
};

btnRemoveComplete.onclick = () => removeTask(true);
btnRemoveAll.onclick = () => removeTask(false);
