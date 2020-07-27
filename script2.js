let hours = 10;
let wage = 20;


function paycheckCalculator(wage, hours){
    let paycheck;
    let weeksToAMillion;
if(hours<=40){
    paycheck = wage*hours;
}
else if(hours>40){
    paycheck = (40+(hours-40)*1.5)*wage;
}


console.log(`If our wage is $${wage}/hr and we worked ${hours} hours then our paycheck is $${paycheck}.`)
weeksToAMillion = Math.ceil(1000000/paycheck);
console.log(`${weeksToAMillion} weeks until a million dollars made.`);
}

paycheckCalculator(10, 20);
paycheckCalculator(10, 40);
paycheckCalculator(10, 50);
paycheckCalculator(12, 60);