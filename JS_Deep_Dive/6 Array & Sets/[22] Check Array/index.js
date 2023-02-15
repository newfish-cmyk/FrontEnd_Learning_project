const temperatures = [
    { degrees: 69, isRecordTemp: false }, 
    { degrees: 82, isRecordTemp: true }, 
    { degrees: 73, isRecordTemp: false }, 
    { degrees: 64, isRecordTemp: false }
];

console.log(temperatures);
console.log(temperatures.some( temperature => temperature.degrees>80));
console.log(temperatures.every( temperature => temperature.degrees>80));

// console.log(temperatures.indexOf(82))
// console.log(temperatures.indexOf(50))
// console.log(temperatures.includes(73))


// .indexOf -> the position of element
// .includes -> whether an element exists
// .some -> at least one element meet the conditions
// .every -> every element meet the condition