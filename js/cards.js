//TODO: this will be overriden if using fuse.js

window.onload = function () {
  const cards = document.querySelectorAll('.card');

  function transition() {
    if (this.classList.contains('active')) {
      this.classList.remove('active')
    } else {
      this.classList.add('active');
    }
    for (i in cards) {
      let card = cards[i]
      if (card != this && card.classList.contains('active')) {
        card.classList.remove('active')
      }
    }
  }

  cards.forEach(card => card.addEventListener('click', transition));

}