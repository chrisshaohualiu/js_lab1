let name = "Chris Liu";
let age = 28;
let birthday = "October 14th";
let detroitGC = true;
let lifeEvents= ["I was born in Ann Arbor, Michigan", "I went to college in 2009", "I moved to Los Angeles in 2018"];

if(detroitGC){
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}
else{
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}

for(let i = 0; i<lifeEvents.length; i++){
    console.log(lifeEvents[i]);
}

let counter = 0;


while(true){
    let randomNumber = 1 + Math.floor(Math.random()*10);
    if(randomNumber != 5){
        counter++;
        console.log(`${randomNumber} !== 5`);

    }
    else{
        counter++;
        console.log(`5===5. It took ${counter} iterations to randomly generate the number 5.`);
        break;
    }
}