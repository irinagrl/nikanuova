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
    cardElement.querySelector('.card__name').innerText = card.name;

    return cardElement;
}
render(works);