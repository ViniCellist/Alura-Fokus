const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const figure = document.querySelector('.app__image')
const txtTitle = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const startPauseBt = document.querySelector('#start-pause')
const musicFocoInput = document.querySelector('#alternar-musica')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const pBt = document.querySelector('#start-pause img')
const screenTimer = document.querySelector('#timer')
const timeC = new Audio('sons/beep.mp3')
const pauseC = new Audio('sons/pause.mp3')
const startC = new Audio('sons/play.wav')
const music = new Audio('sons/luna-rise-part-one.mp3')

let crono = 1500
let intervaloId = null

music.loop = true

musicFocoInput.addEventListener('change', () => {
    if (music.paused) {
        music.play()
    } else {
        music.pause()
    }
})

focoBt.addEventListener('click', () => {
    crono = 1500
    changeContext('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    crono = 300
    changeContext('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    crono = 900
    changeContext('descanso-longo')
    longoBt.classList.add('active')
})

function changeContext(contexto) {
    showTimer()
    botoes.forEach(function(contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    figure.setAttribute('src', `imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            txtTitle.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            txtTitle.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
            break;
        case "descanso-longo":
            txtTitle.innerHTML = `Hora de voltar à superfície<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;
    }
}

const regressive = () => {
    if(crono <= 0){
        timeC.play()
        alert('Tempo Finalizado!')
        zero()
        return
    }
    crono -= 1
    showTimer()
}

startPauseBt.addEventListener('click', startOrPause)

function startOrPause() {
    if(intervaloId){
        pauseC.play()
        zero()
            return
    }
    startC.play()
    intervaloId = setInterval(regressive, 1000)
    iniciarOuPausarBt.textContent = "Pausar"
    pBt.setAttribute('src', 'imagens/pause.png')
}

function zero(){
    clearInterval(intervaloId)
    iniciarOuPausarBt.textContent = "Começar"
    pBt.setAttribute('src', 'imagens/play_arrow.png')
    intervaloId = null
}

function showTimer() {
    const time = new Date(crono * 1000)
    const timeFormat = time.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    screenTimer.innerHTML = `${timeFormat}`
}

showTimer()
