let myLeads = ["www.google.com", "www.yahoo.com", "www.apple.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// 33. Your first localStorage
// 1. Save a key-value pair in localStorage ===>
// localStorage.setItem("myName", "MHaids");
// 2. Refresh the page. Get the value and log it to the console ===>
// let name1 = localStorage.getItem("myName");
// console.log(name1);
// CONSOLE: name1 ==> MHaids
// 3. Clear localStorage ===>
// localStorage.clear();
// 4. Log out the name after clearing out the storage & this will now return 'null' ===>
let name1 = localStorage.getItem("myName");
console.log(name1);

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

// 21. Create the render function
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  // console.log(myLeads);
  // 21.2) Call the renderLeads() function
  // 22. Clear the input field
  inputEl.value = "";
  renderLeads();
});

// 20.1) Create a variable, listItems, to hold all the HTML for the list items
// 21.1) Wrap the code below in a renderLeads() function
function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    // 20.2) Add the item to the listItems variable instead of the ulEl.innerHTML
    // 23. Add the <a> tag
    // Wrap the lead in an anchor tag (<a>) inside the <li>
    // 24. Template strings
    // 28) Refactor the code below to use a template string
    listItems += `
      <li>
        <a target="_blank" href="${myLeads[i]}">
          ${myLeads[i]} 
        </a>
      </li>
    `;
    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
    // listItems += `<li><a href="#" target="_blank">${myLeads[i]} </a></li>`;

    // ulEl.innerHTML += `<li>${myLeads[i]} </li>`;
  }
  // 20.3) Render the listItems inside the unordered list using ulEl.innerHTML
  ulEl.innerHTML = listItems;
}
