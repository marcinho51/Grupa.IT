const btn = document.querySelector("#btn");
const ul = document.querySelector("#list");


const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

const drawNumbers = () => {
    let evenNumbers=[];
    let oddNumbers=[];

    for (let i = 1; i<=20; i++) {
       let drawNumber = randomIntFromInterval(1,100);
       if (drawNumber%2 == 0) {
           evenNumbers.push(drawNumber);
       } else {
           oddNumbers.push(drawNumber);
       }
    }

    evenNumbers.sort((a,b) => a-b);
    oddNumbers.sort((a,b) => a-b);

    console.log(evenNumbers);
    console.log(oddNumbers);
}


btn.addEventListener('click', drawNumbers);