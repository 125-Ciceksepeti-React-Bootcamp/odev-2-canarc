/* eslint-disable no-unused-vars */
import './index.css';
import DogImage from './assets/dog.png';
import DuckImage from './assets/duck.png';

class Animal {
  constructor(name, image, numberOfLegs) {
    this.name = name;
    this.image = image;
    this.numberOfLegs = numberOfLegs;
  }
}

class Dog extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}

class Duck extends Animal {
  constructor(name, image, numberOfLegs, age) {
    super(name, image, numberOfLegs);
    this.age = age;
  }
}

function renderCards(farmAnimals) {
  const content = document.createElement('div');
  content.className = 'content';

  farmAnimals.forEach((animal) => {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.style.height = '120px';
    image.src = animal.image;

    const Title = document.createElement('h3');
    Title.innerText = `${animal.name} - ${animal.age}`;
    const numberOfLegs = document.createElement('h4');
    numberOfLegs.innerText = `Number of Legs :  ${animal.numberOfLegs}`;

    card.appendChild(image);
    card.appendChild(Title);
    card.appendChild(numberOfLegs);

    content.appendChild(card);
  });

  /*   Check document has an element class named "content"
  if exists replace this content
  else create an element has class named "content"
 */
  const exisContent = document.querySelector('.content');

  if (exisContent) {
    exisContent.parentNode.replaceChild(content, exisContent);
  } else {
    const header = document.getElementById('header');
    document.body.insertBefore(content, header.nextSibling);
  }
}

// Create animal instances
const Sila = new Dog('Sila', DogImage, 4, 5);
const Duffy = new Duck('Duffy', DuckImage, 2, 1);
const Max = new Dog('Max', DogImage, 4, 0.6);
const Kartopu = new Duck('Kartopu', DuckImage, 2, 0.5);
const Winnie = new Duck('Winnie', DuckImage, 2, 3);
const Alex = new Dog('Alex', DogImage, 4, 1);

const farmAnimals = [Sila, Duffy, Max, Kartopu, Winnie, Alex];

// Render Cards to the screen
renderCards(farmAnimals);

// Add event listener for searchbar. Rerender cards on search.
document.querySelector('.searchBar').addEventListener('input', (e) => {
  const filteredAnimals = farmAnimals.filter((data) => data.name.toLowerCase().includes(e.target.value.toLowerCase()));
  renderCards(filteredAnimals);
});
