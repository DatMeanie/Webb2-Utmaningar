// Deklarerar konstanter för knapparna och resultat texten
const alertButton = document.querySelector('#alert');
const promptButton = document.querySelector('#prompt');
const confirmButton = document.querySelector('#confirm');

const rubrik = document.getElementById('result');
//click-event listeners för knapparna som anropar varsin funktion/metod
alertButton.addEventListener('click', alertFunction);
promptButton.addEventListener('click', promptFunction);
confirmButton.addEventListener('click', confirmFunction);
// Deklarerar funktionerna/metoderna
function alertFunction() {
    alert('Hello!');
    rubrik.textContent = "Alert Used!";
    rubrik.style.visibility = "visible";
}
function promptFunction() {
    var inputPrompt = prompt("Name?", "")
    rubrik.textContent = inputPrompt;
    rubrik.style.visibility = "visible";
}
function confirmFunction() {
    var txt;
    var r = confirm('Are you sure?');
    if (r == true) {
        rubrik.textContent = "Great!";
    } else {
        rubrik.textContent = "Too bad!"
    }
    rubrik.style.visibility = "visible";
}