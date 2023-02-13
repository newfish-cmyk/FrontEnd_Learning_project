// if statements - evaluate boolean values

// const prefersDarkMode = true;
// const prefersSolarizedMode = true;

const colorMode = 'dark'

// if (colorMode === 'dark') {
//     console.log('dark mode set!');
//     document.body.style.background = 'black';
// } else if (colorMode === 'solarized') {
//     console.log('solarized mode set!'); 
//     document.body.style.background = 'palegoldenrod';
// } else {
//     console.log('light mode set!');
//     document .body.style.background = "ghostwhite";
// }

switch (colorMode) {
    case 'dark':
        console.log('dark mode set!');
        document.body.style.background = 'black';
    break;
    case 'solarized':
        console.log('solarized mode set!'); 
        document.body.style.background = 'palegoldenrod';
    break;
    default:
        console.log('light mode set!');
        document.body.style.background = 'ghostwhite';
}
