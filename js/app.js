import {loadChallenges} from "./cards.js";
import {loadGame} from "./storage.js";
import {updateJD} from "./ui.js";
import {clickSound} from "./sounds.js";

let game;

let cards;

async function start(){

    cards=await loadChallenges();

    game=loadGame();

    updateJD(game.jd);

    console.log("Jeu chargé");

    console.log(cards);

}

window.addEventListener("load",start);

window.addEventListener("click",()=>{

    clickSound();

},{once:true});
