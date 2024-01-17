// import exhibitions from './exhibitions_cards.js';

//highlight active page in menu
function getCurrentPage() {
    const pages = document.querySelectorAll('.menu__item');
    const currPageURL = window.location.pathname.substring(1);

    for (let page of pages) {
        const pageURL = page.innerHTML.split('"').slice(1, 2).toString();
        if (pageURL === currPageURL) {
            const linkP = page.querySelector('.menu__item_link');
            linkP.classList.add('active');
        }
    }
}
getCurrentPage();