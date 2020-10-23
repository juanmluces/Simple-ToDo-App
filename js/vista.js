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



//segun el boton utilizado se muestran u ocultan los elementos necesitados.

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



function animateAndPrintTask(pTask) {

  //oculta el mensaje de alerta de campo vacio y tarea repetida
  if (!divAlertMessage.classList.contains('hide')) divAlertMessage.classList.add('hide');

  tareas.push(pTask);

  //creo un <article> virtual temporal para hacer la animacion de agregar nueva tarea, luego se sobrescribe por el <article> creado del array modelo.js
  let articleToAnimate = `
          <article id="temporalArticle" class="${pTask.prioridad.toLowerCase()}">
          <h2 id="${pTask.tarea}">${pTask.tarea}</h2>
          <div class="trash hide"><img src="./images/trash.svg" alt=""></div>
          </article>`;

  main.innerHTML += articleToAnimate;
  articleToAnimate = document.getElementById('temporalArticle');

  // el setTimeout de 1ms es para que haga efecto la animacion, sino el <article> aparece en translateX(100vw) sin hacer la transition
  setTimeout(() => {
    articleToAnimate.style.transform = 'translateX(100vw)';
  }, 1);

  setTimeout(() => {
    printTaskList(tareas);
  }, 400);


}



function printTaskList(pList) {
  let listaAPintar = ''

  pList.forEach(article => {
    listaAPintar += `
            <article class="${article.prioridad.toLowerCase()}">
            <h2 id="${article.tarea}">${article.tarea}</h2>
            <div class="trash hide"><img src="./images/trash.svg" alt=""></div>
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


function resetForm() {
  inputTareas.value = '';
  inputPrioridad.value = '';
}

function animateTareasAEliminar(pIndexTareaEliminada) {

  //mando a volar a la derecha el <article> a eliminar
  articuloEliminar = document.getElementById(tareas[pIndexTareaEliminada].tarea).parentNode;
  articuloEliminar.style.transform = 'translateX(100vw)'

  //subo todos los <articles> que se encuentran por debajo del <article> eliminado
  setTimeout(() => {
    for (let i = pIndexTareaEliminada + 1; i < tareas.length; i++) {
      let articuloAnimar = document.getElementById(tareas[i].tarea).parentNode
      articuloAnimar.style.transform = 'translateY(-87px)'
    }
  }, 200);

  //una vez hayan terminado las transiciones, elimino la tarea del array y sobrescribo el DOM
  setTimeout(() => {
    tareas.splice(pIndexTareaEliminada, 1)
    printTaskList(tareas)
    artDelBtn.forEach((article => article.classList.remove('hide')));
  }, 400);

}


//iniciamos la lista por defecto de modelo.js
printTaskList(tareas)