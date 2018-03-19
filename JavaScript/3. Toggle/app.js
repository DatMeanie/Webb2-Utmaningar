// Deklarerar konstanter för knapparna och resultat texten
const secretText = document.getElementById("message");
const niceButton = document.getElementById("toggle");

secretText.style.visibility = "hidden";
// Lägger till click-event listeners för knapparna som anropar varsin funktion/metod
niceButton.addEventListener('click', toggleText);
// Deklarerar allt annat här
var control = true;
function toggleText() {
    if(control == true) {
        secretText.style.visibility = "visible";
    } else {
        secretText.style.visibility = "hidden";
    }
    control = !control;
}