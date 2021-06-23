function sayHello() {
  let myName = prompt('Как тебя зовут, разработчик?');
  let span = document.querySelector('span');
  span.textContent = myName;
}

let button = document.querySelector('button');
button.onclick(sayHello());
