const restaurants = [
  { name: 'Cap City Diner', milesAway: 2.2 },
  { name: 'Chop Shop', milesAway: 4.1 },
  { name: 'Northstar Cafe', milesAway: 0.9 },
  { name: 'City Tavern', milesAway: 0.5 },
  { name: 'Shake Shack', milesAway: 5.3 }
]

const result = restaurants.filter(restaurant => restaurant.name.startsWith('C') && restaurant.milesAway < 3)
console.log(result);

const result1 = restaurants.find(restaurants => 
 restaurants.name.toLowerCase().includes('city') 
);
console.log(result1);

// .filter gives all elements that meet the conditions
// .find gives one element
