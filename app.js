// //TASK 1
// async function getQuote() {
//     const response = await fetch ("https://meowfacts.herokuapp.com/");
//     const data = await response.json();
//     const heading = document.querySelector("h1");
//     heading.innerText = data.data[0];
//     let button = document.querySelector("new-quote-button");
//     element.addEventListener(type,eventListener);
//     button.addEventListener("click",getQuote);
//     }
// getQuote();



//TASK 2
//create a new button with id "new-quote-button" to call getQuote when the user clicks.

// async function getQuote() {
//     const response = await fetch("https://meowfacts.herokuapp.com");
//     console.log (response);
//     const data = await response.json();
//     console.log(data);
//     document .getElementById("quote").innerText = data.data[0];
//    let newQuote = document.querySelector("#new-quote-button");
//       newQuote.addEventListener("click", getQuote);
  
//   }
  getQuote()

//   We're now going to display every quote we fetch in a list so that we don't forget our favorites.

// 👉 Create a function that takes in a string, creates a new list item with that string, and adds it to the ol with the id "quote-history".

// 👉 Call this function within your getQuote function so that the quotes get stored in the "quote-history" list.

//Task 3

function getQuote() {
    fetch("https://meowfacts.herokuapp.com")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("quote").innerText = data.data[0];
        let newQuote = document.querySelector("#new-quote-button");
        newQuote.addEventListener("click", getQuote);
        let newListItem = document.createElement("li");
        newListItem.innerText = data.data[0];
        let list = document.querySelector("ol");
        list.appendChild(newListItem);
      });
  }

//Task4

// let quotes = [];

// function getQuote() {
//   fetch("https://meowfacts.herokuapp.com")
//     .then((response) => response.json())
//     .then((data) => {
//       let quote = data.data[0];
//       if (!quotes.includes(quote)) {
//         quotes.push(quote);
//         document.getElementById("quote").innerText = quote;
//         let newListItem = document.createElement("li");
//         newListItem.innerText = quote;
//         let list = document.querySelector("ol");
//         list.appendChild(newListItem);
//       } else {
//         getQuote();
//       }
//     });
// }

// Call getQuote function to fetch and display the initial quote
getQuote();

// Add event listener to fetch a new quote when the button is clicked
let newQuote = document.querySelector("#new-quote-button");
newQuote.addEventListener("click", getQuote);
