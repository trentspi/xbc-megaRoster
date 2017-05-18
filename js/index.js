const App = {
  students: [],

  init(listSelector) {
    this.studentList = document.querySelector(listSelector);
    this.key = 0;
    this.setupEventListeners();
  },

  setupEventListeners() {
    document
      .querySelector('#studentForm')
      .addEventListener('submit', this.manageStudents.bind(this));
  },

  manageStudents(event) {
    event.preventDefault();
    const f = event.target;
    const student = {
      id: this.key,
      names: f.studentName.value,
    }
    this.students.unshift(student);

    this.addListItem(this.studentList, this.key);

    ++ this.key;
    f.reset();
  },


  addListItem(studentList, key) {
    const input = document.getElementById('name');
    const list = studentList;
    const line = document.createElement('li');
    const button = document.createElement('button');
    const deleteIcon = document.createElement('i');
    if(document.querySelector('ul')) {
      line.setAttribute("class", "card");
      line.setAttribute("studentid", key);
      button.className += "right btn-floating btn red";

      deleteIcon.setAttribute("class","small material-icons");
      deleteIcon.innerHTML = "delete";
      button.appendChild(deleteIcon);
      button.setAttribute("style","transform: translateY(20%); margin-right:10px");
      button.onclick = () => {
        li = button.parentNode;
        let i = 0;
        while( (li = li.previousSibling) != null )
          i++;
        console.log(i);
        this.students.splice(i,1);
        button.parentNode.parentNode.removeChild(line);
      }
    }
    const randbutton = document.createElement('button');
    randbutton.className += "right btn-floating btn blue";
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
      list.insertBefore(line, list.firstChild);}
    }
  }
App.init('#list');
