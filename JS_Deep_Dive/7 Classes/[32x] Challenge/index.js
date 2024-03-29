// 1. create a new constructor function, Book, which logs books in the school library (id, title, author, themes[]), 
// 2. Add ids, titles and authors for your two favourite books. 
// 3. Use the prototype keyword to add a theme property to the  books. 
// 4. Add at least one theme to each of your books. 

// Beginning:

function Book(id, title, author, themes=[]) {
	this.id = id;
    this.title = title;
    this.author = author;
    this.themes = themes;
}

const book1 = new Book(001, 'ABC', 'KK');
const book2 = new Book(002, 'MSA', 'QQ', ['advanture']);
console.log(book1);
console.log(book2);

Book.prototype.addThemes = function(theme) {
    this.themes = [...this.themes, theme];
}

book1.addThemes('love');
console.log(book1);
