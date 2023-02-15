const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

//const allMenuIdeas = lunchMenuIdeas.concat('Club Sandwich');

const allMenuIdeas = [...lunchMenuIdeas];
allMenuIdeas.push('Club Sandwich');

console.log(allMenuIdeas);
console.log(lunchMenuIdeas);

// .concat would create a new array and put the elements in
// ... can spread the elements of an Array
