// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; charCode 48-57
// const lowerCaseLetters = ["a", "b", "c" , "d", "e", "f", "g", "h"]; charCode 97-122
// const upperCaseLetters = []; charCode 65-90
// const symbols = []; charCode 33-47, 58-64, 123-126


// Генерирует рандомное число от мин до макс
function randomInteger(min, max) {
    return Math.floor(min+Math.random()*(max-min+1))
}

// Генерирует массив из строк если чекбокс выбран
function generateIfCheked(min, max, array) {
    for (min; min <= max; min++) {
        array.push(String.fromCharCode(min))
    }
    return array
}

// Генерирует общий массив с рандомными строками
function generateArrayWithRandomCharacters() {
    let arrayWithRandomCharacters = []
    let checkboxArray = document.querySelectorAll('[name="checkbox_data"]')
    if (checkboxArray[0].checked) {
        generateIfCheked(48, 57, arrayWithRandomCharacters)
    }
    if (checkboxArray[1].checked) {
        generateIfCheked(97, 122, arrayWithRandomCharacters)
    }
    if (checkboxArray[2].checked) {
        generateIfCheked(65, 90, arrayWithRandomCharacters)
    }
    if (checkboxArray[3].checked) {
        generateIfCheked(33, 47, arrayWithRandomCharacters)
        generateIfCheked(58, 64, arrayWithRandomCharacters)
        generateIfCheked(123, 126, arrayWithRandomCharacters)
    }
    
    return arrayWithRandomCharacters
}

// Генерирует пароль
const generatePassword = () => {
    let passwordArray = []
    let arrayWithRandomCharacters = generateArrayWithRandomCharacters()
    let passLength = document.querySelector(".length_config").value
    for (let i = 0; i < passLength; i++) {
        passwordArray.push(arrayWithRandomCharacters[randomInteger(0, arrayWithRandomCharacters.length-1)])
    }
   document.querySelector(".output").textContent= passwordArray.join("")
}

// Генерация пароля при заходе на сайт
generatePassword()

// Эвент листенер т.к. не помещалось 2 онклика
document.querySelector(".password_button").addEventListener("click", generatePassword)
document.querySelector(".password_button").addEventListener("click", copyOnClick)

// Копирует при нажатии на пароль
function copyOnClick() {
    let copyText = document.querySelector('.output')
    navigator.clipboard.writeText(copyText.textContent)
}

// Показывает Click to Copy при наведении на пароль или на кнопку перегенерирования
function revealHidden() {
    let hidden = document.querySelector(".tooltip")

    // hidden.style.visibility = "visible"
    hidden.style.opacity = "1"
}

// Скрывает Click to Copy при отведении курсора с пароля или кнопки перегенирирования
function hideHidden () {
    let hidden = document.querySelector('.tooltip')
    // hidden.style.visibility = 'hidden'
    hidden.style.opacity = "0"
}