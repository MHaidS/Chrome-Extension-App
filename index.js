let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
// 36. Get the leads from localStorage
// 36.1) Get the leads from the localStorage - PS: JSON.parse()
//        JSON.parse(localstorage.getItem("myLeads"));
// 36.2) Store it in a variable, leadsFromLocalStorage

// localStorage.clear();
// ["lead1", "lead2"] or null
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(leadsFromLocalStorage);

// 39. Checking localStorage before rendering
// 39.1) Check if leadsFromLocalStorage is truthy
// 39.2) If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}
// if 'leadsFromLocalStorage' is a truthy value, it will run renderLeads(); that is, we have persisted our leads across refresh; else, it will move on to the nxt line

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  // 35. Save the leads to localStorage
  // Save the myLeads array to localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads();

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
  // OUTPUT:
  // myLeads
  // ['https://www.apple.com']
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
      <a target="_blank" href='${myLeads[i]}'>
        ${myLeads[i]}
      </a>    
    </li>
  `;
  }
  ulEl.innerHTML = listItems;
}
