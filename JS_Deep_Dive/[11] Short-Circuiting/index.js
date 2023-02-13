const response = "heheer";
const isEmailVerified = true;
// const username = response ? response : "guest";

const username = response || "guest";
// guest is a default value

const email = isEmailVerified && 'abc@abc.com';
// isEmailVerified is a precondition

// isEmailVerified && response || "guest"

console.log(username);
