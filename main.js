// padroniza o tamanho da tela
let height = 0
let width = 0
let life = 1
let time = 15

function adjustScreen(){
    height = window.innerHeight;
    width = window.innerWidth;
    console.log(height, width)
}
// contagem
let point = 0
// recupera nivel do game

let timeSpawn = 1500
let level = window.location.search
level = level.replace('?', '')

if(level === 'normal'){
    timeSpawn = 1500
}else if(level === 'dificil'){
    timeSpawn = 1000
}else if(level === 'crew'){
    timeSpawn = 850
}

//cronometro
let stopwatch = setInterval(function(){
    time--
    if(time<0){
        clearInterval(stopwatch)
        clearInterval(clearMosquito)
        window.location.href= 'vitory.html'
    } else{    
        document.getElementById('stopwatch').innerHTML = time
    }
},1000)

adjustScreen()

// define a posição do mosquito
function randomPosition(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        // logica de vida
        if(life > 3){
            window.location.href = 'gameOver.html'
        }else{
            document.getElementById('v'+ life).src = "imagens/coracao_vazio.png"
            life++
            console.log(life)
        }
        
    }

    let positionX = Math.floor (Math.random() * width)-90;
    let positionY = Math.floor (Math.random() * height)-90;

    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

    console.log(positionX, positionY)

    let mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = randomSize() + ' ' + randomSide()
    mosquito.style.left= positionX +'px'
    mosquito.style.top= positionY + 'px'
    mosquito.style.position= 'absolute'
    mosquito.id= 'mosquito'
    mosquito.onclick= function(){
        point ++
        document.getElementById('pontos').innerHTML = point
        this.remove()
    }

    document.body.appendChild(mosquito)
}

// define o tamanho do mosquito
function randomSize(){
    let classe = Math.floor(Math.random() * 3)

    switch (classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

// define o lado do mosquito
function randomSide(){
    let classe = Math.floor(Math.random() * 2)

    switch (classe){
        case 0:
            return 'sideA'
        case 1:
            return 'sideB'
    }
}

let finalPoint = document.getElementById('pontos').value