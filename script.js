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



// render(exhibitions);
// createExhPage();
// function cardClickHandler(exhPage, event) {
//     event.preventDefault();
//     return exhPage;


//     //     const link = './exhibition.html';
//     //     console.log('link');

//     //     // // const opened =
//     //     window.open(link, '_self');
//     //     // const exhText = document.querySelector('.exh__text');
//     //     // exhText.innerHTML = 'not war';
//     //     // // opened.document.write(
//     //     // //     "test"
//     //     // //     )

//     //     // // return opened;
// }

// document.querySelector('.cards__container').addEventListener('click', cardClickHandler);
