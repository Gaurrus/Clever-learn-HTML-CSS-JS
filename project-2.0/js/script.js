(function () {
  const header = document.querySelector('.header');
  document.onscroll = () => {
    if (window.pageYOffset > 25) {
      header.classList.add('header_active');
    }
    else {
      header.classList.remove('header_active');
    }
  };
}());

//*burger hendler start *//

(function () {
  const burgerItem = document.querySelector('.burger');
  const menu = document.querySelector('.nav');
  const menuCloseItem = document.querySelector('.nav-close')
  const body = document.querySelector('.body');
  burgerItem.addEventListener('click', () => {
    menu.classList.add('nav-active');
    body.classList.add('body-unactive');
  });
  menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('nav-active');
    body.classList.remove('body-unactive');
  });
}());

// (function () {
//   const header = document.querySelector('.header');
//   document.onscroll = () => {
//     if (window.innerWidth < 768) {
//       header.classList.remove('header_active');
//     } else 
//     if (window.pageYOffset > 25) {
//       header.classList.add('header_active');
//     }
//     else {
//       header.classList.remove('header_active');
//     }
//   };
// }());


//*burger hendler end *//