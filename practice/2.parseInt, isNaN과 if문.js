//parseInt (string ----> int)
//prompt로  How old are you? 알림창을 띄우고 거기에 숫자를 입력하면 그 값으로 출력하고, 숫자가 아닌 다른 것을 입력하면 NaN으로 출력
const aGe = parseInt(prompt('How old are you?'));

console.log(aGe);


//isNaN ---> 숫자인지 아닌지 구분해주는 함수 True or False로 출력해준다. 숫자면 False 아니면 True
const Age = parseInt(prompt('How old are you?'));

if(isNaN(Age)){
    console.log('Please write a number');
} else {
    console.log('Thank you for writing your age.');
}


//if문 심화  || ---> or   && ---> and    === ---> 같다    !== ---> 아니다
const age = parseInt(prompt('How old are you?'));

if(isNaN(age) || age < 0){
    console.log('Please write a real positive number');
} else if(age < 18){
    console.log('You are too young.');
} else if(age >= 18 && age <= 50) {
    console.log('You can drink.');
} else if(age > 50 && age <= 80) {
    console.log("You should exercise.");
} else if(age === 100){
    console.log('Wow you are wise.');
} else if(age > 80){
    console.log('You can do whatever you want.');
}