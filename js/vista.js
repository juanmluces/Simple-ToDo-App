const formulario = document.querySelector('.inputs form');
const inputTareas = document.querySelector('#tareaNueva');
const inputPrioridad = document.querySelector('#prioridadNueva')
const addBtn = document.querySelector('#addNew');
const searchBtn = document.querySelector('#find');
const cancelBtn = document.querySelector('#cancel');
const deleteBtn = document.querySelector('#delete');
const main = document.querySelector('main');
const divAlertMessage = document.querySelector('.alert');
const h3AlertMessage = document.querySelector('.alert h3')
let artDelBtn = document.querySelectorAll('.trash')


addBtn.addEventListener('click', showForm);
searchBtn.addEventListener('click', showForm);
cancelBtn.addEventListener('click', showForm);
deleteBtn.addEventListener('click', showForm);
inputTareas.addEventListener('input', searchTaskByName);


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
        searchTaskByPriority();
      }
      break;
    case 'cancel':
      printTaskList(tareas)
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
    listaAPintar += `
    <article class="${article.prioridad.toLowerCase()}">
      <h2 id="${article.tarea}">${article.tarea}</h2>
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

function animateTareasEliminada(pIndexTareaEliminada) { //aqui estoy

  articuloEliminar = document.getElementById(tareas[pIndexTareaEliminada].tarea).parentNode;
  articuloEliminar.style.transform = 'translateX(100vw)'
  setTimeout(() => {
    for (let i = pIndexTareaEliminada + 1; i < tareas.length; i++) {
      let articuloAnimar = document.getElementById(tareas[i].tarea).parentNode
      articuloAnimar.style.transform = 'translateY(-87px)'
    }
  }, 200);
}