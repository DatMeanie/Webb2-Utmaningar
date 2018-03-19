// Deklarerar konstanter för knapparna
const colourButton = document.getElementById('color');
const sizeButton = document.getElementById('size');
const fontSizeButton = document.getElementById('font');
// Lägger till click-event listeners för knapparna som anropar varsin funktion/metod
colourButton.addEventListener('click', colourSwitch)
sizeButton.addEventListener('click', sizeSwitch)
fontSizeButton.addEventListener('click', fontSizeSwitch)
// Deklarera funktionerna/metoderna här
function colourSwitch() {
    this.style.backgroundColor = "hotpink";
}
function sizeSwitch() {
    this.style.width = "400px";
}
function fontSizeSwitch() {
    this.style.fontSize = "40px";
}