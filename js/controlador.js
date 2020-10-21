

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
    printTaskList(tareas);
  }
}


function searchTask() {
  console.log('task searched');
}

function deleteElement(event) {
  const articleAEliminar = event.target.parentNode.parentNode;
  const tareaEliminar = articleAEliminar.innerText.toLowerCase();
  console.log(tareaEliminar);
  const indexTarea = tareas.findIndex(tareaIndividual => {
    return tareaIndividual.tarea == tareaEliminar
  })

  console.log(indexTarea);
  tareas.splice(indexTarea, 1)

  printTaskList(tareas)
  artDelBtn.forEach((article => article.classList.remove('hide')));
}