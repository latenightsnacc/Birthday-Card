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

// FAMILY CARD (OUTPUT)
let fmCt = document.querySelector('#fmCT');
let fmCtxt = document.querySelector('#fmCTxt');
let fmSg = document.querySelector('#greetingFm');
let fmSn = document.querySelector('#senderFm');

// FRIEND CARD (OUTPUT)
let frCt = document.querySelector('#frCT');
let frCtxt = document.querySelector('#frCTxt');
let frSg = document.querySelector('#greetingFr');
let frSn = document.querySelector('#senderFr');

// LOVER CARD (OUTPUT)
let lrCt = document.querySelector('#lrCT');
let lrCtxt = document.querySelector('#lrCTxt');
let lrSg = document.querySelector('#greetingLr');
let lrSn = document.querySelector('#senderLr');

// FRENEMY CARD (OUTPUT)
let freCt = document.querySelector('#freCT');
let freCtxt = document.querySelector('#freCTxt');
let freSg = document.querySelector('#greetingFre');
let freSn = document.querySelector('#senderFre');

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


// This function writes the card title inputted in the form unto the card element.
function writeTitle(e){
    //console.log(e.target.value);
    if (familyCard.style.display === "block"){
        fmCt.textContent = e.target.value;
    } 
    if(friendCard.style.display === "block"){
        frCt.textContent = e.target.value;
    } 
    if(loverCard.style.display === "block"){
        lrCt.textContent = e.target.value;
    }
    if(frenemyCard.style.display === "block"){
        freCt.textContent = e.target.value;
    }
    
}

// This function writes the card message inputted in the form unto the card element.
function writeMsg(e){
    if (familyCard.style.display === "block"){
        fmCtxt.textContent = e.target.value;
    } 
    if(friendCard.style.display === "block"){
        frCtxt.textContent = e.target.value;
    } 
    if(loverCard.style.display === "block"){
        lrCtxt.textContent = e.target.value;
    }
    if(frenemyCard.style.display === "block"){
        freCtxt.textContent = e.target.value;
    }
}

// This function writes the card signature inputted in the form unto the card element.
function writeSign(e){
    if (familyCard.style.display === "block"){
        fmSg.textContent = e.target.value;
    } 
    if(friendCard.style.display === "block"){
        frSg.textContent = e.target.value;
    } 
    if(loverCard.style.display === "block"){
        lrSg.textContent = e.target.value;
    }
    if(frenemyCard.style.display === "block"){
        freSg.textContent = e.target.value;
    }
}

// This function writes the sender's name inputted in the form unto the card element.
function writeName(e){
    if (familyCard.style.display === "block"){
        fmSn.textContent = e.target.value;
    } 
    if(friendCard.style.display === "block"){
        frSn.textContent = e.target.value;
    } 
    if(loverCard.style.display === "block"){
        lrSn.textContent = e.target.value;
    }
    if(frenemyCard.style.display === "block"){
        freSn.textContent = e.target.value;
    }
}
