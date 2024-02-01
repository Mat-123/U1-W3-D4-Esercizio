const createdNumbers = [];

const generateNumbers = (createdNumbers) => {
  const numbers = document.getElementById("numbers");

  for (let i = 0; i < 76; i++) {
    createdNumbers.push([]);
    const numCellDiv = document.createElement("div");
    numCellDiv.className = "num";
    const numCellH3 = document.createElement("h3");
    numCellH3.innerText = i + 1;

    numCellDiv.appendChild(numCellH3);
    numbers.appendChild(numCellDiv);
  }
};
window.onload = function () {
  const numberOfTombola = createdNumbers;
  generateNumbers(numberOfTombola);
};
