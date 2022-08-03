//----------Alert instrucciones------------------------

function instruccion(){
    document.getElementById("instrucciones").classList.toggle("hidden");
    
}

//---------------------

//-----------Random PC---------------------------------

function rand(n){
    return(Math.floor(Math.random() * n + 1));
}

var valores = [valorPiedra=2, valorPapel=3, valorTijera=7]

var cambiar = new Array(); 
cambiar[0] = valorPiedra;
cambiar[1] = valorPapel;
cambiar[2] = valorTijera;
cambiar[3] = valorPiedra;
cambiar[4] = valorPapel;
cambiar[5] = valorTijera;
cambiar[6] = valorPiedra;
cambiar[7] = valorPapel;
cambiar[8] = valorTijera;
cambiar[9] = valorTijera;


//-------------------------------

//-------------Marcador-----------------

let scorep = 0
let scorepc = 0

let intP = document.getElementById("scorep");
let intPc = document.getElementById("scorepc");

//---------------------------------

//---------Historial---------------

let history = document.getElementById("h-1");

//----------------------------------




//-------------------Funcion PIEDRA----------------------------

function cambiarPiedra(){
    document.getElementById("body").classList.remove("overflow-hidden");
    document.getElementById("img-player").src="images/piedra-player.png";
    if(valorPiedra == cambiar[rand(10)-1]){
        document.getElementById("img-pc").src = "images/piedra-pc.png"
        document.getElementById("resultado").textContent = "Empate";
        var fecha = new Date();
        history.innerHTML += "[" + fecha.getSeconds() + " seg" + "]" + " Empate<br>";
     
        
    } else if(valorPiedra < cambiar[rand(10)-1]){
        document.getElementById("img-pc").src = "images/papel-pc.png"
        document.getElementById("resultado").textContent = " Gana PC";
        scorepc += 1
        intPc.innerHTML = scorepc;
        var fecha = new Date();
        history.innerHTML += "[" + fecha.getSeconds() + " seg" + "]" + " Gana PC<br>";
    } else{
        document.getElementById("img-pc").src = "images/tijera-pc.png"
        document.getElementById("resultado").textContent = "Ganas tu";
        scorep += 1
        intP.innerHTML = scorep;
        var fecha = new Date();
        history.innerHTML += "[" + fecha.getSeconds() + " seg" + "]" + " Ganas Tu<br>";
    }
}

//-------------------Funcion PAPEL----------------------------

function cambiarPapel(){
    document.getElementById("body").classList.remove("overflow-hidden");
    document.getElementById("img-player").src="images/papel-player.png";
    if(valorPapel == cambiar[rand(10)-1]){
        document.getElementById("img-pc").src = "images/papel-pc.png"
        document.getElementById("resultado").textContent = "Empate";
        var fecha = new Date();
        history.innerHTML += "[" + fecha.getSeconds() + " seg" + "]" + " Empate<br>";
    } else if(valorPapel < cambiar[rand(10)-1]){
        document.getElementById("img-pc").src = "images/tijera-pc.png"
        document.getElementById("resultado").textContent = "Gana PC";
        scorepc += 1
        intPc.innerHTML = scorepc;
        var fecha = new Date();
        history.innerHTML += "[" + fecha.getSeconds() + " seg" + "]" + " Gana PC<br>";
    } else{
        document.getElementById("img-pc").src = "images/piedra-pc.png"
        document.getElementById("resultado").textContent = "Ganas tu";
        scorep += 1
        intP.innerHTML = scorep;
        var fecha = new Date();
        history.innerHTML += "[" + fecha.getSeconds() + " seg" + "]" + " Ganas Tu<br>";
    }
}

//-------------------Funcion TIJERA----------------------------

function cambiarTijera(){
    document.getElementById("body").classList.remove("overflow-hidden");
    document.getElementById("img-player").src="images/tijera-player.png";
    if(valorTijera == cambiar[rand(10)-1]){
        document.getElementById("img-pc").src = "images/tijera-pc.png"
        document.getElementById("resultado").textContent = "Empate";
        scorepc += 1
        intPc.innerHTML = scorepc;
        var fecha = new Date();
        history.innerHTML += "[" + fecha.getSeconds() + " seg" + "]" + " Empate<br>";
    } else if(valorTijera > cambiar[rand(10)-1]){
        document.getElementById("img-pc").src = "images/piedra-pc.png"
        document.getElementById("resultado").textContent = "Gana PC";
        document.getElementById("scorepc").textContent = +1;
        scorepc += 1
        intPc.innerHTML = scorepc;
        var fecha = new Date();
        history.innerHTML += "[" + fecha.getSeconds() + " seg" + "]" + " Gana PC<br>";
    } else{
        document.getElementById("img-pc").src = "images/papel-pc.png"
        document.getElementById("resultado").textContent = "Ganas tu";
        scorep += 1
        intP.innerHTML = scorep;
        var fecha = new Date();
        history.innerHTML += "[" + fecha.getSeconds() + " seg" + "]" + " Ganas tu<br>";
    }
}




