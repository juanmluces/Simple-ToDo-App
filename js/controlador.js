
function addNewTask(pForm) {
  const newTask = {
    tarea: pForm[0].value.toLowerCase(),
    prioridad: pForm[1].value
  };
  if (!newTask.tarea || !newTask.prioridad) {
    alertMessage('Los Campos No Pueden Estar Vacios!!')
  } else if (tareas.find(tareaIndividual => tareaIndividual.tarea == newTask.tarea)) {
    alertMessage('La Tarea Ya Está En La Lista')
  } else {
    animateAndPrintTask(newTask);
  }
  resetForm();
}


function searchTaskByName(event) {

  const isAddBtnHidden = addBtn.parentElement.parentElement.classList.contains('hide');

  //comprobamos si estamos en la seccion de buscar revisando si el boton (+) está oculto
  if (isAddBtnHidden) {
    printTaskList(filtrar(event.target.value.toLowerCase(), 'tarea'));
  }
}

function searchTaskByPriority() {
  printTaskList(filtrar(inputPrioridad.value, 'prioridad'));
}

function filtrar(pNombreFiltrar, pTipoFiltrado) {
  const result = tareas.filter(tareaIndividual => {
    return tareaIndividual[pTipoFiltrado].includes(pNombreFiltrar)
  })
  return result
}

function deleteElement() {
  const articleAEliminar = this.parentNode;
  const tareaEliminar = articleAEliminar.innerText.toLowerCase();
  const indexTarea = tareas.findIndex(tareaIndividual => {
    return tareaIndividual.tarea == tareaEliminar
  })
  animateTareasAEliminar(indexTarea);

}