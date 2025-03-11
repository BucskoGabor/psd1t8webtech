console.log("Hi");

let variable = 10;

variable = 'string';
variable = false;

const constant = 10;

const randomNum = Math.random();

const userName = "Feri";

// trusy nem üres string, szám, true, bármilyen objektum
// falsy üres string, 0, false, null, undefined, NaN


if (userName) {
  console.log("Felhasználó: " + userName);
} else {
  console.log("Nincs felhasználó");
}

const values = ['asd', 2, false, [], null, undefined, NaN, ''];

for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

for (const index in values) {
    if (index % 2 == 0) {
        console.log(values[index]);
    }
}

//for of

for (const value of values) {
    console.log(value);
}

const excangeRates = [400, 450, 500, 600, 700, 800, 380, 399];

//egyes hónapokban hány euro lenne 1500 forint

const euros = excangeRates.map(rate => 1500 / rate);
console.log(euros);

const valami = excangeRates.filter(rate => rate < 400)
console.log(valami);

function grant(name){
    console.log("Hello ", name);
}
grant('Béla');

function square(value){
    return value * value;
}
console.log(square(4));

const person = {
    name: 'John',
    age: 32,
    active: true,
    dogs: ['Morzsi', 'Feri'],
    greet: function () {
        console.log('Hello', this.name)
    }
};

person.greet();
