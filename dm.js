1.

let a = document.getElementById('text')
console.log(a);

2.

let b = document.getElementsByTagName('h1')
console.log(b);

3.

let c = document.getElementsByClassName('box')
console.log(c);

4.

let ele = document.getElementsByTagName('h4')[0];
setTimeout(()=>{
    ele.innerText="Hello world";
}, 2000)

5.
  
let Fun=function(){
     let cd=document.getElementsByClassName('crd')
     let rw=document.getElementsByClassName("btn1")[0]
     cd[0].style.flexDirection = "row";
}    

6.

  let value = document.querySelector("h1");
    p =value.id="heading"
    console.log(value);
   setTimeout(() => {
    value.style.fontStyle="italic";
     value.style.color="red"; 
     value.style.fontSize="40px";
   }, 2000);

7.

   
let s= document.getElementById("btun")
s.style.color="purple";
   function change(){
    let s= document.getElementById("btun")
    s.style.color="red";
    s.innerText="welcome to Elevation academy"
   }
   
8.

   function getTime (){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML='PM';
    }
    else{
        session.innerHTML='AM';
    }
    
    if(hrs > 12){
        hrs = hrs -12;
    }

    if (hrs < 10){
        hrs = '0' + hrs;
    }


    if (min < 10){
        min = '0' + min ;
    }


    if (sec < 10){
        sec = '0' + sec ;
    }
    

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(getTime , 10);




9.

let select = document.getElementById('select1')

function getOption() {
    selectElement = document.querySelector('#select1');
    output = selectElement.value;
    document.querySelector('.output').textContent = output;
}


function check(){
 let msg1 = document.getElementById("message1");
 let regex1 = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 let email = document.getElementById("email").value;
 let lastVal = email.slice(-14);
 let result1 = regex1.test(email);
 if(result1 && lastVal==="@prepbytes.com"){
 msg1.innerText = " Email is Valid"
 }
 else{
 msg1.innerText = " Email is InValid"
 }
 let msg2 = document.getElementById("message2");
 let regex2 = /^[9]+[1]+[0-9]{8}$/;
 let phone = document.getElementById("phone").value;
 let result2 = regex2.test(phone);
 if(result2){
 msg2.innerText = " Phone Number is Valid"
 }
 else{
 msg2.innerText = " Phone Number is Invalid"
 }
 let msg3 = document.getElementById("message3");
 let year = document.getElementById("birthYear").value;
 let year1 = parseInt(year.slice(0,4));
 if(year1 > 1995){
 msg3.innerText = " Birth Year is valid"
 }
 else{
 msg3.innerText = " Birth Year is Invalid"
 }
  }