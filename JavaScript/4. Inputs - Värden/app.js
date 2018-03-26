// Deklarerar konstanter för komponenterna
const checkBox = document.getElementById('checkbox');
const checkBoxResultat = document.getElementById('check-resultat');
const textBox = document.getElementById('textbox');
const textResultat = document.getElementById('text-resultat');
const selectionList = document.getElementById('select');
const selectionResultat = document.getElementById('select-resultat');

const submitButton = document.getElementById('resultat');
// Event-listeners
submitButton.addEventListener('click', checkResultat);
// Deklarerar allt annat här
function checkResultat () {
    if(checkBox.checked){
        checkBoxResultat.textContent = "Checked!";
    } else {
        checkBoxResultat.textContent = "Not Checked";
    }
    textResultat.textContent = textBox.value;
    selectionResultat.textContent = selectionList.selectedIndex + 1;
}
