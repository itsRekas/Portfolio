const icons=document.querySelector(".icons");
const nav=document.querySelector(".nav");
const closeIcon=document.getElementById("MenuClose");
const openIcon=document.getElementById("MenuOpen");
const root = document.documentElement;
let currentBackground = getComputedStyle(root).getPropertyValue('--background').trim();
let resizeTimeout;

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
    if((window.getComputedStyle(closeIcon).display === 'block'||window.getComputedStyle(openIcon).display === 'block') && nav.style.backgroundColor !== 'transparent'){
        nav.style.backgroundColor = currentBackground;
    }
}

function showNav(){
    if(!(window.getComputedStyle(closeIcon).display === 'block'||window.getComputedStyle(openIcon).display === 'block'))return;
    icons.style.display = 'flex';
    closeIcon.style.display = 'block';
    openIcon.style.display = 'none';
    nav.style.backgroundColor = currentBackground;
    nav.style.height = "100%"
}

function hideNav(){
    if(!(window.getComputedStyle(closeIcon).display === 'block'||window.getComputedStyle(openIcon).display === 'block'))return;
    icons.style.display = 'none';
    nav.style.backgroundColor = 'transparent';
    if(closeIcon.style.display === 'none') return
    closeIcon.style.display = 'none';
    openIcon.style.display = 'block';
    nav.style.height = "0"
}


window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
        location.reload();
    }, 500);
});