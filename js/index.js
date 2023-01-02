

// Declaring the variables.

var themeButton = document.getElementById('change-color');
var bodyBgColor = document.body;



themeButton.addEventListener('click', function(){
    if (themeButton.innerText === 'Dark Theme'){
        bodyBgColor.style.backgroundColor = 'rgb(202, 195, 195)';
        themeButton.innerText = 'Light Theme';
    }
    else if (themeButton.innerText === 'Light Theme'){
        bodyBgColor.style.backgroundColor = 'white';
        themeButton.innerText = 'Dark Theme';
    }
});








