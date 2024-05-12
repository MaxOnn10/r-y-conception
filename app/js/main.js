const burgerMenu = document.querySelector('.header__burger');
const burgerContainer = document.querySelector('.header__burger-container');
const nav = document.querySelector('.header__nav');
const headerTop = document.querySelector('.header__top');
const headerButton = document.querySelector('.header__button-container');
const burgerItem = document.querySelectorAll('.header__list-item');



burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('header__burger-active');
  burgerContainer.classList.toggle('header__burger-container--active');
  nav.classList.toggle('header__nav--active');
  headerButton.classList.toggle('header__button-container--active');
  headerTop.classList.toggle('header__top--active');
  // headerTop.classList.toggle('header__top--active');
  // body.classList.toggle('disable-scroll');
});

burgerItem.forEach(function (item) {
  item.addEventListener('click', function () {
    burgerMenu.classList.remove('header__burger-active');
    burgerContainer.classList.remove('header__burger-container--active');
    nav.classList.remove('header__nav--active');
    headerButton.classList.remove('header__button-container--active');
    headerTop.classList.remove('header__top--active');
  });
});

const viewers = document.querySelectorAll(".image-compare");

const options = {

  // UI Theme Defaults
  controlColor: "#fff",
  controlShadow: false,
  addCircle: false,
  addCircleBlur: false,

  // Label Defaults
  showLabels: false,
  labelOptions: {
    before: 'Before',
    after: 'After',
    onHover: false
  },

  // Smoothing
  smoothing: true,
  smoothingAmount: 100,

  // Other options
  hoverStart: false,
  verticalMode: false,
  startingPoint: 50,
  fluidMode: false
};

// Add your options object as the second argument
viewers.forEach((element) => {
  let view = new ImageCompare(element).mount();
});

Fancybox.bind("[data-fancybox]", {
  autoFocus: false,
  dragToClose: false,
  groupAttr: false
});
