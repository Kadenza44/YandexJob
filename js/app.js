const uppercaseHeader = document.querySelector('.headerJobInYandex')
console.dir(uppercaseHeader)
//uppercaseHeader.style.visibility = 'hidden'
uppercaseHeader.style.textTransform = 'uppercase'
uppercaseHeader.style.fontSize = '35px'
uppercaseHeader.style.color = 'red'
document.body.style.backgroundColor = 'rgba(0, 200, 5, .6)'

function flashUppercaseHeader () {
    if (uppercaseHeader.style.visibility === 'hidden') {
        uppercaseHeader.style.visibility = 'visible'
    } else {
        uppercaseHeader.style.visibility = 'hidden'
    }
}

setInterval (flashUppercaseHeader, 1000)