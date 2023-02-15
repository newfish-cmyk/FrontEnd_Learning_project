const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
];

temperatures.map(temperature => 
    temperature.degrees > 70 ? { ...temperature, isHigh: true }:temperature
).forEach(temperature => {
    if (temperature.isHigh) {
        console.log(`Temperature ${temperature.degrees} was a record high last week!`)
    }
})
// const newTemps = temperatures.map(temperature => 
//     temperature.degrees > 70 ? { ...temperature, isHigh: true }:temperature
// );

// newTemps.forEach(temperature => {
//     if (temperature.isHigh) {
//         console.log(`Temperature ${temperature.degrees} was a record high last week!`)
//     }
// })


// .map works with ternary can change itself easily

// .foreach often works after map or a definitely array to get more information