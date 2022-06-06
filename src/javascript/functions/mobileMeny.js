export default function DisplayMenyInMobile() {
    //meny elementets
    const menyBackground = document.querySelector('.header-nav');
    const menyList = document.querySelector('.header-nav ul');
    const menyBtn = document.querySelector('#meny-btn');
    const menyCloseBtn = document.querySelector('#close-menyBtn');

    menyBtn.addEventListener('click', () => {
        menyBackground.classList.add("display-mobile-meny");
        menyList.classList.add("display-mobile-meny-items");
    })

    function removeClass() {
        menyBackground.classList.remove("display-mobile-meny");
        menyList.classList.remove("display-mobile-meny-items");
    }

    menyCloseBtn.addEventListener('click', () => {
        removeClass();
    })

    menyBackground.addEventListener('click', (e) => {
        if (e.target === menyBackground) {
            removeClass();
        }
    })

    //closes the meny if you go from small-screan to desktop
    const tabletSize = window.matchMedia('(min-width: 840px)');

    function closeMenyInDesktop(screenSize) {
        if (screenSize.matches) {
            removeClass();
        }
    }
    closeMenyInDesktop(tabletSize);
    tabletSize.addListener(closeMenyInDesktop)
}