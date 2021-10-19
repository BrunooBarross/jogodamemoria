function facil(){
  document.getElementById('memoria').style.width=140*2+"px";
  document.getElementById('memoria').style.height=140*2+"px";
 document.getElementById('memoria').innerHTML =
 `<div class="memory-card" data-framework="1">
   <img class="front-face" src="galeria/1.png"  />
   <img class="back-face" src="galeria/verso.png"/>
 </div>
 <div class="memory-card" data-framework="1">
   <img class="front-face" src="galeria/1.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>

 <div class="memory-card" data-framework="2">
   <img class="front-face" src="galeria/2.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>
 <div class="memory-card" data-framework="2">
   <img class="front-face" src="galeria/2.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>`;

 const cards = document.querySelectorAll('.memory-card');
 (function shuffle() {
   cards.forEach(card => {
     let randomPos = Math.floor(Math.random() * 4);
     card.style.order = randomPos;
   });
 })();

 cards.forEach(card => card.addEventListener('click', flipCard));
}

function medio(){
  document.getElementById('memoria').style.width=140*2+"px";
  document.getElementById('memoria').style.height=140*4+"px";
 document.getElementById('memoria').innerHTML =
 `<div class="memory-card" data-framework="1">
   <img class="front-face" src="galeria/1.png"  />
   <img class="back-face" src="galeria/verso.png"/>
 </div>
 <div class="memory-card" data-framework="1">
   <img class="front-face" src="galeria/1.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>

 <div class="memory-card" data-framework="2">
   <img class="front-face" src="galeria/2.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>
 <div class="memory-card" data-framework="2">
   <img class="front-face" src="galeria/2.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>

 <div class="memory-card facil"  data-framework="3">
   <img class="front-face" src="galeria/3.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>
 <div class="memory-card facil" data-framework="3">
   <img class="front-face" src="galeria/3.png"  />
   <img class="back-face" src="galeria/verso.png" />
 </div>

 <div class="memory-card facil" data-framework="4">
   <img class="front-face" src="galeria/4.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>
 <div class="memory-card facil" data-framework="4">
   <img class="front-face" src="galeria/4.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>`;

 const cards = document.querySelectorAll('.memory-card');
 (function shuffle() {
   cards.forEach(card => {
     let randomPos = Math.floor(Math.random() * 12);
     card.style.order = randomPos;
   });
 })();

 cards.forEach(card => card.addEventListener('click', flipCard));
}

function dificil(){
  document.getElementById('memoria').style.width=140*4+"px";
  document.getElementById('memoria').style.height=140*4+"px";
 document.getElementById('memoria').innerHTML =
 `<div class="memory-card" data-framework="1">
   <img class="front-face" src="galeria/1.png"  />
   <img class="back-face" src="galeria/verso.png"/>
 </div>
 <div class="memory-card" data-framework="1">
   <img class="front-face" src="galeria/1.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>

 <div class="memory-card" data-framework="2">
   <img class="front-face" src="galeria/2.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>
 <div class="memory-card" data-framework="2">
   <img class="front-face" src="galeria/2.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>

 <div class="memory-card facil"  data-framework="3">
   <img class="front-face" src="galeria/3.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>
 <div class="memory-card facil" data-framework="3">
   <img class="front-face" src="galeria/3.png"  />
   <img class="back-face" src="galeria/verso.png" />
 </div>

 <div class="memory-card facil" data-framework="4">
   <img class="front-face" src="galeria/4.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>
 <div class="memory-card facil" data-framework="4">
   <img class="front-face" src="galeria/4.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>

 <div class="memory-card facil " data-framework="5">
   <img class="front-face" src="galeria/5.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>
 <div class="memory-card facil" data-framework="5">
   <img class="front-face" src="galeria/5.png"  />
   <img class="back-face" src="galeria/verso.png" />
 </div>

 <div class="memory-card facil" data-framework="6">
   <img class="front-face" src="galeria/6.png"  />
   <img class="back-face" src="galeria/verso.png"  />
 </div>
 <div class="memory-card facil" data-framework="6">
   <img class="front-face" src="galeria/6.png" />
   <img class="back-face" src="galeria/verso.png"  />
 </div>
 <div class="memory-card facil" data-framework="7">
   <img class="front-face" src="galeria/7.png"/>
   <img class="back-face" src="galeria/verso.png"  />
 </div>
 <div class="memory-card facil"  data-framework="7">
   <img class="front-face" src="galeria/7.png"  />
   <img class="back-face" src="galeria/verso.png" />
 </div>
 <div class="memory-card facil"  data-framework="8">
   <img class="front-face" src="galeria/8.png" />
   <img class="back-face" src="galeria/verso.png"  />
 </div>
 <div class="memory-card facil" data-framework="8">
   <img class="front-face" src="galeria/8.png"/>
   <img class="back-face" src="galeria/verso.png"  />
 </div>`;

 const cards = document.querySelectorAll('.memory-card');
 (function shuffle() {
   cards.forEach(card => {
     let randomPos = Math.floor(Math.random() * 12);
     card.style.order = randomPos;
   });
 })();

 cards.forEach(card => card.addEventListener('click', flipCard));


}



let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
