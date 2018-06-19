var menuLevel = 0;
var menuA = document.getElementById("menu-interface");
var playControls = document.getElementById('play-interface');
function showMenu(){
    clickSound();
    if(menuLevel == 0){
        menuA.style.maxWidth = "1000px";
        playControls.style.maxWidth = 0;
        menuLevel++;
    }
    else{
        menuA.style.maxWidth = "0px";
        menuLevel--;
    }
}

var exitMenu = document.getElementById('exit-prompt');
function exitOsu(){
    clickSound();
    exitMenu.style.top = "0";
    exitMenu.style.opacity = "1";
}

function hideExit(){
    clickSound();
    exitMenu.style.top = "-5000px";
    exitMenu.style.opacity = "0";
}

function closeOsu(){
    window.close();
}

var options = document.getElementById("options");

function showOptions(){
    clickSound();
    options.style.left = "0px";
}

function hideOptions(){
    clickSound();
    options.style.left = "-75vh";
}

var chat = document.getElementById('chat');


var chatToggle = false;
function showChat(){
    clickSound();
    if(chatToggle){
        chat.style.bottom = "-75vh";
        chatToggle = false;
    }
    else{
        chat.style.bottom = "0";
        chatToggle = true;
    }
}

var userInfo = document.getElementById('user-info');
var onlineToggle = false;

function showOnline(){
    clickSound();
    showChat();
    if (onlineToggle) {
        userInfo.style.opacity = "1"
        onlineToggle = false;
    }
    else {
        userInfo.style.opacity = "0";
        onlineToggle = true;
    }
}

function showPlayInterface(){
    clickSound();
    menuA.style.maxWidth = 0;
    playControls.style.maxWidth = "1000px";
    gameState = true;
}

function hideThis(){
    clickSound();
    playControls.style.maxWidth = 0;
    menuA.style.maxWidth = "1000px";
}

//Song Selection
//Variables
var osuFooter = document.getElementById('osu-footer');
var myInfo = document.getElementById('my-info');
var mainInterface = document.getElementById('front-interface');
var songSelect = document.getElementById('song-select');
var chatControls = document.getElementById('chat-controls');
var menuBack = document.getElementById('menu-back');
var selectionControls = document.getElementById('selections');

function startGame(){
    clickSound();
    changeCurrentSong();
    osuFooter.style.backgroundColor = "rgba(5,5,5,0.85)";
    myInfo.style.display = "none";
    mainInterface.style.display = "none";
    chatControls.style.display = "none";
    menuBack.style.display = "block";
    songSelect.style.display = "block";
    selectionControls.style.display = "block";
}
function toMenuBack(){
    clickSound();
    songSelect.style.display = "none";
    menuBack.style.display = "none";
    mainInterface.style.display = "block";
    myInfo.style.display = "block";
    chatControls.style.display = "flex";
    selectionControls.style.display = "none";
    osuFooter.style.backgroundColor = "rgba(0,0,0,0.8)";
}

// Menu click sounds

function clickSound(){
    var audio = new Audio('Sounds/menuback.wav');
    audio.play();
}

function changeCurrentSong(){
    document.getElementById('currentSongToday').setAttribute('src','Sounds/tutorial.ogg');
}

// Gameplay

var everything = document.getElementById('everything');
var gameplayWindow = document.getElementById('gameplay-window');

function gameplay(){
    clickSound();
    changeCurrentSong();
    everything.style.display = "none";
    gameplayWindow.style.display = "block";
    hitCircle();
}

function hitCircle(){
    setTimeout(function(){
        document.getElementById('approach-circle').style.transform = "scale(1)";
    }, 200);
    setTimeout(function () {
        document.getElementById('approach-circle').style.display = "none";
        document.getElementById('circle1').style.transform = "scale(0)";
    }, 1500);
}