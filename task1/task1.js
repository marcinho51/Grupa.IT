const btn = document.querySelector("#btn");
const columnOfEvenNumbers= document.querySelector("#columnOfEvenNumbers");
const columnOfOddNumbers= document.querySelector("#columnOfOddNumbers");


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


    for (let i =0; i<evenNumbers.length;i++) {
        const newElement = `<h5>${evenNumbers[i]}</h5>`
        columnOfEvenNumbers.insertAdjacentHTML('beforeend', newElement);
    }

    for (let i =0; i<oddNumbers.length;i++) {
        const newElement = `<h5>${oddNumbers[i]}</h5>`
        columnOfOddNumbers.insertAdjacentHTML('beforeend', newElement);
    }


}


btn.addEventListener('click', drawNumbers);