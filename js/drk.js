const btnSwitch = document.querySelector('#switch'),
    switchToggleImage = document.getElementById("switchToggleImage");


btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
        switchToggleImage.src = "img/moon.png";
    } else {
        localStorage.setItem('dark-mode', 'false');
        switchToggleImage.src = "img/sun.png";
    }

});

//obtener modo actual
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
} else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
}