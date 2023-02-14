const user = {
    name: "heheer",
    username: "heheer_yes",
    email: "heheer-cmyk@outlook.com",
    detail: {
        title: "Programmer"
    }
};

const { name:myName, detail:{ title } } = user;
function displayUserBio() {
    console.log(`${myName} is a ${title}`);
}

displayUserBio();


// const { name:myName, email } = user;
// function displayUser() {
//     console.log(`name: ${myName}, email: ${email}`);
// }

// displayUser()