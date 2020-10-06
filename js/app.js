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
    setInterval1: function () {
        const timerOne = document.createElement('p')
        timerOne.setAttribute('class', 'fifteenSeconds')
        document.body.appendChild(timerOne)
        timerOne.innerHTML = 'Timer: 15s'



        let timer = 15
        const timerInterval = setInterval(() => {
            //What we do each second
            if (timer === 0) {
                clearInterval(timerInterval)
                console.log('Find all of the card values')

                //*** NEED TO *** Flip cards, set new 30s timer, 
                //add click events on all cards. 
                //compare cards to what cpu asks for.
                // find and calculate total.
            } else {
                timer--
                console.log(timer)
            }
            //get it to show up on the DOM
            document.querySelector('.fifteenSeconds').innerHTML = `Timer: ${timer}s`
        }, 1000)
    },

    setTable: function () {
        this.getCards()
        const container = document.createElement('div')
        container.setAttribute('class', 'container')
        document.body.appendChild(container)

        //const cardGrid = document.querySelector('div')
        //cardGrid.setAttribute('class' , 'cardGrid')
        //container.appendChild(cardGrid)
        const cardGrid = document.createElement('div')
        cardGrid.setAttribute('class', 'parent')
        container.appendChild(cardGrid)


        //Setting each Div
        let div1 = document.createElement('img')
        div1.setAttribute('class', 'cardContainer')
        div1.setAttribute('id', 'div1')
        div1.setAttribute('src' , '')
        cardGrid.appendChild(div1)




        const div2 = document.createElement('img')
        div2.setAttribute('class', 'cardContainer')
        div2.setAttribute('id', 'div2')
        cardGrid.appendChild(div2)



        const div3 = document.createElement('img')
        div3.setAttribute('class', 'cardContainer')
        div3.setAttribute('id', 'div3')
        cardGrid.appendChild(div3)

        const div4 = document.createElement('img')
        div4.setAttribute('class', 'cardContainer')
        div4.setAttribute('id', 'div4')
        cardGrid.appendChild(div4)

        const div5 = document.createElement('img')
        div5.setAttribute('class', 'cardContainer')
        div5.setAttribute('id', 'div5')
        cardGrid.appendChild(div5)

        const div6 = document.createElement('img')
        div6.setAttribute('class', 'cardContainer')
        div6.setAttribute('id', 'div6')
        cardGrid.appendChild(div6)

        const div7 = document.createElement('img')
        div7.setAttribute('class', 'cardContainer')
        div7.setAttribute('id', 'div7')
        cardGrid.appendChild(div7)



        const div8 = document.createElement('img')
        div8.setAttribute('id', 'div8')
        div8.setAttribute('class', 'cardContainer')
        cardGrid.appendChild(div8)

        const div9 = document.createElement('img')
        div9.setAttribute('class', 'cardContainer')
        div9.setAttribute('id', 'div9')
        cardGrid.appendChild(div9)

        const div10 = document.createElement('img')
        div10.setAttribute('class', 'cardContainer')
        div10.setAttribute('id', 'div10')
        cardGrid.appendChild(div10)

        const div11 = document.createElement('img')
        div11.setAttribute('class', 'cardContainer')
        div11.setAttribute('id', 'div11')
        cardGrid.appendChild(div11)




        const div12 = document.createElement('img')
        div12.setAttribute('class', 'cardContainer')
        div12.setAttribute('id', 'div12')
        cardGrid.appendChild(div12)

        const div13 = document.createElement('img')
        div13.setAttribute('class', 'cardContainer')
        div13.setAttribute('id', 'div13')
        cardGrid.appendChild(div13)

        const div14 = document.createElement('img')
        div14.setAttribute('class', 'cardContainer')
        div14.setAttribute('id', 'div14')
        cardGrid.appendChild(div14)

        const div15 = document.createElement('img')
        div15.setAttribute('class', 'cardContainer')
        div15.setAttribute('id', 'div15')
        cardGrid.appendChild(div15)




        const div16 = document.createElement('img')
        div16.setAttribute('class', 'cardContainer')
        div16.setAttribute('id', 'div16')
        cardGrid.appendChild(div16)

        const div17 = document.createElement('img')
        div17.setAttribute('class', 'cardContainer')
        div17.setAttribute('id', 'div17')
        cardGrid.appendChild(div17)

        const div18 = document.createElement('img')
        div18.setAttribute('class', 'cardContainer')
        div18.setAttribute('id', 'div18')
        cardGrid.appendChild(div18)



    },
    rememberCards: [],

    getCards: function () {
        for (let i = 1; i <= 18; i++) {
            const newCard = document.createElement('img')
            newCard.setAttribute('src', 'images/card' + i + '.png')
            newCard.setAttribute('value', i)
            this.rememberCards.push(newCard)
        }
    },
    shuffle: function () {
        for (let i = this.rememberCards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let mixUp = this.rememberCards[i]
            this.rememberCards[i] = this.rememberCards[j]
            this.rememberCards[j] = mixUp
        }
    },
    deal: function () {
        this.shuffle()
        let playerCard1 = setGamePlay.rememberCards
        let playerCard2 = setGamePlay.rememberCards
        let playerCard3 = setGamePlay.rememberCards
        let playerCard4 = setGamePlay.rememberCards
        let playerCard5 = setGamePlay.rememberCards
        let playerCard6 = setGamePlay.rememberCards
        let playerCard7 = setGamePlay.rememberCards
        let playerCard8 = setGamePlay.rememberCards
        let playerCard9 = setGamePlay.rememberCards
        let playerCard10 = setGamePlay.rememberCards
        let playerCard11 = setGamePlay.rememberCards
        let playerCard12 = setGamePlay.rememberCards
        let playerCard13 = setGamePlay.rememberCards
        let playerCard14 = setGamePlay.rememberCards
        let playerCard15 = setGamePlay.rememberCards
        let playerCard16 = setGamePlay.rememberCards
        let playerCard17 = setGamePlay.rememberCards
        let playerCard18 = setGamePlay.rememberCards

        div1.setAttribute('src', 'images/card2.png')

    },
    
}
console.log(setGamePlay.getCards())






// The arangement of those cards to shuffle - arangementShuffle() ???
// A timer of 15s to appear - setTimerRemember() ???


document.querySelector('.startButton').addEventListener('click', () => { setGamePlay.clearPage(), setGamePlay.setTable(), setGamePlay.setInterval1(), setGamePlay.deal() })









    /*
    computerChooses()
    playerWin()


    playerLose()
    setInterval() ==> When setInterval1 === 0 reset interval to 30s.
    resetTable()
    flip()
    */




