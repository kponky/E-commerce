const bar =  document.getElementById('bar');
const nav = document.getElementById('nav');
const close = document.getElementById('close');


if (bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener("click", ()=>{
        nav.classList.remove('active');
    })
}

let MainImage = document.getElementById("main-img");
let Smallimg = document.getElementsByClassName("small-img");

Smallimg[0].onclick = function(){
    MainImage.src = Smallimg[0].src;
}

Smallimg[1].onclick = function(){
    MainImage.src = Smallimg[1].src;
}

Smallimg[2].onclick = function(){
    MainImage.src = Smallimg[2].src;
}

Smallimg[3].onclick = function(){
    MainImage.src = Smallimg[3].src;
}

