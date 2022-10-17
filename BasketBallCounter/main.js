let Homescore = 0;
let Guestscore = 0;
const homeincrementone = () =>{
    Homescore += 1;
    document.getElementById("score1-el").innerText = score;
}

const homeincrementtwo = () =>{
    Homescore += 2;
    document.getElementById("score1-el").innerText = score;
}

const homeincrementthree = () =>{
    Homescore += 3;
    document.getElementById("score1-el").innerText = score;
}

const Guestincrementone = () =>{
    Guestscore += 1;
    document.getElementById("score2-el").innerText = score;
}

const Guestincrementtwo = () =>{
    Guestscore += 2;
    document.getElementById("score2-el").innerText = score;
}

const Guestincrementthree = () =>{
    Guestscore += 3;
    document.getElementById("score2-el").innerText = score;
}
