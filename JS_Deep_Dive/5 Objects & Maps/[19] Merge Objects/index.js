const user = {
  name: "",
  username: "",
  phoneNumber: "",
  email: "",
  password: "",
};

const newUser = {
    username: "heheer",
    email: "heheer-cmyk@outlook.com",
    password: "123456"
}

const createdUser = { ...user, ...newUser, verified: false };

console.log(Object.assign({}, user, newUser));
// Object
// email: "heheer-cmyk@outlook.com"
// name: ""
// password: "123456"
// phoneNumber: ""
// username: "heheer"