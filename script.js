

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

// menu adjustments setting
function getMenu() {
    const elmWidth = document.querySelector('.header').offsetWidth;
    const container = document.querySelector('.menu__list');

    if (elmWidth > 699) {
        container.style.visibility = 'visible';
    } else {
        //do nothing
    }
}

getMenu();


function reload() {
    setTimeout(function () {
        location.reload();
    }, 100);
}

window.addEventListener('resize', reload);

function menuOpenHandler() {
    const container = document.querySelector('.menu__list');
    if (container.classList.contains('menu__open') === false) {
        container.classList.add('menu__open');
        container.style.visibility = 'visible';
    } else {
        container.classList.remove('menu__open');
        container.style.visibility = 'hidden';
    }

}

document.querySelector('.menu-button').addEventListener('click', menuOpenHandler);
