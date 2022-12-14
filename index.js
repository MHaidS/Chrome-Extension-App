let myLeads = [];
// let oldLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadsFromLocalStorage);

// Check if leadsFromLocalStorage is truthy
// If so, set myLeads to its value and call renderLeads()

// Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  // Refactor renderLeads() to use as a parameter
  // renderLeads();
  render(myLeads);
}

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // console.log(tabs);
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
    <li>
      <a target="_blank" href='${leads[i]}'>
        ${leads[i]}
      </a>    
    </li>
  `;
  }
  ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("dblclick", function () {
  // console.log("double clicked!");
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  // Save the myLeads array to localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  // Refactor renderLeads() to use as a parameter
  // renderLeads();
  render(myLeads);

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});
