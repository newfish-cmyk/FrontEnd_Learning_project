const isAuthenticated = false;
// let cartItemCount = 0;

// if (isAuthenticated) {
//     cartItemCount = 1;
// } else {
//     cartItemCount = 0;
// }

const cartItemCount = isAuthenticated ? 1 : 0;
console.log(cartItemCount)

