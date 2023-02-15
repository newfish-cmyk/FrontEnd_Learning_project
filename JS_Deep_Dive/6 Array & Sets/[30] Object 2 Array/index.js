// const obj = { one: 1, two: 2 };

// for (const key in obj) {
//     console.log('value', obj[key]);
// }

const user = {
    name: 'heheer',
    age: 21
};

const value = Object.keys(user).map(key => user[key])

// console.log(value);


const users = {
    '123456': {
        name: 'Wang',
        age: 24
    },
    '2342321': {
        name: 'K',
        age: 23
    },
    '2349789': {
        name: 'Q',
        age: 19
    }
};

const userOver20 = Object.entries(users).reduce((acc, [id, user]) =>{
    if (user.age > 20) {
        acc.push({ ...user, id});
    }
    return acc;
},[]);
console.log(userOver20)