/*
=========================================
L'ÉCHO DU DÉSIR
Chargement des cartes
=========================================
*/

let challenges = [];

export async function loadChallenges() {

    const response = await fetch("./data/challenges.json");

    challenges = await response.json();

    return challenges;

}

export function getChallenges() {

    return challenges;

}

export function getChallenge(id) {

    return challenges.find(card => card.id === id);

}

export function getPhase(phase) {

    return challenges.filter(card => card.phase === phase);

}
