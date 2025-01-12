
// Change content for the first header
let firstHeader = document.querySelector("h1");
firstHeader.innerText = "Woow, perfect !"

// Changing first paragraph
let firstDiv = document.getElementById("first");
let lastChild = firstDiv.lastElementChild;
lastChild.innerText = "My first paragraph";

// Changing second pargraph
let secondParagraph = document.getElementsByClassName("paragraph second")[0];
secondParagraph.innerText = "Neeeeew text for second paragraph!";

// Changing tag TEXT
let newText = document.getElementsByTagName("text")[0];
newText.innerText = "This is my new Text !"

// Changing last h1
let lastHeader3 = document.getElementsByTagName("h3")[0];
let previous = lastHeader3.previousElementSibling;
previous.innerText = "Yeeee, we did it !";


// Changing h3
let lastHeader = document.getElementsByTagName("h3")[0];
lastHeader.innerText = "OK, I will change....";












