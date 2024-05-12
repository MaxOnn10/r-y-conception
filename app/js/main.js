const burgerMenu = document.querySelector('.header__burger');
const burgerContainer = document.querySelector('.header__burger-container');
const nav = document.querySelector('.header__nav');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('header__burger-active');
  burgerContainer.classList.toggle('header__burger-container--active');
  nav.classList.toggle('header__nav--active');
  // headerTop.classList.toggle('header__top--active');
  // body.classList.toggle('disable-scroll');
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
