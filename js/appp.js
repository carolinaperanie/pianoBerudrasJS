/* variables de las notas, se hizo una variable para cada nota. */
//Do
let notaDo = new Audio('assets/notes/crispin1.mp3');
let notaRe = new Audio('assets/notes/crispin2.mp3');
let notaMi = new Audio('assets/notes/crispin3.mp3');
let notaFa = new Audio('assets/notes/crispin4.mp3');
let notaSol = new Audio('assets/notes/crispin5.mp3');
let notaLa = new Audio('assets/notes/crispin6.mp3');
let notaSi = new Audio('assets/notes/crispin7.mp3');

/* llamando a las variables */

//Do
playBtn1.addEventListener('click', ()=>{
    notaDo.play()
});
//RE
playBtn2.addEventListener('click', ()=>{
    notaRe.play()
}
);
//MI
playBtn3.addEventListener('click', ()=>{
    notaMi.play()
});
//FA
playBtn4.addEventListener('click', ()=>{
    notaFa.play()
});
//SOL
playBtn5.addEventListener('click', ()=>{
    notaSol.play()
});

//La
playBtn6.addEventListener('click', ()=>{
    notaLa.play()
});

//SI
playBtn7.addEventListener('click', ()=>{
    notaSi.play()
});

