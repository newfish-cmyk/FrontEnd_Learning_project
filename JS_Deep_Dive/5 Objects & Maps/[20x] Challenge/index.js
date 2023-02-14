// Challenge: 
// 1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
// 2. Add a boolean property 'visited', to indicate places that you've been to it
// 3. Add an integer property 'averageBill' with how much you spend there on average
// 4. Fetch one of the properties using the get() method

// const favouritePlace = {
//     music: "jazz",
//     name: "Paris House"
// };

const favouritePlace = new Map([
    ['music', 'jazz'],
    ['name', 'Paris House'],
    ['visited', true],
    ['averageBill', 180]
])

const average = favouritePlace.get('averageBill')
console.log(average)

