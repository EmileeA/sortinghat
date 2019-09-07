const students = [];
const houses = ["Slytherin", "Ravenclaw", "Gryffindor", "Hufflepuff"];

const expelledStudents = [];

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

const cardBuilder = () => {
  let domString = "";
  students.forEach(student => {
    domstring += `<div class="card">`;
    domstring += `<div class="name">${student.name}</div>`;
    domstring += `<div class="house">${student.house}</div>`;
    domstring += `<button class="btn">Expel</button>`;
    domstring += `</div>`;
  });
  printToDom("sortedStudents", domString);
};

const eventListener = () => {
  document
    .getElementById("startSorting")
    .addEventListener("click", showInputForm);
};

const init = () => {
  hideInputForm();
  eventListener();
};

init();
