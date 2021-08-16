const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// Exercises

// 1) What is the average income of all the people in the array?
var avg = people.reduce((accumulator, person) => {
    return (accumulator + parseInt(person.salary)) / people.length;
}, 0);
console.log(avg)


// 2) Who are the people that are currently older than 30?
var age30 = people.filter((person) => {
    return new Date().getFullYear() - new Date(person.DOB).getFullYear() > 30;
});
console.log(age30);


// 3) Get a list of the people's full name (firstName and lastName).
var fullName = people.map((person) => {
    return `${person.firstName} ${person.lastName}`;
});
console.log(fullName);

// 4) Get a list of people in the array ordered from youngest to oldest.
var sortArr = people.sort((personA, personB) => new Date(personB.DOB) - new Date(personA.DOB));
console.log(sortArr);


// 5) How many people are there in each department?
var department = people.reduce((accumulator, person) => {
    if (person.department in accumulator) {
        accumulator[person.department] += 1;
    } else {
        accumulator[person.department] = 1;
    }
    return accumulator;
}, {});
console.log(department);


const characters = [{
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// MAP

//     Get an array of all names
var allNames = characters.map(character => character.name);
console.log(allNames);
//     Get an array of all heights
var allHeights = characters.map(character => character.height);
console.log(allHeights);
//     Get an array of objects with just name and height properties
var allNameHeights = characters.map(character => {
    return { name: character.name, height: character.height };
});
console.log(allNameHeights);
//     Get an array of all first names
var firstName = characters.map(character => character.name.split(" ")[0]);
console.log(firstName);

// REDUCE

//     Get the total mass of all characters
var totalMass = characters.reduce((sum, character) => sum + parseInt(character.mass), 0);
console.log(totalMass);
//     Get the total height of all characters
var totalHeight = characters.reduce((sum, character) => sum + parseInt(character.height), 0);
console.log(totalHeight);
//     Get the total number of characters in all the character names
var totalName = characters.reduce((charLength, character) => charLength + character.name.length, 0);
console.log(totalName);
//     Get the total number of characters by eye color (hint. a map of eye color to count)
var totalEyeColor = characters.reduce((eyeColor, character) => {
    if (character.eye_color in eyeColor) {
        eyeColor[character.eye_color]++;
    } else {
        eyeColor[character.eye_color] = 1;
    }
    return eyeColor;
}, {});
console.log(totalEyeColor);

// FILTER

//     Get characters with mass greater than 100
var mass100 = characters.filter(character => character.mass > 100);
console.log(mass100);
//     Get characters with height less than 200
var height200 = characters.filter(character => character.height < 200);
console.log(height200);
//     Get all male characters
var maleChar = characters.filter(character => character.gender === 'male');
console.log(maleChar);
//     Get all female characters
var feMaleChar = characters.filter(character => character.gender === 'female');
console.log(feMaleChar);

// SORT

//     Sort by name
console.log("================== Sort Name ===================");
var nameSort = characters.sort((characterA, characterB) => {
    return (characterA.name.toLowerCase() < characterB.name.toLowerCase()) ? -1 : 1;
});
console.log(nameSort);
console.log("================== End Sort Name ===================");
//     Sort by mass
console.log("================== Sort Mass ===================");
var massSort = characters.sort((characterA, characterB) => characterA.mass - characterB.mass);
console.log(massSort);
console.log("================== End Sort Mass ===================");
//     Sort by height
console.log("================== Sort Height ===================");
var heightSort = characters.sort((characterA, characterB) => characterA.height - characterB.height);
console.log(heightSort);
console.log("================== End Sort Height ===================");
//     Sort by gender
console.log("================== Sort Gender ===================");
var genderSort = characters.sort((characterA, characterB) => {
    return (characterA.gender < characterB.gender) ? -1 : 1;
});
console.log(genderSort);
console.log("================== End Sort Gender ===================");
// EVERY

//     Does every character have blue eyes?
var everyBlue = characters.every(character => character.eye_color === 'blue');
console.log(everyBlue);
//     Does every character have mass more than 40?
var everyMass40 = characters.every(character => parseInt(character.mass) > 40);
console.log(everyMass40);
//     Is every character shorter than 200?
var everyHeight200 = characters.every(character => parseInt(character.height) < 200);
console.log(everyHeight200);
//     Is every character male?
var everyMale = characters.every(character => character.gender === 'male');
console.log(everyMale);

// SOME

//     Is there at least one male character?
var isMaleCharacterExist = characters.some(character => character.gender === 'male');
console.log(isMaleCharacterExist);
//     Is there at least one character with blue eyes?
var isBlueEyesExist = characters.some(character => character.eye_color === 'blue');
console.log(isBlueEyesExist);
//     Is there at least one character taller than 210?
var isTaller210 = characters.some(character => character.height > 210);
console.log(isTaller210);
//     Is there at least one character that has mass less than 50?
var isMass50 = characters.some(character => character.mass < 50);
console.log(isMass50);