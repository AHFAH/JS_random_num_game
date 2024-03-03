const range = document.querySelector("#range");
const mynum = document.querySelector("#your_num");
const number = document.querySelector("#number");
const h2 = document.querySelector("h2");
const ch = document.querySelector("#choose");

function prevent(event) {
  event.preventDefault();
  const rv = parseInt(range.value, 10);
  const nv = parseInt(mynum.value, 10);
  const random = Math.ceil(Math.random()*rv);
  console.log(random);
  ch.innerHTML = `You chose: ${nv}, the machine chose: ${random}`;

  if(random === nv){
    h2.innerHTML = "You won!";
  }
  else{
    h2.innerHTML = "You lost!";
  }
}

number.addEventListener("submit", prevent);


