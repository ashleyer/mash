


console.log('it is working');
//target main tag in html then set element display none, then when press start, switch display to 
const blankIntro = document.querySelectorAll('.list');
blankIntro.style.display = "none";

buttonPlay.onclick = function playMASH() {


    let job1 = prompt("type in a job");
    console.log("this is box 1 typed" + job1);
    let jobArray = [];
    jobArray.push(job1);
    console.log(jobArray);

    let job2 = prompt('type in another job');
    console.log('this is box 2 typed' + job2);
    jobArray.push(job2);
    console.log(jobArray);

    let job3 = prompt('type in a third job');
    console.log('this is box 3 typed' + job3);
    jobArray.push(job3);
    console.log(jobArray);
    let love1 = prompt("type in a love-interest");
    console.log("this is box 1 typed" + love1);
    let loveArray = [];
    loveArray.push(love1);
    console.log(loveArray);

    let love2 = prompt('type in another love-interest');
    console.log('this is box 2 typed' + love2);
    loveArray.push(love2);
    console.log(loveArray);

    let love3 = prompt('type in a third love-interest');
    console.log('this is box 3 typed' + love3);
    loveArray.push(love3);
    console.log(loveArray);
    let pet1 = prompt("type in a pet");
    console.log("this is box 1 typed" + pet1);
    let petArray = [];
    petArray.push(pet1);
    console.log(petArray);

    let pet2 = prompt('type in another pet');
    console.log('this is box 2 typed' + pet2);
    petArray.push(pet2);
    console.log(petArray);

    let pet3 = prompt('type in third pet');
    console.log('this is box 3 typed' + pet3);
    petArray.push(pet3);
    console.log(petArray);
    let place1 = prompt("type in a place");
    console.log("this is box 1 typed" + place1);
    let placeArray = [];
    placeArray.push(place1);
    console.log(placeArray);

    let place2 = prompt('type in another place');
    console.log('this is box 2 typed' + place2);
    placeArray.push(place2);
    console.log(placeArray);

    let place3 = prompt('type in third place');
    console.log('this is box 3 typed' + place3);
    placeArray.push(place3);
    console.log(placeArray);

    let mashArray = ["Mansion", "Apartment", "Shack", "House"],

//         //i need the code below to be able to access the code above for setting variables, but i want a pause..
//         alert("Great! Next, before you click 'okay' below, locate the spiral on the main page, and click it! This will give us your special number used to select your results. Then, press Okay here:")

//     alert.onclick = function (img)
// function waitSec(event) {
//         var xwSec = event.target;
//         document.getElementById("demo").innerHTML = "Triggered by a " + x.tagName + " element";
//     }
//     alert(e.target);

//     (function () {
//         var timeToWaitInSeconds = 10;

//         function countdown() {
//             console.log(timeToWaitInSeconds);
//             timeToWaitInSeconds -= 1;

//             if (timeToWaitInSeconds > 0) {
//                 setTimeout(countdown, 1000);
//             }
//         }

//         setTimeout(countdown, 1000);
//     }());
   
    jList = document.getElementById("jobList");
    jobArray.forEach((i) => {
        let li = document.createElement("li");
        li.innerText = i;
        jList.appendChild(li);
    });
    let loList = document.getElementById("loveList");
    loveArray.forEach((i) => {
        let li = document.createElement("li");
        li.innerText = i;
        loList.appendChild(li);
    });
    let petList = document.getElementById("petList");
    petArray.forEach((i) => {
        let li = document.createElement("li");
        li.innerText = i;
        petList.appendChild(li);
    });
    let plaList = document.getElementById("placeList");
    placeArray.forEach((i) => {
        let li = document.createElement("li");
        li.innerText = i;
        plaList.appendChild(li);
    });
    let maList = mashArrayforEach(i);
    mashArray.forEach((i) => {
        let li = document.createElement("li");
        li.innerText = i;
        maList.appendChild(li);
    });


    let randomJob = jobArray[Math.floor(Math.random() * jobArray.length)];
    console.log(randomJob);
    let randomLove = loveArray[Math.floor(Math.random() * loveArray.length)];
    console.log(randomLove);
    let randomPet = petArray[Math.floor(Math.random() * petArray.length)];
    console.log(randomPet);
    let randomPlace = placeArray[Math.floor(Math.random() * placeArray.length)];
    console.log(randomPlace);

    let randomArray = [];
    randomArray.push(randomJob);
    randomArray.push(randomLove);
    randomArray.push(randomPet);
    randomArray.push(randomPlace);

    console.log(randomArray);

    let randomList = document.getElementById("randList");
    randomArray.forEach((i) => {
        let p = document.createElement("p");
        p.innerText = i;
        randomList.appendChild(p);
    });

};

blankIntro.style.display = "block";

// h2.onload.innerHtml = "You can look forward to living in " + randList.li + ", in a " + randMash.li + ", with " + randList.li + "."
//     + randList.li + "Life will be happy, working as a " + randlist.li + ", with " + randList.li + "as your pet."
