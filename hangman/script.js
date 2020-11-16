const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)]

let correctLetters = []; 
let wrongLetters = []

// Show hidden word
function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord.split('')
    .map(letter => `
    <span class="letter"> ${correctLetters.includes(letter) ? letter : ''} </span>`)
    .join('')}`

    const innerWord = wordEl.innerText.replace(/\n/g, '');

    if(innerWord === selectedWord) {
        finalMessage.innerText = 'Congratulations! You won!';
        popup.style.display = 'flex';
    }
}

function updateWrongLettersEl() {
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `

    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length; 

        if (index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    })

    if(wrongLetters.length === figureParts.length) {
        finalMessage.innerText = 'Unfortunatly you lost.';
        popup.style.display = 'flex'
    }
}

function showNotification(){
    console.log('show notification');
     notification.classList.add('show');

     setTimeout(()=> {
         notification.classList.remove('show'); 
     }, 2000)
 }
// Key down letter press
window.addEventListener('keydown', e => {
    if (e.code >= 'KeyA' && e.code <= 'KeyZ') {
        const letter = e.key; 

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);

                displayWord();
            } else {
                showNotification();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                
                updateWrongLettersEl();
            } else {
                showNotification();
            }
        }
    }
});

playAgainBtn.addEventListener('click', e => {
    correctLetters= []; 
    wrongLetters =[];
    
    selectedWord = words[Math.floor(Math.random() * words.length)]
    displayWord(); 
    updateWrongLettersEl(); 

    popup.style.display = 'none'


})

displayWord();
