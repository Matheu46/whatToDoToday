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
    makeTask(inputTask.value, false, false);
    inputTask.value = '';
  }
});

const listTasksInitiate = () => {
  const tempArray = localStorage.getItem('tarefas');
  if (tempArray) {
    tasksArray = JSON.parse(tempArray);
    tasksArray.forEach((task) => {
      makeTask(task.task, true, task.done);
    });
  }
  console.log(tasksArray);
};

//Criar a atividade
const makeTask = (inputTask, begin, done) => {
  if (!begin) {
    tasksArray.push({ task: inputTask, done: false });
    localStorage.setItem('tarefas', JSON.stringify(tasksArray));
    console.log(tasksArray);
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

  //Checar se a tarefa já estava marcada com feita
  if (done) {
    riscar(li);
    input.checked = true;
  }

  //Riscar a tarefa já realizada
  input.addEventListener('click', () => {
    //---------------------- Fazer isso ---------------------------
    //talvez criar um objeto p/ salvar essa informação no localStorage
    if (tasksArray[input.id].done) {
      tasksArray[input.id].done = false;
    } else {
      tasksArray[input.id].done = true;
    }
    localStorage.setItem('tarefas', JSON.stringify(tasksArray));
    riscar(li);
  });

  //Deletar atividade
  button.addEventListener('click', () => {
    tasksArray.splice(tasksArray[input.id], 1);
    localStorage.setItem('tarefas', JSON.stringify(tasksArray));
    li.remove();
  });
};

const riscar = (li) => {
  li.classList.toggle('riscado');
};

listTasksInitiate();
