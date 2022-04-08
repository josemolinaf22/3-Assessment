const favColor = () => {
    alert('My favorite color is maroon at the moment. it changes by season!')
}

const favPlace = () => {
    alert('Snowboarding while it is snowing, when are we going?')
}

const favRitual = () => {
    alert('Hanging with friends/family')
}



let btnFavColor = document.querySelector('#color')
let btnFavPlace = document.querySelector('#place')
let btnFavRitual = document.querySelector('#ritual')

btnFavColor.addEventListener('click', favColor)
btnFavPlace.addEventListener('click', favPlace)
btnFavRitual.addEventListener('click', favRitual)