import { getDate } from "./utils/date.js";

// Modules - allow us to share code between files
class App {
    constructor() {
        this.render();
    }

    render() {
        document.getElementById('root').innerHTML = `
            <div>Date: ${getDate()}</div>
        `;
    }
}



new App();