function readingBook(title,author,readingStatus){
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus;

    this.check = function(readingStatus){
        if (this.readingStatus === "yes") {
            console.log(`Already read` + ` ${this.title}` +` by ` + `${this.author}`);
          } else {
            console.log(`You still need to read ` + `${this.title}`+ ` by `+ `${this.author}`);
          }
    }
}

let title = prompt("Enter book title !");
let author = prompt("Enter book author !");
let readingStatus = prompt("Enter yes if you read the book, or no if you don't read it !");

Book1 = new readingBook(title, author, readingStatus);
Book1.check();
