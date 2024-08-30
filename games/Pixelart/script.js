const canvas = document.querySelector(".canvas");
const inputSize = document.querySelector(".input-size");
const inputColor = document.querySelector(".input-color");
const colors = document.querySelectorAll(".button-color");
const grid = document.querySelector(".button-grid");
const erase = document.getElementById("eraser");
const download = document.querySelector(".download-button");

let isPaiting = false;

const createElement = (tag, className = "") => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

const paintingPixel = (pixel) => {
    pixel.style.backgroundColor = inputColor.value;
};

const createPixel = () => {
    const pixel = createElement("div", "pixel");

    pixel.addEventListener("mousedown", () => paintingPixel(pixel));

    pixel.addEventListener("mouseover", () => {
        if (isPaiting) paintingPixel(pixel);
    });

    return pixel;
};

const loadCanvas = () => {
    const length = inputSize.value;

    for (let i = 0; i < length; i += 1) {
        const row = createElement("div", "row");

        for (let j = 0; j < length; j += 1) {
            row.append(createPixel());
        }

        canvas.append(row);
    }

    canvas.classList.remove("gap");
    row.forEach((e) => {
        e.classList.remove("gap");
    });
};

const changeGrid = () => {
    const row = document.querySelectorAll(".row");

    canvas.classList.toggle("gap");
    row.forEach((e) => {
        e.classList.toggle("gap");
    });
};

grid.addEventListener("click", changeGrid);

const eraser = () => {
    inputColor.value = "#212529";
};

erase.addEventListener("click", eraser);

inputSize.addEventListener("input", () => {
    canvas.innerHTML = "";
    loadCanvas();
});

canvas.addEventListener("mousedown", () => (isPaiting = true));

canvas.addEventListener("mouseup", () => (isPaiting = false));

colors.forEach((e) => {
    e.addEventListener("click", () => {
        inputColor.value = e.dataset.color;
    });
});

const downloadCanvas = () => {
    canvas.classList.add("dimensions");

    html2canvas(canvas).then(function (canvas) {
        var imageURL = canvas.toDataURL("image/png");

        var link = document.createElement("a");
        link.href = imageURL;
        link.download = "pixelart.png";
        link.click();
    });

    canvas.classList.remove("dimensions");
};

download.addEventListener("click", downloadCanvas);

loadCanvas();

console.log(row);
