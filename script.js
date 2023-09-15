// // let currentDate = new Date();
// // let date = `${currentDate.getDate()} / 0${currentDate.getMonth() +1} / ${currentDate.getFullYear()}`

/*
Expected Output 
mm-dd-yyyy
mm/dd/yyyy
dd-mm-yyyy
dd/mm/yyyy
*/

let today = new Date();
let date = today.getDate();
let month = today.getMonth() +1;
let year = today.getFullYear();

if(date < 10){
    date = `0${date}`
}

if(month < 10){
    month = `0${month}`
}

let  today1 = `${month}-${date}-${year}`
let  today2 = `${month}/${date}/${year}`
let  today3 = `${date}-${month}-${year}`
let  today4 = `${date}/${month}/${year}`

document.querySelector('.f1').innerHTML = today1;
document.querySelector('.f2').innerHTML = today2;
document.querySelector('.f3').innerHTML = today3;
document.querySelector('.f4').innerHTML = today4;
