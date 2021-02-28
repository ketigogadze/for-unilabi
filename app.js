const navSlide = () => {
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".burger-menu-nav-list");

    burger.addEventListener('click', () => {
       nav.classList.toggle('nav-active');
    });
}

navSlide ();