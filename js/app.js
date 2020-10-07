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
                
                console.log('Find all of the card values')

                const removeCont = document.querySelector('.container')
                removeCont.parentNode.removeChild(removeCont)

                const removeT = document.querySelector('.fifteenSeconds')
                removeT.parentNode.removeChild(removeT)

                const computerChooseP = document.createElement('p')
                computerChooseP.setAttribute('class' , 'computerChooseP')
                document.body.appendChild(computerChooseP)
                document.querySelector('.computerChooseP').innerHTML = "Can you find all the 'computerChooser()'"



                const readyBtnContainer = document.querySelector('div')
                readyBtnContainer.setAttribute('class' , 'readyBtnContainer')
                document.body.appendChild(readyBtnContainer)
                
                const readyButton = document.createElement('button')
                readyButton.setAttribute('class' , 'readyButton')
                readyBtnContainer.appendChild(readyButton)
                document.querySelector('.readyButton').innerHTML = 'Ready'
                clearInterval(timerInterval)

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


        const cardGrid = document.createElement('div')
        cardGrid.setAttribute('class', 'parent')
        container.appendChild(cardGrid)


        //Setting each Div
        for (let i = 1; i < 19; i++) {
            let div = document.createElement('img')
            div.setAttribute('class', 'cardContainer')
            div.setAttribute('id', 'div' + i)
            cardGrid.appendChild(div)
        }
        

    },
    rememberCards: [],

    getCards: function () {
        for (let i = 1; i <= 7; i++) {
            const newCard = document.createElement('img')
            newCard.setAttribute('src', 'images/card' + i + '.png')
            newCard.setAttribute('value', i)
            this.rememberCards.push(newCard)
            console.log(setGamePlay.rememberCards)
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
        this.getCards()
        this.shuffle()
        
        //for (let i =1; i < 19; i++) {

        //}

        let playerCard1 = setGamePlay.rememberCards.shift()
        let playerCard2 = setGamePlay.rememberCards.shift()
        let playerCard3 = setGamePlay.rememberCards.shift()
        let playerCard4 = setGamePlay.rememberCards.shift()
        let playerCard5 = setGamePlay.rememberCards.shift()
        let playerCard6 = setGamePlay.rememberCards.shift()
        let playerCard7 = setGamePlay.rememberCards.shift()
        let playerCard8 = setGamePlay.rememberCards.shift()
        let playerCard9 = setGamePlay.rememberCards.shift()
        let playerCard10 = setGamePlay.rememberCards.shift()
        let playerCard11 = setGamePlay.rememberCards.shift()
        let playerCard12 = setGamePlay.rememberCards.shift()
        let playerCard13 = setGamePlay.rememberCards.shift()
        let playerCard14 = setGamePlay.rememberCards.shift()
        let playerCard15 = setGamePlay.rememberCards.shift()
        let playerCard16 = setGamePlay.rememberCards.shift()
        let playerCard17 = setGamePlay.rememberCards.shift()
        let playerCard18 = setGamePlay.rememberCards.shift()

        div1.setAttribute('src', playerCard1.getAttribute('src'))
        div2.setAttribute('src', playerCard2.getAttribute('src'))
        div3.setAttribute('src', playerCard3.getAttribute('src'))
        div4.setAttribute('src', playerCard4.getAttribute('src'))
        div5.setAttribute('src', playerCard5.getAttribute('src'))
        div6.setAttribute('src', playerCard6.getAttribute('src'))
        div7.setAttribute('src', playerCard7.getAttribute('src'))
        div8.setAttribute('src', playerCard8.getAttribute('src'))
        div9.setAttribute('src', playerCard9.getAttribute('src'))
        div10.setAttribute('src', playerCard10.getAttribute('src'))
        div11.setAttribute('src', playerCard11.getAttribute('src'))
        div12.setAttribute('src', playerCard12.getAttribute('src'))
        div13.setAttribute('src', playerCard13.getAttribute('src'))
        div14.setAttribute('src', playerCard14.getAttribute('src'))
        div15.setAttribute('src', playerCard15.getAttribute('src'))
        div16.setAttribute('src', playerCard16.getAttribute('src'))
        div17.setAttribute('src', playerCard17.getAttribute('src'))
        div18.setAttribute('src', playerCard18.getAttribute('src'))
    },
    
}
//console.log(setGamePlay.getCards())






// The arangement of those cards to shuffle - arangementShuffle() ???
// A timer of 15s to appear - setTimerRemember() ???


document.querySelector('.startButton').addEventListener('click', () => { setGamePlay.clearPage(), setGamePlay.setTable(), setGamePlay.setInterval1(), setGamePlay.deal() })
//document.querySelector('.readyButton').addEventListener('click' , () =>)

//setInterval2() ==> When setInterval1 === 0: 
    // - ??? clearPage2
    // - create a computer chooses function
            // --This will shuffle through the array of cards and pick a random index.
            // --This is the card the player will have to find and what we will have to 
                //compare to ??? playerChooser() ???
    // - set a "Ready?" button
    // - set an event listener to 






    /*
    computerChooser()
    playerWin()


    playerLose()
    resetTable()
    flip()
    */




