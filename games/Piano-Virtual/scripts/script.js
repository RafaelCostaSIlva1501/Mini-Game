const keys = document.querySelectorAll(".keys");

keys.forEach((key) => {
    key.addEventListener("click", () => {
        playPiano(key.getAttribute("data-note"));
    });
});

const playPiano = (nota) => {
    const audio = new Audio(`audio/${nota}.wav`);

    audio.play();
};

const pianoKeyboard = {
    "Tab": () => {playPiano("1")}, //Dó 4
    "1": () => {playPiano("2")}, // Dó# 4
    "q": () => {playPiano("3")}, // Ré 4
    "2": () => {playPiano("4")}, // Ré# 4
    "w": () => {playPiano("5")}, // Mi 4
    "e": () => {playPiano("6")}, // Fá 4
    "4": () => {playPiano("7")}, // Fá# 4 
    "r": () => {playPiano("8")}, // Sol 4
    "5": () => {playPiano("9")}, // Sol# 4
    "t": () => {playPiano("10")}, // Lá 4
    "6": () => {playPiano("11")}, // Lá# 4
    "y": () => {playPiano("12")}, // Si 4
    "u": () => {playPiano("13")}, // Dó 5
    "8": () => {playPiano("14")}, // Dó# 5
    "i": () => {playPiano("15")}, // Ré 5
    "9": () => {playPiano("16")}, // Ré# 5
    "o": () => {playPiano("17")}, // Mi 5
    "p": () => {playPiano("18")}, // Fá 5
    "-": () => {playPiano("19")}, // Fá# 5
    "Dead": () => {playPiano("20")}, // Sol 5
    "=": () => {playPiano("21")}, // Sol# 5
    "[": () => {playPiano("22")}, // Lá 5
    "Backspace": () => {playPiano("23")}, // Lá# 5
    "Enter": () => {playPiano("24")}, // Si 5
}

document.addEventListener("keydown", (event) => {
    event.preventDefault()

    pianoKeyboard[event.key]()
});
