let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

  const mainTitle = document.querySelector('#main-title');
  mainTitle.textContent = 'Hi! My name is DOM Toretto.'

  // Part 2

  const body = document.querySelector('body');
  body.style.backgroundColor = 'rgba(255,211,224,1)';

  // Part 3

  const favThings = document.getElementById('favorite-things');
  const lastListItem = favThings.lastElementChild;
  if (lastListItem) {
    favThings.removeChild(lastListItem)
  }

  // Part 4

  const specialTitles = document.getElementsByClassName('special-title');

  for (let i = 0; i < specialTitles.length; i++) {
    specialTitles[i].style.fontSize = '2rem';
  }

  // Part 5

  const pastRaces = document.getElementById('past-races');
  const liElements = pastRaces.getElementsByTagName('li');

  for (let i = 0; i < liElements.length; i++) {
    if (liElements[i].textContent === 'Chicago') {
      liElements[i].remove();
      break;
    }
  }

  // Part 6

  const liEl = document.createElement('li')
  liEl.textContent = 'Boston';
  pastRaces.appendChild(liEl);

  // Part 7

  const div = document.createElement('div');
  div.className = 'blog-post purple';
  const title = document.createElement('h1');
  title.textContent = 'Boston';
  const p = document.createElement('p');
  p.textContent = "I dived my car to the 1000 miles."
  div.appendChild(title);
  div.appendChild(p);
  const main = document.querySelector('.main');
  main.appendChild(div)

  // Part 8

  const quoteTitle = document.querySelector('#quote-title');
  quoteTitle.addEventListener('click', randomQuote);

  // Part 9

  const blogPosts = document.querySelectorAll('.blog-post');
  for (let i = 0; i < blogPosts.length; i++) {
    blogPosts[i].addEventListener('mouseout', () => {
      blogPosts[i].classList.toggle('purple');
    });
  }
  for (let i = 0; i < blogPosts.length; i++) {
    blogPosts[i].addEventListener('mouseenter', () => {
      blogPosts[i].classList.toggle('red');
    })
  }
});
