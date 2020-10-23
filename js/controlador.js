

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
    divAlertMessage.classList.add('hide');
    tareas.push(newTask);
    animateNewTask(newTask)
    setTimeout(() => {
      printTaskList(tareas);
    }, 400);
  }
  inputTareas.value = '';
  inputPrioridad.value = '';
}


function searchTaskByName(event) {
  if (addBtn.parentElement.parentElement.classList.contains('hide')) {
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

  animateTareasEliminada(indexTarea);
  setTimeout(() => {
    tareas.splice(indexTarea, 1)
    printTaskList(tareas)
    artDelBtn.forEach((article => article.classList.remove('hide')));
  }, 400);
}