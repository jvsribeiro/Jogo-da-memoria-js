

const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateinpunt = ({ target }) => {
    if(target.value.length > 2 ) {
        button.removeAttribute('disabled');
    } else{
        button.setAttribute('disabled', '');
    }
}

const handsubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player',input.value);
    window.location = 'pages/game.html';

}


input.addEventListener('input', validateinpunt);
form.addEventListener('submit', handsubmit);




