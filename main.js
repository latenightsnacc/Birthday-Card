// Buttons
let familyBtn = document.getElementById('family-btn');
let friendBtn = document.getElementById('friend-btn');
let loverBtn = document.getElementById('lover-btn');
let frenemyBtn = document.getElementById('frenemy-btn');

// Cards
let familyCard = document.getElementById('family-card');
let friendCard = document.getElementById('friend-card');
let loverCard = document.getElementById('lover-card');
let frenemyCard = document.getElementById('frenemy-card');

// Form (INPUT)
let title = document.getElementById('card-title');
let msg = document.getElementById('card-message');
let sign = document.getElementById('card-sign');
let sender = document.getElementById('sender');

// CARD (OUTPUT)
let cardTitle = document.querySelector('.cardTitle');
let cardMsg = document.querySelector('.cardText');
let cardSign = document.querySelector('#greeting');
let cardSender = document.querySelector('#senderName');

// CLICK EVENTS
familyBtn.addEventListener('click', displayFamilyCard);
friendBtn.addEventListener('click', displayFriendCard);
loverBtn.addEventListener('click', displayLoverCard);
frenemyBtn.addEventListener('click', displayFrenemyCard);

// INPUT EVENTS
title.addEventListener('input', writeTitle);
msg.addEventListener('input', writeMsg);
sign.addEventListener('input', writeSign);
sender.addEventListener('input', writeName);

// This function toggles the display of the family card element in the document.
// If display is block, on click the display will be none.
// If display is none, on click the display will be block.
function displayFamilyCard(e){
    // console.log(e);
    if (familyCard.style.display === "none"){
        familyCard.style.display = "block";
    } else{
        familyCard.style.display = "none";
    }
}

// This function toggles the display of the friend card element in the document.
// If display is block, on click the display will be none.
// If display is none, on click the display will be block.
function displayFriendCard(e){
    if (friendCard.style.display === "none"){
        friendCard.style.display = "block";
    } else{
        friendCard.style.display = "none";
    }
}

// This function toggles the display of the lover card element in the document.
// If display is block, on click the display will be none.
// If display is none, on click the display will be block.
function displayLoverCard(e){
    if (loverCard.style.display === "none"){
        loverCard.style.display = "block";
    } else{
        loverCard.style.display = "none";
    }
}

// This function toggles the display of the frenemy card element in the document.
// If display is block, on click the display will be none.
// If display is none, on click the display will be block.
function displayFrenemyCard(e){
    if (frenemyCard.style.display === "none"){
        frenemyCard.style.display = "block";
    } else{
        frenemyCard.style.display = "none";
    }
}


function writeTitle(e){
    //console.log(e.target.value);
    if (familyCard.style.display === "block"){
        cardTitle.textContent = e.target.value;
    } 
     else if(friendCard.style.display === "block"){
        cardTitle.textContent = e.target.value;
    } 
    else if(loverCard.style.display === "block"){
        cardTitle.textContent = e.target.value;
    }
    else if(frenemyCard.style.display === "block"){
        cardTitle.textContent = e.target.value;
    }
    
}

function writeMsg(e){
    //console.log(e.target.value);
    cardMsg.textContent = e.target.value;
}

function writeSign(e){
    //console.log(e.target.value);
    cardSign.textContent = e.target.value;
}

function writeName(e){
    //console.log(e.target.value);
    cardSender.textContent = e.target.value;
}

