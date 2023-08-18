//----1----
let question_01 = document.getElementById("text")
function toChange1(){
    question_01.innerText = "content changed by accessing id name"
} 
console.log(question_01)

//----2----
let question_02 = document.getElementsByTagName("p")[1]
console.log(question_02)
function toChange2(){
    question_02.innerText = "content changed by accessing tag name"
} 
//----3----
let question_03 = document.getElementsByClassName("box")[0]
console.log(question_03)
function toChange3(){
    question_03.innerText = "content changed by accessing class name"
}
//-----4----
let question_04 = document.getElementById("question_04")
function toChange4(){
    question_04.innerText = "Hello world"
}
console.log(question_04)

//----5----
let question_05 = document.getElementById("question_05")
function changeHeading(){
    question_05.innerText= "Welcome To Elevation Academy"
}
//----6----
let question_06 = document.getElementById("heading")
function toChange6(){
    question_06.style.color="red"
}

//----7----
const container = document.querySelector('.container');
const changeDirectionBtn = document.getElementById('changeDirection');

changeDirectionBtn.addEventListener('click', () => {
    if (container.style.flexDirection === 'row') {
        container.style.flexDirection = 'column';
    } else {
        container.style.flexDirection = 'row';
    }
});

//----9----
function clock(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    //12 hours format
    if(hours > 12){
        hours = hours - 12
    }

    //assigning real time value
    let hrs = document.getElementById("hrs");
    hrs.innerText = hours;
    let mins = document.getElementById("mins");
    mins.innerText = minutes;
    let secs = document.getElementById("secs");
    secs.innerText = seconds;

}
setInterval(()=>{
    clock()
},1000)