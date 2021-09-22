
//1 global variables
//2 functions
//3 event listeners

console.log('it is working')

function playMASH() {
    alert("Are you ready? Click PLAY");
};

let job1 = prompt("type in a job");
console.log("this is box 1 typed" + job1);
let jobArray = [];
jobArray.push(job1);
console.log(jobArray);

let job2 = prompt('type in another job');
console.log('this is box 2 typed' + job2);
jobArray.push(job2);
console.log(jobArray);

let job3 = prompt('type in third job');
console.log('this is box 3 typed' + job3);
jobArray.push(job3);
console.log(jobArray);


let jList = document.getElementById("jobList");
jobArray.forEach((i) => {
    let li = document.createElement("li");
    li.innerText = i;
    jList.appendChild(li);
});


let job1 = prompt("type in a job");
console.log("this is box 1 typed" + job1);
let jobArray = [];
jobArray.push(job1);
console.log(jobArray);

let job2 = prompt('type in another job');
console.log('this is box 2 typed' + job2);
jobArray.push(job2);
console.log(jobArray);

let job3 = prompt('type in third job');
console.log('this is box 3 typed' + job3);
jobArray.push(job3);
console.log(jobArray);


let jList = document.getElementById("jobList");
jobArray.forEach((i) => {
    let li = document.createElement("li");
    li.innerText = i;
    jList.appendChild(li);
});


let job1 = prompt("type in a job");
console.log("this is box 1 typed" + job1);
let jobArray = [];
jobArray.push(job1);
console.log(jobArray);

let job2 = prompt('type in another job');
console.log('this is box 2 typed' + job2);
jobArray.push(job2);
console.log(jobArray);

let job3 = prompt('type in third job');
console.log('this is box 3 typed' + job3);
jobArray.push(job3);
console.log(jobArray);


let jList = document.getElementById("jobList");
jobArray.forEach((i) => {
    let li = document.createElement("li");
    li.innerText = i;
    jList.appendChild(li);
});


let job1 = prompt("type in a job");
console.log("this is box 1 typed" + job1);
let jobArray = [];
jobArray.push(job1);
console.log(jobArray);

let job2 = prompt('type in another job');
console.log('this is box 2 typed' + job2);
jobArray.push(job2);
console.log(jobArray);

let job3 = prompt('type in third job');
console.log('this is box 3 typed' + job3);
jobArray.push(job3);
console.log(jobArray);


let jList = document.getElementById("jobList");
jobArray.forEach((i) => {
    let li = document.createElement("li");
    li.innerText = i;
    jList.appendChild(li);
});




let randomJob = jobArray[Math.floor(Math.random() * jobArray.length)];
console.log(randomJob);