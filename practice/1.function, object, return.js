//function
function sayhello(a, b){
    console.log('Hello my name is ' + a + ' and my age is ' + b);
}

sayhello('lampard', 18);
sayhello('gerrard', 22);


//object
const player = {
    age: 18,
    name: 'king'
}
console.log(player)
console.log(player.name);
player.name = 'henry';
console.log(player);


//function+object
const caculator = {
    add: function(a,b){
        console.log(a+b);
    },
    minus: function(a,b){
        console.log(a-b);
    },
    div: function(a,b){
        console.log(a/b)
    }
}

caculator.add(5,1);
caculator.minus(5,1);
caculator.div(4,2);


//return
const Caculator = {
    add: function(a,b){
        return a+b;
    },
    minus: function(a,b){
        return a-b;
    },
    div: function(a,b){
        return a/b
    },
    multi: function(a,b){
        return a*b
    }
}

const addResult = Caculator.add(5,1);
const minusResult = Caculator.minus(addResult,1);
const divResult = Caculator.div(minusResult, addResult);
const multiResult = Caculator.multi(minusResult, addResult);


//return#2
const age = 96;
function calculatorAge(otherAge){
    return otherAge + 2;
}

const KrAge = calculatorAge(age);
console.log(KrAge);