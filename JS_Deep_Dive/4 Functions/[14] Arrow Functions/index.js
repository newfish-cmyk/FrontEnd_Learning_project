const username = 'john';
const capitalize = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`

function greetUser(name, callback) {
    return callback(capitalize(name));
}

const result = greetUser(username, name => `Hi there, ${name}!`)
