const formulario = document.querySelector('.inputs form');
const addBtn = document.querySelector('#addNew');
const searchBtn = document.querySelector('#find');
const cancelBtn = document.querySelector('#cancel');
const deleteBtn = document.querySelector('#delete');


addBtn.addEventListener('click', showForm);
searchBtn.addEventListener('click', showForm);
cancelBtn.addEventListener('click', showForm);
deleteBtn.addEventListener('click', showForm);

function showForm(event) {
  switch (event.target.id) {
    case 'addNew':
      if (formulario.classList.contains('hide')) {
        searchBtn.parentElement.parentElement.classList.add('hide');
        deleteBtn.parentElement.parentElement.classList.add('hide');
        formulario.classList.remove('hide');
        cancelBtn.parentElement.parentElement.classList.remove('hide');
      } else {
        addNewTask();
      }
      break;
    case 'find':
      console.log('find btn');
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
      addBtn.parentElement.parentElement.classList.remove('hide');
      deleteBtn.parentElement.parentElement.classList.remove('hide');
      searchBtn.parentElement.parentElement.classList.remove('hide');
      formulario.classList.add('hide');
      cancelBtn.parentElement.parentElement.classList.add('hide');
      break;
    case 'delete':
      console.log('delete btn');
      if (formulario.classList.contains('hide')) {
        addBtn.parentElement.parentElement.classList.add('hide');
        searchBtn.parentElement.parentElement.classList.add('hide');
        deleteBtn.parentElement.parentElement.classList.add('hide');
        cancelBtn.parentElement.parentElement.classList.remove('hide');
      }
      break;
  }
}