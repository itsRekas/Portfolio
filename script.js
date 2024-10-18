const icons=document.querySelector(".icons");
const nav=document.querySelector(".nav");
const closeIcon=document.getElementById("MenuClose");
const openIcon=document.getElementById("MenuOpen");
const root = document.documentElement;
let currentBackground = getComputedStyle(root).getPropertyValue('--background').trim();

function changeDisplay() {
    if (currentBackground === 'black') {
        root.style.setProperty('--background', 'rgb(218, 218, 218)');
        root.style.setProperty('--textcolor', 'black');
        currentBackground = 'rgb(218, 218, 218)';
    } else {
        root.style.setProperty('--background', 'black'); 
        root.style.setProperty('--textcolor', 'rgb(218, 218, 218)');
        currentBackground = 'black';
    }
    if(nav.style.backgroundColor !== 'transparent'){
        nav.style.backgroundColor = currentBackground;
    }
}

function showNav(){
    icons.style.display = 'flex';
    closeIcon.style.display = 'block';
    openIcon.style.display = 'none';
    nav.style.backgroundColor = currentBackground;
    console.log(currentBackground);
}

function hideNav(){
    icons.style.display = 'none';
    nav.style.backgroundColor = 'transparent';
    if(closeIcon.style.display === 'none') return
    closeIcon.style.display = 'none';
    openIcon.style.display = 'block';

}