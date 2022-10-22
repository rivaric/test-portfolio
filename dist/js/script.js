const hamburder = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');
      counters = document.querySelectorAll('.level__percent');
      lines = document.querySelectorAll('.level__progress-check');

hamburder.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});