function createCard(card) {
    const container = document.querySelector('.card__container');
    const cardElement = getCardElement(card);
    container.appendChild(cardElement);
}

function getCardElement(card) {
    const cardTemplate = document.querySelector('#card__template').content;
    const cardElement = cardTemplate.cloneNode(true);

    for (let i = 0; i < card.imgSrc.length; i++) {
        let img = card.imgSrc[i];
        let alt = card.name;
        createImg(img, alt);
    }

    // cardElement.querySelector('.card__img_link').href = card.name + '.html';
    // cardElement.querySelector('.card__img').src = card.imgSrc;
    // cardElement.querySelector('.card__img').alt = card.name;
    cardElement.querySelector('.card__name').innerText = `${card.name}`;
    // cardElement.querySelector('.card__size').innerText = `${card.size}`;
    // cardElement.querySelector('.card__textiles').innerText = 'Textiles: ' + `${card.textiles}`;
    // cardElement.querySelector('.card__technique').innerText = 'Technique: ' + `${card.technique}`;
    // cardElement.querySelector('.card__exhibition').href = card.website;
    // cardElement.querySelector('.card__exhibition').innerText = 'Exhibition: ' + card.exhibition;
    cardElement.querySelector('.card__description').innerText = card.descr;

    return cardElement;
}

function createImg(img, alt) {
    const container = document.querySelector('.gallery');
    const cardTemplate = document.querySelector('#gallery__template').content;
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.card__img').src = img;
    cardElement.querySelector('.card__img').alt = alt;
    container.appendChild(cardElement);
}
createCard(projects[0]);

//popup image full size
function popupOpenHandler(event) {
    event.preventDefault();

    document.querySelector('.popup').style.visibility = 'visible';
    document.querySelector('.page__body').style.opacity = '.1';

}

function popupCloseHandler() {
    // event.preventDefault();

    document.querySelector('.popup').style.visibility = 'hidden';
    document.querySelector('.page__body').style.opacity = '1';

}

document.querySelector('.gallery').addEventListener('click', popupOpenHandler);
document.querySelector('.popup').addEventListener('click', popupCloseHandler);
