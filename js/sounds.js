/*
=========================================
L'ÉCHO DU DÉSIR
Gestion des effets sonores
=========================================
*/

let audioContext = null;

function getContext() {

    if (!audioContext) {

        audioContext = new (window.AudioContext || window.webkitAudioContext)();

    }

    return audioContext;

}

function play(frequencyStart, frequencyEnd, duration, type = "sine", volume = 0.15) {

    const ctx = getContext();

    const osc = ctx.createOscillator();

    const gain = ctx.createGain();

    osc.type = type;

    osc.frequency.setValueAtTime(frequencyStart, ctx.currentTime);

    osc.frequency.linearRampToValueAtTime(

        frequencyEnd,

        ctx.currentTime + duration

    );

    gain.gain.setValueAtTime(volume, ctx.currentTime);

    gain.gain.exponentialRampToValueAtTime(

        0.001,

        ctx.currentTime + duration

    );

    osc.connect(gain);

    gain.connect(ctx.destination);

    osc.start();

    osc.stop(ctx.currentTime + duration);

}

export function clickSound() {

    play(400,700,0.08);

}

export function successSound() {

    play(500,850,0.30);

}

export function warningSound() {

    play(180,70,0.60,"sawtooth",0.30);

}
