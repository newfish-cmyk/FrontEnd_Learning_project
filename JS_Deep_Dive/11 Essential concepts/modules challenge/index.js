// Challenge:
// Often in development you can reuse someone else's code. 
// In this challenge we have a fake function that imitates getting user's 
// data from an API and return you some details.  
// Use modules to import getUser function and display the data on screen.

// Don't forget to call new App() in the end.

// Challenge stub code: 

import getUser from './utils/getUsers.js'

class App {
    constructor() {
      this.render();
    } 
    
    render() {
      console.log(getUser())
      document.getElementById('root').innerHTML = `
        <div>${getUser().name} works for ${getUser().company}</div>
      `
    }
}

new App();