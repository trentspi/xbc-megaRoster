const App = {
  init() {
    const listForm = document.querySelector('form');
    listForm.addEventListener('submit', this.handleSubmit.bind(this));
  },
  handleSubmit(event) {
    event.preventDefault();
    const listDiv = document.querySelector('.listDiv');
    this.addListItem(listDiv);
  },
  addListItem(listDiv) {
    if(document.querySelector('ul')) {
      const input = document.getElementById('name');
      const list = document.getElementById('list');
      const line = document.createElement('li');
      line.setAttribute("class", "card");
      const button = document.createElement('button');
      button.className += "right btn-floating btn red";
      const deleteIcon = document.createElement('i');
      deleteIcon.setAttribute("class","small material-icons");
      deleteIcon.innerHTML = "delete";
      button.appendChild(deleteIcon);
      button.setAttribute("style","transform: translateY(20%); margin-right:10px");
      button.onclick = () => {
        button.parentNode.parentNode.removeChild(line);
      }

      const randbutton = document.createElement('button');
      randbutton.className += "right btn-floating btn red";
      const randIcon = document.createElement('i');
      randIcon.setAttribute("class","small material-icons");
      randIcon.innerHTML = "settings";
      randbutton.appendChild(randIcon);
      randbutton.setAttribute("style","transform: translateY(20%); margin-right:10px");
      randbutton.onclick = () => {
        const colors = [
          "pink lighten-1",
          "purple lighten-1",
          "red",
          "deep-purple lighten-3",
          "indigo accent-2",
          "light-blue",
          "lime accent-2",
          "green darken-4",
          "amber",
          "orange accent-3",
          "deep-orange",
          "blue accent-1",
          "purple darken-4",
          "grey darken-2"
        ];
        const textColors = [
          "grey",
          "white",
          "black",
          "grey-darken-4",
          "grey-lighten-4",
          "yellow",
          "red-accent-1"
        ]
        let i = Math.floor(Math.random() * 13);
        let j = Math.floor(Math.random() * 6);
        randbutton.parentNode.className = "card " + colors[i] + " " + textColors[j] + "-text";
      }

      if(input.value) {
        line.textContent = input.value;
        line.style.fontSize = "40px";
        line.appendChild(button);
        line.appendChild(randbutton);
        list.appendChild(line);
        list.insertBefore(line, list.childNodes[0]);
        listDiv.appendChild(list);
      }
    }

  },
}
App.init();
