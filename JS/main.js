class Todo {
  constructor() {
    this.input = document.querySelector('input');
    this.ul = document.querySelector('ul');
    this.form = document.querySelector('form');
    this.tasks = [];
    this.registerEvent();
    this.form.reset();
  }
  
  registerEvent() {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      if(this.input.value.length === 0) {
        return;
      }
      this.createTask(this.input.value);
      this.form.reset();
    });
  }
  
  render() {
    this.ul.innerHTML = '';
    this.tasks.forEach((task) => {
      const li = document.createElement('li');
      li.textContent = task;
      this.ul.appendChild(li);
      const deleteButton = this.createDeleteButton(task);
      li.appendChild(deleteButton);
    });
  }
  
  createTask(task) {
    this.tasks.push(task);
    this.render();
  }
   deleteTask(task){
   	//get the desired input we want to delete
    const index = this.tasks.indexOf(task);
  	this.tasks.splice(index, 1);
  	this.render();
  }
  
  createDeleteButton(task) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = ' X ';
    deleteButton.addEventListener('click', () => {
   		this.deleteTask(task);
    });
    return deleteButton;
  }
  
}



new Todo();

//add edit button + complete button 