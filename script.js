function changeDisplay() {
    const root = document.documentElement;
    
    const currentBackground = getComputedStyle(root).getPropertyValue('--background').trim();

    if (currentBackground === 'black') {
        root.style.setProperty('--background', 'rgb(218, 218, 218)');
        root.style.setProperty('--textcolor', 'black');
    } else {
        root.style.setProperty('--background', 'black'); 
        root.style.setProperty('--textcolor', 'rgb(218, 218, 218)');
    }
}
