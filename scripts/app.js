


// console.log('it is working');
//target main tag in html then set element display none, then when press start, switch display to 
const blankIntro = document.querySelector('main');
blankIntro.style.display = "none";

let placeArray = [];
let jobArray = [];
let petArray = [];
let loveArray = [];


const playBut = document.querySelector(".buttonPlay");
playBut.addEventListener("click", function startGame() {
    // console.log('it still works');
    let mashArray = ["Mansion", "Apartment", "Shack", "House"];
    blankIntro.style.display = "block";


    let job1 = prompt("type in a job");
    // console.log("this is box 1 typed" + job1);
    jobArray.push(job1);
    // console.log(jobArray);

    let job2 = prompt('type in another job');
    // console.log('this is box 2 typed' + job2);
    jobArray.push(job2);
    // console.log(jobArray);

    let job3 = prompt('type in a third job');
    // console.log('this is box 3 typed' + job3);
    jobArray.push(job3);
    // console.log(jobArray);

    let love1 = prompt("type in a love-interest");
    // console.log("this is box 1 typed" + love1);

    loveArray.push(love1);
    // console.log(loveArray);

    let love2 = prompt('type in another love-interest');
    // console.log('this is box 2 typed' + love2);
    loveArray.push(love2);
    // console.log(loveArray);

    let love3 = prompt('type in a third love-interest');
    // console.log('this is box 3 typed' + love3);
    loveArray.push(love3);
    // console.log(loveArray);

    let pet1 = prompt("type in a pet");
    // console.log("this is box 1 typed" + pet1);

    petArray.push(pet1);
    // console.log(petArray);

    let pet2 = prompt('type in another pet');
    // console.log('this is box 2 typed' + pet2);
    petArray.push(pet2);
    // console.log(petArray);

    let pet3 = prompt('type in third pet');
    // console.log('this is box 3 typed' + pet3);
    petArray.push(pet3);
    // console.log(petArray);
    let place1 = prompt("type in a place");
    // console.log("this is box 1 typed" + place1);

    placeArray.push(place1);
    // console.log(placeArray);

    let place2 = prompt('type in another place');
    // console.log('this is box 2 typed' + place2);
    placeArray.push(place2);
    // console.log(placeArray);

    let place3 = prompt('type in third place');
    // console.log('this is box 3 typed' + place3);
    placeArray.push(place3);
    // console.log(placeArray);


let randomJob = jobArray[Math.floor(Math.random() * jobArray.length)];
// console.log(randomJob);
let randomLove = loveArray[Math.floor(Math.random() * loveArray.length)];
// console.log(randomLove);
let randomPet = petArray[Math.floor(Math.random() * petArray.length)];
// console.log(randomPet);
    let randomMa = mashArray[Math.floor(Math.random() * mashArray.length)];
    let randomPlace = placeArray[Math.floor(Math.random() * placeArray.length)];
// console.log(randomMa);



let randomArray = [];
randomArray.push(randomJob);
randomArray.push(randomLove);
randomArray.push(randomPet);
randomArray.push(randomPlace);
randomArray.push(randomMa);

// console.log(randomArray);

jList = document.getElementById("jobs");

console.log(jobArray);

jobArray.forEach((i) => {
    let li = document.createElement("li");
    li.innerText = i;
    jList.appendChild(li);
});
let loList = document.getElementById("love");
loveArray.forEach((i) => {
    let li = document.createElement("li");
    li.innerText = i;
    loList.appendChild(li);
});
let petList = document.getElementById("pets");
petArray.forEach((i) => {
    let li = document.createElement("li");
    li.innerText = i;
    petList.appendChild(li);
});
let plaList = document.getElementById("places");
placeArray.forEach((i) => {
    let li = document.createElement("li");
    li.innerText = i;
    plaList.appendChild(li);
});
let maList = document.getElementById("testList");
mashArray.forEach((i) => {
    let li = document.createElement("li");
    li.innerText = i;
    maList.appendChild(li);
});



let randomList = document.getElementById("randList");
randomArray.forEach((i) => {
    let li = document.createElement("li");
    li.innerText = i;
    randomList.appendChild(li);
    console.log(li.innerText);
    console.log(li);
});
});


// // h2.onload.innerHtml = "You can look forward to living in " + randList.li + ", in a " + randMash.li + ", with " + randList.li + "."
// //     + randList.li + "Life will be happy, working as a " + randlist.li + ", with " + randList.li + "as your pet."
