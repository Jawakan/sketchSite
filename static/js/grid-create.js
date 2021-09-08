function updateBG() {
	this.setAttribute('style', 'background: #444;');
};

function createGrid() {
	let rRow = document.createElement("div");
	rRow.setAttribute('class', 'grid-row');
	rContainer.appendChild(rRow);
	let j = 0;
	while (j < gridPixels) {
	    let rItem = document.createElement("div");
		rItem.setAttribute('class', 'grid-item');
		rItem.addEventListener('mouseenter', updateBG);
		rItem.addEventListener('touchmove', updateBG);
		rRow.appendChild(rItem);
		j++;
	};
};

function createLinesForGrid() {
	try {
		let gDelete = document.getElementById('mainContain');
		gDelete.remove();
	} catch(e) {
		console.log(e);
	};
	rContainer = document.createElement("div");
	rContainer.setAttribute('class', 'grid-container');
	rContainer.setAttribute('id', 'mainContain')
	document.body.appendChild(rContainer);
	let i = 0;
	while (i < gridPixels) {
		createGrid();
		i++
	};
};

function changeGridPixels() {
	console.log("Valid");
	let userWant = prompt("Enter desired pixels in grid (16 to 100)", 64);
	let newGridParam = parseInt(userWant);
	if (newGridParam >= 16 && newGridParam <= 100) {
		gridPixels = newGridParam;
		createLinesForGrid();
	} else {
		alert("Invalid input");
	};
};

const welcome = document.createElement("h1");
welcome.innerText = "Web Sketch";
document.body.appendChild(welcome);
let rContainer = '';

const buttonsArea = document.createElement("div");
buttonsArea.setAttribute('id', 'userButtons')
document.body.appendChild(buttonsArea);

const resetButton = document.createElement("button");
resetButton.textContent = "reset";
buttonsArea.appendChild(resetButton);
resetButton.addEventListener('click', createLinesForGrid);

const resizeButton = document.createElement("button");
resizeButton.textContent = "Resize Pixels";
buttonsArea.appendChild(resizeButton);
resizeButton.addEventListener('click', changeGridPixels);

let gridPixels = 100
createLinesForGrid();
