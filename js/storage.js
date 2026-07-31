/*
=========================================
Gestion de la sauvegarde
=========================================
*/

const STORAGE_KEY = "echo_game";

const defaultGame = {

    jd: 20,

    completed: [],

    phase: 1,

    duoCode: "",

    feedback1: false,

    feedback2: false

};

export function loadGame() {

    const save = localStorage.getItem(STORAGE_KEY);

    if (!save) {

        return structuredClone(defaultGame);

    }

    return JSON.parse(save);

}

export function saveGame(game) {

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(game)

    );

}

export function resetGame() {

    localStorage.removeItem(STORAGE_KEY);

}

export function getDefaultGame() {

    return structuredClone(defaultGame);

}
