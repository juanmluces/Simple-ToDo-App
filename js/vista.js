const formulario = document.querySelector('.inputs form');
const addBtn = document.querySelector('#addNew');
const searchBtn = document.querySelector('#find');
const cancelBtn = document.querySelector('#cancel');
const deleteBtn = document.querySelector('#delete');
let artDelBtn = document.querySelectorAll('.trash')
const main = document.querySelector('main');
const divAlertMessage = document.querySelector('.alert');
const h3AlertMessage = document.querySelector('.alert h3')


addBtn.addEventListener('click', showForm);
searchBtn.addEventListener('click', showForm);
cancelBtn.addEventListener('click', showForm);
deleteBtn.addEventListener('click', showForm);

printTaskList(tareas)

function showForm(event) {
  switch (event.target.id) {
    case 'addNew':
      if (formulario.classList.contains('hide')) {
        searchBtn.parentElement.parentElement.classList.add('hide');
        deleteBtn.parentElement.parentElement.classList.add('hide');
        formulario.classList.remove('hide');
        cancelBtn.parentElement.parentElement.classList.remove('hide');
      } else {
        addNewTask(formulario);
      }
      break;
    case 'find':
      if (formulario.classList.contains('hide')) {
        addBtn.parentElement.parentElement.classList.add('hide');
        deleteBtn.parentElement.parentElement.classList.add('hide');
        formulario.classList.remove('hide');
        cancelBtn.parentElement.parentElement.classList.remove('hide');
      } else {
        searchTask();
      }
      break;
    case 'cancel':
      divAlertMessage.classList.add('hide');
      addBtn.parentElement.parentElement.classList.remove('hide');
      deleteBtn.parentElement.parentElement.classList.remove('hide');
      searchBtn.parentElement.parentElement.classList.remove('hide');
      formulario.classList.add('hide');
      cancelBtn.parentElement.parentElement.classList.add('hide');
      artDelBtn.forEach((article => article.classList.add('hide')));
      break;
    case 'delete':
      if (formulario.classList.contains('hide')) {
        addBtn.parentElement.parentElement.classList.add('hide');
        searchBtn.parentElement.parentElement.classList.add('hide');
        deleteBtn.parentElement.parentElement.classList.add('hide');
        cancelBtn.parentElement.parentElement.classList.remove('hide');
        artDelBtn.forEach((article => article.classList.remove('hide')));
      }
      break;
  }
}

function printTaskList(pList) {
  let listaAPintar = ''
  pList.forEach(article => {
    listaAPintar += `<article class="${article.prioridad.toLowerCase()}">
    <h2>${article.tarea}</h2>
    <div class="trash hide"><img src="./files/trash.svg" alt=""></div>
  </article>`
  })
  main.innerHTML = listaAPintar;
  artDelBtn = document.querySelectorAll('.trash')
  artDelBtn.forEach((article => article.addEventListener('click', deleteElement)));


}


function alertMessage(pMessage) {

  h3AlertMessage.innerText = pMessage;
  divAlertMessage.classList.remove('hide');
}