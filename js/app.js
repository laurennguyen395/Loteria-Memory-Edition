console.log('hello')
// When start button is pushed we need:

// The landing page HTML to disapepar - setPage() ???

let playerCardResultString, playerCardResultString2, playerCardResult, cpuCardChoiceValue
const correctSound = new Audio('assets/ding.wav')
const wrongSound = new Audio('assets/error.wav')

let setGamePlay = {
    cpuChoice: 0,

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

    setInterval1: function () {
        const timerOne = document.createElement('p')
        timerOne.setAttribute('class', 'fifteenSeconds')
        document.body.appendChild(timerOne)
        timerOne.innerHTML = 'Timer: 15s'



        let timer = 15
        const timerInterval = setInterval(() => {

            if (timer === 0) {

                //console.log('Find all of the card values')

                const removeCont = document.querySelector('.container')
                removeCont.classList.add('hidden')

                const removeT = document.querySelector('.fifteenSeconds')
                removeT.parentNode.removeChild(removeT)

                const computerChooseP = document.createElement('p')
                computerChooseP.setAttribute('class', 'computerChooseP')
                document.body.appendChild(computerChooseP)
                document.querySelector('.computerChooseP').innerHTML = 'Can you find all the:'

                const computerChoiceImgCnt = document.createElement('img')
                computerChoiceImgCnt.setAttribute('class', 'computerChoiceImgCnt')
                computerChoiceImgCnt.setAttribute('id', 'contianer1')

                document.body.appendChild(computerChoiceImgCnt)



                //COMPUTER CARD CHOICE
                const cpuCardChoice = this.rememberCards[Math.floor(Math.random() * this.rememberCards.length)]
                computerChoiceImgCnt.setAttribute('src', cpuCardChoice.getAttribute('src'))
                computerChoiceImgCnt.setAttribute('value', cpuCardChoice.getAttribute('value'))


                cpuCardChoiceValue = parseInt(cpuCardChoice.getAttribute('value'))
                cpuCardChoiceValueToString = cpuCardChoiceValue.toString()




                console.log((cpuCardChoiceValueToString))

                //READY BUTTON
                const readyBtnContainer = document.querySelector('div')
                readyBtnContainer.setAttribute('class', 'readyBtnContainer')
                document.body.appendChild(readyBtnContainer)

                const readyButton = document.createElement('button')
                readyButton.setAttribute('class', 'readyButton')
                readyBtnContainer.appendChild(readyButton)
                document.querySelector('.readyButton').innerHTML = 'Ready'
                document.querySelector('.readyButton').addEventListener('click', () => { setGamePlay.setTable2(), setGamePlay.setInterval2(), setGamePlay.imageClick(), setGamePlay.setDoneButton() })


                clearInterval(timerInterval)

                //*** NEED TO *** Flip cards, set new 30s timer, 
                //add click events on all cards. 
                //compare cards to what cpu asks for.
                // find and calculate total.
            } else {
                timer--
                //console.log(timer)
            }
            //get it to show up on the DOM
            document.querySelector('.fifteenSeconds').innerHTML = `Timer: ${timer}s`
        }, 10)
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
            newCard.value = i
            this.rememberCards.push(newCard)
            //console.log(setGamePlay.rememberCards)
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
        div1.setAttribute('value', playerCard1.getAttribute('value'))

        div2.setAttribute('src', playerCard2.getAttribute('src'))
        div2.setAttribute('value', playerCard2.getAttribute('value'))

        div3.setAttribute('src', playerCard3.getAttribute('src'))
        div3.setAttribute('value', playerCard3.getAttribute('value'))

        div4.setAttribute('src', playerCard4.getAttribute('src'))
        div4.setAttribute('value', playerCard4.getAttribute('value'))

        div5.setAttribute('src', playerCard5.getAttribute('src'))
        div5.setAttribute('value', playerCard5.getAttribute('value'))

        div6.setAttribute('src', playerCard6.getAttribute('src'))
        div6.setAttribute('value', playerCard6.getAttribute('value'))

        div7.setAttribute('src', playerCard7.getAttribute('src'))
        div7.setAttribute('value', playerCard7.getAttribute('value'))

        div8.setAttribute('src', playerCard8.getAttribute('src'))
        div8.setAttribute('value', playerCard8.getAttribute('value'))

        div9.setAttribute('src', playerCard9.getAttribute('src'))
        div9.setAttribute('value', playerCard9.getAttribute('value'))

        div10.setAttribute('src', playerCard10.getAttribute('src'))
        div10.setAttribute('value', playerCard10.getAttribute('value'))

        div11.setAttribute('src', playerCard11.getAttribute('src'))
        div11.setAttribute('value', playerCard11.getAttribute('value'))

        div12.setAttribute('src', playerCard12.getAttribute('src'))
        div12.setAttribute('value', playerCard13.getAttribute('value'))

        div13.setAttribute('src', playerCard13.getAttribute('src'))
        div13.setAttribute('value', playerCard13.getAttribute('value'))

        div14.setAttribute('src', playerCard14.getAttribute('src'))
        div14.setAttribute('value', playerCard14.getAttribute('value'))

        div15.setAttribute('src', playerCard15.getAttribute('src'))
        div15.setAttribute('value', playerCard15.getAttribute('value'))

        div16.setAttribute('src', playerCard16.getAttribute('src'))
        div16.setAttribute('value', playerCard16.getAttribute('value'))

        div17.setAttribute('src', playerCard17.getAttribute('src'))
        div17.setAttribute('value', playerCard17.getAttribute('value'))

        div18.setAttribute('src', playerCard18.getAttribute('src'))
        div18.setAttribute('value', playerCard18.getAttribute('value'))



        playerCardResult = parseInt(playerCard1.getAttribute('value'))
        //console.log((playerCardResult))
        playerCardResultString = playerCardResult.toString()
        //console.log((playerCardResultString))

        playerCardResult2 = parseInt(playerCard2.getAttribute('value'))
        //console.log(typeof(playerCardResult2))
        playerCardResultString2 = playerCardResult2.toString()
        //console.log(typeof(playerCardResultString2))

        playerCardResult3 = parseInt(playerCard3.getAttribute('value'))
        //console.log(typeof(playerCardResult))
        playerCardResultString3 = playerCardResult3.toString()
        //console.log(typeof(playerCardResultString3))

        playerCardResult4 = parseInt(playerCard4.getAttribute('value'))
        //console.log(typeof(playerCardResult4))
        playerCardResultString4 = playerCardResult4.toString()
        //console.log(typeof(playerCardResultString4))

        playerCardResult5 = parseInt(playerCard5.getAttribute('value'))
        //console.log(typeof(playerCardResult5))
        playerCardResultString5 = playerCardResult5.toString()
        //console.log(typeof(playerCardResultString5))

        playerCardResult6 = parseInt(playerCard6.getAttribute('value'))
        //console.log(typeof(playerCardResult6))
        playerCardResultString6 = playerCardResult6.toString()
        //console.log(typeof(playerCardResultString6))

        playerCardResult7 = parseInt(playerCard7.getAttribute('value'))
        //console.log(typeof(playerCardResult7))
        playerCardResultString7 = playerCardResult7.toString()
        //console.log(typeof(playerCardResultString7))

        playerCardResult8 = parseInt(playerCard8.getAttribute('value'))
        //console.log(typeof(playerCardResult8))
        playerCardResultString8 = playerCardResult8.toString()
        //console.log(typeof(playerCardResultString8))

        playerCardResult9 = parseInt(playerCard9.getAttribute('value'))
        //console.log(typeof(playerCardResult9))
        playerCardResultString9 = playerCardResult9.toString()
        //console.log(typeof(playerCardResultString9))

        playerCardResult10 = parseInt(playerCard10.getAttribute('value'))
        //console.log(typeof(playerCardResult10))
        playerCardResultString10 = playerCardResult10.toString()
        //console.log(typeof(playerCardResultString10))

        playerCardResult11 = parseInt(playerCard11.getAttribute('value'))
        //console.log(typeof(playerCardResult11))
        playerCardResultString11 = playerCardResult11.toString()
        //console.log(typeof(playerCardResultString11))

        playerCardResult12 = parseInt(playerCard12.getAttribute('value'))
        //console.log(typeof(playerCardResult12))
        playerCardResultString12 = playerCardResult12.toString()
        //console.log(typeof(playerCardResultString12))

        playerCardResult13 = parseInt(playerCard13.getAttribute('value'))
        //console.log(typeof(playerCardResult13))
        playerCardResultString13 = playerCardResult13.toString()
        //console.log(typeof(playerCardResultString13))

        playerCardResult14 = parseInt(playerCard14.getAttribute('value'))
        //console.log(typeof(playerCardResult14))
        playerCardResultString14 = playerCardResult14.toString()
        //console.log(typeof(playerCardResultString14))

        playerCardResult15 = parseInt(playerCard15.getAttribute('value'))
        //console.log(typeof(playerCardResult15))
        playerCardResultString15 = playerCardResult15.toString()
        //console.log(typeof(playerCardResultString15))

        playerCardResult16 = parseInt(playerCard16.getAttribute('value'))
        //console.log(typeof(playerCardResult16))
        playerCardResultString16 = playerCardResult16.toString()
        //console.log(typeof(playerCardResultString16))

        playerCardResult17 = parseInt(playerCard17.getAttribute('value'))
        //console.log(typeof(playerCardResult17))
        playerCardResultString17 = playerCardResult.toString()
        //console.log(typeof(playerCardResultString17))

        playerCardResult18 = parseInt(playerCard18.getAttribute('value'))
        //console.log(typeof(playerCardResult18))
        playerCardResultString18 = playerCardResult18.toString()
        //console.log(typeof(playerCardResultString18))
    },
    setDoneButton: function () {
        const doneButton = document.createElement('button')
        doneButton.setAttribute('class', 'doneButton')
        document.body.appendChild(doneButton)
        document.querySelector('.doneButton').innerHTML = 'Done'
    },
    setTable2: function () {

        const showCont = document.querySelector('.container')
        showCont.classList.remove('hidden')

        const removeComputerChoosesP = document.querySelector('.computerChooseP')
        removeComputerChoosesP.parentNode.removeChild(removeComputerChoosesP)

        const removeReadyButton = document.querySelector('button')
        removeReadyButton.parentNode.removeChild(removeReadyButton)

        const removeComputerChoiceImgCnt = document.querySelector('.computerChoiceImgCnt')
        removeComputerChoiceImgCnt.parentNode.removeChild(removeComputerChoiceImgCnt)
    },
    setInterval2: function () {
        const timerTwo = document.createElement('p')
        timerTwo.setAttribute('class', 'thirtySeconds')
        document.body.appendChild(timerTwo)
        timerTwo.innerHTML = 'Timer: 30s'



        let timer2 = 30
        const timerInterval2 = setInterval(() => {

            if (timer2 === 0) {


                //alert('GAME OVER! How did you do?')

                clearInterval(timerInterval2)

            } else {
                timer2--
                //console.log(timer2)
            }
            //get it to show up on the DOM
            document.querySelector('.thirtySeconds').innerHTML = `Timer: ${timer2}s`
        }, 1000)
    },


    //},

    imageClick: function () {
        for (let i = 1; i < 19; i++) {
            const div = document.querySelector(`#div${i}`)
            div.setAttribute('src', 'images/back.png')
            div.addEventListener('click', this.compareValues)
        }
    },
    playSound1: function () {
        correctSound.play()

    },
    playSound2: function () {
        wrongSound.play()
    },
    //remember cpuCard Value
    compareValues: function (e) {
        const playValue = e.target.getAttribute('value')
        const playValueNum = parseInt(playValue)
        e.target.setAttribute('src', `images/card${playValueNum}.png`)
        //console.log(cpuCardChoiceValue)
        //console.log(playValueNum)
        if (cpuCardChoiceValue === playValueNum) {
            //console.log('its a match')
            setGamePlay.playSound1()

            //set time out which will flip back
            //play wrong sound
        } else {
            //console.log('try again')
            setGamePlay.playSound2()
            setTimeout(function () { setGamePlay.imageClick() }, 800);

        }
        //play correct sound
    }
}

console.log(setGamePlay.getCards())



document.querySelector('.startButton').addEventListener('click', () => { setGamePlay.clearPage(), setGamePlay.setTable(), setGamePlay.setInterval1(), setGamePlay.deal() })





/*
const tester5 = document.getElementById('div1').getAttribute('value')

const getDiv1Test = document.getElementById('div1')
getDiv1Test.setAttribute('src' , `images/card${tester5}.png`)
console.log(getDiv1Test)
*/






/*





    playerWin(){
        if (playerCardResult === computerCardResult){
            --dont't flip card over
        } else {
            --flip card over
            --subtract 3s from timer2
        }
    }


    playerLose(){
        if (timer2 === 0) {
            console.log
        }
    }

    flip()
    */




