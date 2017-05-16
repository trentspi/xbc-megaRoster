const App = {
  init() {
    const listForm = document.querySelector('form');
    listForm.addEventListener('submit', this.handleSubmit.bind(this));
  },
  handleSubmit(event) {
    event.preventDefault();
    const listDiv = document.querySelector('.listDiv');


  },
}

App.init();

//Block Wrapping
