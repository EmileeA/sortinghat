const students = [];
const houses = ["Slytherin", "Ravenclaw", "Gryffindor", "Hufflepuff"];
const assignHouse = () => {
const minNumber = 0;
const maxNumber = 3;
const randomNumber = Math.floor(Math.random() *(maxNumber) + minNumber); 
return houses [randomNumber];
};




//Math.floor((Math.random() * 10) + 1); 


const expelledStudents = [];
let studentCounter = 1;

const hideInputForm = () => {
  document.getElementById("hiddenInput").style.display = "none";
};

const showInputForm = () => {
  document.getElementById("hiddenInput").style.display = "block";
};

const printToDom = (divId, textToPrint) => {
  const selectDiv = document.getElementById(divId);
  selectDiv.innerHTML = textToPrint;
};

const addDeleteEvents = () => {
  const deleteButtons = document.getElementsByClassName("deleteButton");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteFunction);
  }
};
const studentBuilder = arrayToPrint => {
  let domString = "";
  students.forEach(student => {
    domString += `<div class="card col-3 mt-1 mb-2">`;
    domString += `<div class="card-body">`;
    domString += `<h5 class="card-title">${student.name}</h5>`;
    domString += `<h5 class="card-title">${student.house}</h5>`;
    domString += `<a class="btn btn-warning deleteButton" id="${student.id}">Expel!</a>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  printToDom("sortedStudents", domString);
  addDeleteEvents();
};

const addStudent = e => {
  e.preventDefault();
  const inputName = document.getElementById("inputName").value;
  const newName = {
    house: assignHouse (),
    name: inputName,
    id: `student${studentCounter}`
  };
  students.push(newName);
  studentCounter++;

  studentBuilder(students);
  inputName.value = "";
};

const deleteFunction = e => {
  console.log(e.currentTarget);
  const buttonId = e.target.id;
  students.forEach((student, index) => {
    if (student.id === buttonId) {
      students.splice(index, 1);
    }

  });
  studentBuilder(students);
};

const eventListener = () => {
  document
    .getElementById("startSorting")
    .addEventListener("click", showInputForm);
  document.getElementById("sortBtn").addEventListener("click", addStudent);
};

const init = () => {
  hideInputForm();
  eventListener();
};

init();

