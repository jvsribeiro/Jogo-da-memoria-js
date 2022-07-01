const grid = document.querySelector('.grid');

const characters = [
    '10',
    '9',
    '8',
    '7',
    '6',
    '5',
    '4',
    '3',
    '2',
    '1'
    
];

const criarelemento = (tag, classname) => {
    const elemento = document.createElement(tag);
    elemento.className = classname;
    return elemento;

}

let firstcard = '' ;
let secondcard = '' ;

const endgame = () => {

    const disablecard = document.querySelectorAll('.disable-card')

    if(disablecard.length == 20) {

        alert('Fim De Jogo!! Parabéns!');
    }
}

const checkcard = () => {
    const firstcharacters = firstcard.getAttribute('data-characters');
    const secondcharacters = secondcard.getAttribute('data-characters');

    if(firstcharacters == secondcharacters) {

        firstcard.firstChild.classList.add('disable-card');
        secondcard.firstChild.classList.add('disable-card');

        firstcard = '';
        secondcard = '';

        endgame();


    } else{

        setTimeout(() => {
            firstcard.classList.remove('reveal-card');
            secondcard.classList.remove('reveal-card');

            firstcard = '';
            secondcard = '';


        }, 500);
        


    }

}

const revealCard = ({ target }) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return;   
    }

    if(firstcard == ''){
        target.parentNode.classList.add('reveal-card');;
        firstcard =  target.parentNode;

    } else if (secondcard == ''){
        target.parentNode.classList.add('reveal-card');
        secondcard =  target.parentNode;


     checkcard()

    }

  

  

    
 }

const createCard = (characters) => {

   const card = criarelemento('div', 'card');
   const front =criarelemento('div', 'face front');
   const back =criarelemento('div', 'face back');

   front.style.backgroundImage = `url('../imagem/${characters}.png')`;
   
   card.appendChild(front);
   card.appendChild(back);

   card.addEventListener('click', revealCard);
   card.setAttribute('data-characters',characters)
  

   return card;
}
const loadgame = () => {

    const duplicatecharaters = [ ...characters, ...characters ];

    const arraybaralho = duplicatecharaters.sort(()=> Math.random() - 0.5);

    

    arraybaralho.forEach((characters) => {

        const card = createCard(characters);
        grid.appendChild(card);

        
     
    });
}

loadgame();