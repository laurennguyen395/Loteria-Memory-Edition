console.log('hello')
// When start button is pushed we need:

// The landing page HTML to disapepar - setPage() ???

let setGamePlay = {

    clearPage: function () {
        const removeH1 = document.querySelector('h1')
        removeH1.parentNode.removeChild(removeH1)

        const removeH3 = document.querySelector('h3')
        removeH3.parentNode.removeChild(removeH3)

        const removeButton = document.querySelector('button')
        removeButton.parentNode.removeChild(removeButton)

        const removeP = document.querySelector('p')
        removeP.parentNode.removeChild(removeP)
    },
    // A grid of cards to appear - setGrid() ???

    setTable: function () {
        const container = document.createElement('div')
        container.setAttribute('class', 'container')
        document.body.appendChild(container)

        
        
        /*
        const cardsAndFlip = document.createElement('img')
        cardsAndFlip.setAttribute('class' , 'cardsAndFlip' )
        cardsAndFlip.setAttribute('src' , './images/botella1.png')
        container.appendChild(cardsAndFlip)
        */
       

        
    }

}


// The arangement of those cards to shuffle - arangementShuffle() ???
// A timer of 15s to appear - setTimerRemember() ???


document.querySelector('.startButton').addEventListener('click', () => { setGamePlay.clearPage(), setGamePlay.setTable() })

let gamePlay = {
    
    rememberCards: [],

Shuffle: function (){
    for (let i = 2; i <= 8; i++) {
        const newCard = document.createElement('img')
            newCard.setAttribute('src', 'images/card' + i + '.png')
            newCard.setAttribute('value', i)
            gamePlay.rememberCards.push(newCard)
    }
},


/*
playerWin()
playerLose()
setInterval()
resetTable()
flip()
*/

}
console.log(gamePlay.rememberCards)

