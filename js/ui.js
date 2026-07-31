/*
=========================================
Gestion de l'interface
=========================================
*/

export function show(view){

    document.querySelectorAll(".view").forEach(v=>{

        v.classList.add("hidden");

    });

    document.getElementById(view)?.classList.remove("hidden");

}

export function updateJD(value){

    const jd=document.querySelector("#jdCounter");

    if(jd){

        jd.textContent=value;

    }

}

export function updateProgress(percent){

    const bar=document.querySelector("#progressBar");

    if(bar){

        bar.style.width=percent+"%";

    }

}

export function showMessage(message){

    alert(message);

}

export function showLoading(){

    document.body.classList.add("loading");

}

export function hideLoading(){

    document.body.classList.remove("loading");

}
