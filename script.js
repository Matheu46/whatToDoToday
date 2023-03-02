const inputTask = document.querySelector('#newTask');
const list = document.querySelector('#list');
const id = 0;

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

  li.appendChild(input);
  li.appendChild(label);
  list.appendChild(li);

  li.addEventListener('click', () => {
    const input = li.firstChild;

    console.log(li.firstChild);
  });
};

const taskDone = () => {
  console.log('teste');
};
