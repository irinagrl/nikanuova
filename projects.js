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
    const lastImg = card.imgSrc.slice(-1);

    cardElement.querySelector('.card__img').src = lastImg;
    cardElement.querySelector('.card__img').alt = card.name;
    cardElement.querySelector('.card__name').innerText = card.name;
    cardElement.querySelector('.card__description').innerText = card.descr;


    return cardElement;
}
render(projects);

//popup
const cards = projects;

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

    // const container = document.querySelector('.popup');
    // // const cardElement = getPopCardElement(card);
    // container.appendChild(cardElement);

    // createPopupGrid(card);

    document.querySelector('.popup').style.visibility = 'visible';
    document.querySelector('.header').style.opacity = '.1';
    document.querySelector('.page').style.opacity = '.1';
    document.querySelector('.footer').style.opacity = '.1';

}

// function getPopCardElement(card) {
//     const cardTemplate = document.querySelector('#popupCard__template').content;
//     const cardElement = cardTemplate.cloneNode(true);

//     // cardElement.querySelector('.card__img').alt = card.name;
//     cardElement.querySelector('.card__name').innerText = card.name;
//     // if (card.descrPopup = true) {
//     //     cardElement.querySelector('.card__description').innerText = card.descr;
//     // } else {
//     //     cardElement.querySelector('.card__description').innerText = null;
//     // }


//     return cardElement;
// }

// function createPopupGrid(card) {
//     const container = document.querySelector('.popup');
//     const grid = document.createElement('div');
//     grid.classList.add('cards__grid');
//     container.appendChild(grid);
//     const imgSrc = card.imgSrc;

//     for (let i = 0; i < imgSrc.length; i++) {
//         const cardElement = document.createElement('div');
//         cardElement.classList.add('cards__grid_cell');

//         const cardImg = document.createElement('img');
//         cardImg.classList.add('cards__grid_img');
//         cardImg.src = imgSrc[i];
//         cardImg.alt = card.name;

//         grid.appendChild(cardElement);
//         cardElement.appendChild(cardImg);

//     }

//     return container;
// }

function createPopupDiv(card) {
    const container = document.querySelector('.popup');
    const sliderA = document.createElement('div');
    sliderA.classList.add('main-carousel');
    container.appendChild(sliderA);
    const imgSrc = card.imgSrc;

    for (let i = 0; i < imgSrc.length; i++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('carousel-cell');

        const cardImg = document.createElement('img');
        cardImg.classList.add('carousel-cell-img');
        cardImg.src = imgSrc[i];
        cardImg.alt = card.name;

        sliderA.appendChild(cardElement);
        cardElement.appendChild(cardImg);

    }

    var flktyA = new Flickity('.main-carousel');

    createPopupDivTwo(card)
    return container;
}

function createPopupDivTwo(card) {
    const container = document.querySelector('.popup');
    const sliderB = document.createElement('div');
    sliderB.classList.add('carousel-nav');
    container.appendChild(sliderB);
    const imgSrc = card.imgSrc;

    for (let i = 0; i < imgSrc.length; i++) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('carousel-cell');

        const cardImg = document.createElement('img');
        cardImg.classList.add('carousel-cell-img');
        cardImg.src = imgSrc[i];
        cardImg.alt = card.name;

        sliderB.appendChild(cardElement);
        cardElement.appendChild(cardImg);

    }

    var flktyB = new Flickity('.carousel-nav', {
        asNavFor: '.main-carousel',
        imagesLoaded: true,
        cellAlign: 'center',
        contain: true,
        freeScroll: true,
        wrapAround: true,
    });
    return container;
}

function popupCloseHandler() {
    document.querySelector('.popup').style.visibility = 'hidden';
    document.querySelector('.header').style.opacity = '1';
    document.querySelector('.page').style.opacity = '1';
    document.querySelector('.footer').style.opacity = '1';
    document.querySelector('.main-carousel').remove();
    document.querySelector('.carousel-nav').remove();

    // document.querySelector('.popupCard__container').remove();
    // document.querySelector('.cards__grid').remove();

}

document.querySelector('.cards__container').addEventListener('click', cardsContainerClickHandler);
document.querySelector('.popup__img_close').addEventListener('click', popupCloseHandler);