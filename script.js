const inputTask = document.querySelector('#newTask');
const list = document.querySelector('#list');
const addButton = document.querySelector('.adicionar');
let id = 0;

addButton.addEventListener('click', (e) => {
  makeTask(inputTask.value);
  inputTask.value = '';
});

inputTask.addEventListener('keyup', (event) => {
  if (event.code === 'Enter') {
    makeTask(inputTask.value);
    inputTask.value = '';
  }
});

const makeTask = (inputTask) => {
  const li = document.createElement('li');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.name = id;
  input.id = id;
  const label = document.createElement('label');
  label.innerText = inputTask;
  label.htmlFor = id;
  id++;

  const span = document.createElement('span');
  span.classList.add('checkmark');

  label.appendChild(input);
  label.appendChild(span);
  li.appendChild(label);
  list.appendChild(li);

  //Riscar a tarefa já realizada
  input.addEventListener('click', () => {
    li.classList.toggle('riscado');
    // !input.checked ? (input.checked = true) : (input.checked = false);
    console.log('teste');
  });
};
