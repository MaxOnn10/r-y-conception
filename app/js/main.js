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

document.querySelectorAll('.form').forEach((form) => {
  const telSelector = form.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+1 (999) 999-9999');
  inputMask.mask(telSelector);

  const validation = new JustValidate(form);

  validation
    .addField('.input-name', [
      {
        rule: 'minLength',
        value: 2,
      },
      {
        rule: 'maxLength',
        value: 50,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Enter a First name'
      }
    ])
    .addField('.input-lastname', [
      {
        rule: 'minLength',
        value: 2,
      },
      {
        rule: 'maxLength',
        value: 50,
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Enter a Last name'
      }
    ])
    .addField('.input-mail', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Email is required',
      },
      {
        rule: 'email',
        value: true,
        errorMessage: 'Enter a valid Email',
      },
    ])
    .addField('.input-tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Phone is required',
      },
      {
        rule: 'function',
        validator: function() {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Enter the correct phone number',
      },
    ])
    .onSuccess((event) => {
      console.log('Validation passes and form submitted', event);

      let formData = new FormData(event.target);

      console.log(...formData);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Send');
            alert("Thank you, your application has been sent")
          }
        }
      }

      xhr.open('POST', '../mail.php', true);
      xhr.send(formData);

      event.target.reset();
    });
});