function getRandomColor() {
  const colors = ['deeppink', 'mediumvioletred', 'plum', 'lightgrey', 'magenta', 'pink', 'wheat', 'lightblue', 'thistle'];
  return colors[Math.floor(Math.random() * colors.length)];
}

const mobileScreen = window.matchMedia("(max-width: 576px)");
const h3 = document.querySelectorAll('h3');
function applyBackgroundColor() {
  if (mobileScreen.matches) {
    h3.forEach(h3 => {
      h3.style.backgroundColor = getRandomColor();

    })}
  }

applyBackgroundColor();



function toggleCard() {
  var cards = document.querySelectorAll('.card');

  cards.forEach(function(card) {
    var button1 = card.querySelector('.button1');
    var button2 = card.querySelector('.button2');
    var img = card.querySelector('img');
    var p = card.querySelector('p');

    button1.addEventListener('click', function() {
      img.style.display = 'block';
      p.style.display = 'none';
    });

    button2.addEventListener('click', function() {
      p.style.display = 'block';
      img.style.display = 'none';
    });
  });
}