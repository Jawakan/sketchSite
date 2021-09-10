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
    let userWant = sizeSlider.value;
	let newGridParam = parseInt(userWant);
	if (newGridParam >= 16 && newGridParam <= 64) {
		gridPixels = newGridParam;
		createLinesForGrid();
	} else {
		console.log("not in parameters")
	};
};

const welcome = document.createElement("h1");
welcome.innerText = "Web Sketch";
document.body.appendChild(welcome);
const instructSize = document.createElement("h4");
instructSize.innerText = "Grid can be sized between 16 and 64 pixels";
document.body.appendChild(instructSize);

let rContainer = '';

const buttonsArea = document.createElement("div");
buttonsArea.setAttribute('id', 'userButtons')
document.body.appendChild(buttonsArea);

const resetButton = document.createElement("button");
resetButton.textContent = "reset";
buttonsArea.appendChild(resetButton);
resetButton.addEventListener('click', createLinesForGrid);

const sizeSlider = document.createElement("input");
sizeSlider.setAttribute('type', 'number');
sizeSlider.setAttribute('id', 'sizeInput');
sizeSlider.setAttribute('min', '16');
sizeSlider.setAttribute('max', '64');
sizeSlider.setAttribute('step', '1');
sizeSlider.setAttribute('size', '2');
sizeSlider.title = "Number of pixels";
sizeSlider.value = 44;
buttonsArea.appendChild(sizeSlider);

const resizeButton = document.createElement("button");
resizeButton.textContent = "resize pixels";
buttonsArea.appendChild(resizeButton);
resizeButton.addEventListener('click', changeGridPixels);

let gridPixels = 44
createLinesForGrid();

const gHubLink = document.createElement("a");
gHubLink.textContent = "View source on GitHub";
gHubLink.title = "Open project page on GitHub";
gHubLink.setAttribute('href', 'https://github.com/Jawakan/sketchSite');
gHubLink.setAttribute('id', 'mySource')
document.body.appendChild(gHubLink);