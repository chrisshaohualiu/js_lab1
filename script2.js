let hours = 50;
let wage = 15;
let paycheck;
let weeksToAMillion;

if(hours<=40){
    paycheck = wage*hours;
}
else if(hours>40){
    paycheck = (40+(hours-40)*1.5)*wage;
}

console.log(`${paycheck} dollars made this week.`)
weeksToAMillion = Math.floor(1000000/paycheck);
console.log(`${weeksToAMillion} until a million dollars made.`);