//cards render
function render(cards) {
    for (let card of cards) {
        createCard(card);
    }
}

function createCard(card) {
    const container = document.querySelector('.cards__container');
    const cardElement = getCardElement(card);
    container.appendChild(cardElement);
}

function getCardElement(card) {
    const cardTemplate = document.querySelector('#card__template').content;
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.card__img').src = card.imgSrc[0];
    cardElement.querySelector('.card__img').alt = card.name;
    cardElement.querySelector('.card__place').href = card.website;
    cardElement.querySelector('.card__place').innerText = card.place;
    cardElement.querySelector('.card__name').innerText = `${card.name}` + ', ' + `${card.dates}`;
    cardElement.querySelector('.card__descr').innerText = card.descr;

    return cardElement;
}

render(exhibitions);

//popup
const cards = exhibitions;

function cardsContainerClickHandler(evt) {
    const elm = evt.target.closest('.card');
    const elmImgAlt = elm.querySelector('.card__img').alt;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].name === elmImgAlt) {
            popupOpenHandler(cards[i]);
        }
    }
}

function popupOpenHandler(card) {
    createPopupDiv(card);

    const container = document.querySelector('.popup');
    const cardElement = getPopCardElement(card);
    container.appendChild(cardElement);

    document.querySelector('.popup').style.visibility = 'visible';
    document.querySelector('.header').style.opacity = '.1';
    document.querySelector('.page').style.opacity = '.1';
    document.querySelector('.footer').style.opacity = '.1';

}

function getPopCardElement(card) {
    const cardTemplate = document.querySelector('#popupCard__template').content;
    const cardElement = cardTemplate.cloneNode(true);

    cardElement.querySelector('.card__place').href = card.website;
    cardElement.querySelector('.card__place').innerText = card.place;
    cardElement.querySelector('.card__name').innerText = `${card.name}` + ', ' + `${card.dates}`;
    cardElement.querySelector('.card__descr').innerText = card.descr;

    return cardElement;
}

function createPopupDiv(card) {
    const container = document.querySelector('.popup');
    const slider = document.createElement('div');
    slider.classList.add('main-carousel');
    container.appendChild(slider);
    const imgSrc = card.imgSrc;

    for (let i = 0; i < imgSrc.length; i++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('carousel-cell');

        const cardImg = document.createElement('img');
        cardImg.classList.add('carousel-cell-img');
        cardImg.src = imgSrc[i];
        cardImg.alt = card.name;

        slider.appendChild(cardElement);
        cardElement.appendChild(cardImg);

    }

    var flkty = new Flickity(slider, {
        imagesLoaded: true,
        percentPosition: false,
    });

    return container;
}

function popupCloseHandler() {
    document.querySelector('.popup').style.visibility = 'hidden';
    document.querySelector('.header').style.opacity = '1';
    document.querySelector('.page').style.opacity = '1';
    document.querySelector('.footer').style.opacity = '1';
    document.querySelector('.main-carousel').remove();
    document.querySelector('.popupCard__container').remove();
}

document.querySelector('.cards__container').addEventListener('click', cardsContainerClickHandler);
document.querySelector('.popup__img_close').addEventListener('click', popupCloseHandler);