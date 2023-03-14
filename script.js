const inputTask = document.querySelector('#newTask');
const list = document.querySelector('#list');
const addButton = document.querySelector('.adicionar');
let id = 0;
let tasksArray = [];

//Eventos para adicionar a atividade
addButton.addEventListener('click', (e) => {
  makeTask(inputTask.value, false);
  inputTask.value = '';
});

inputTask.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    makeTask(inputTask.value, false);
    inputTask.value = '';
  }
});

const listTasksInitiate = () => {
  const tempArray = localStorage.getItem('tarefas');
  if (tempArray) {
    tasksArray = JSON.parse(tempArray);
    tasksArray.forEach((task) => {
      makeTask(task, true);
    });
  }
};

//Criar a atividade
const makeTask = (inputTask, begin) => {
  if (!begin) {
    tasksArray.push(inputTask);
    localStorage.setItem('tarefas', JSON.stringify(tasksArray));
  }

  const li = document.createElement('li');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.name = id;
  input.id = id;
  const label = document.createElement('label');
  label.innerText = inputTask;
  label.htmlFor = id;

  const button = document.createElement('button');
  button.innerText = 'D';

  id++;

  const span = document.createElement('span');
  span.classList.add('checkmark');

  label.appendChild(input);
  label.appendChild(span);
  li.appendChild(label);
  li.appendChild(button);
  list.appendChild(li);

  //Riscar a tarefa já realizada
  input.addEventListener('click', () => {
    //---------------------- Fazer isso ---------------------------
    //talvez criar um objeto p/ salvar essa informação no localStorage
    li.classList.toggle('riscado');
  });

  //Deletar atividade
  button.addEventListener('click', () => {
    tasksArray.splice(tasksArray.indexOf(inputTask), 1);
    console.log(tasksArray);
    localStorage.setItem('tarefas', JSON.stringify(tasksArray));
    li.remove();
  });
};

listTasksInitiate();
