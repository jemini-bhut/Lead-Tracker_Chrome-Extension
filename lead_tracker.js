let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");

// Adding new leads to the list.
inputBtn.addEventListener("click", function() {
    const lead = inputEl.value;
    myLeads.push(lead);
    inputEl.value = ""; // Clearing the input field.
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
    //console.log( localStorage.getItem("myLeads"));
})

// Deleting the leads from the list.
deleteBtn.addEventListener("dblclick", function() {
    console.log("Delete button clicked");
    localStorage.clear(); // Local storage cleared.
    myLeads = []; // Array is cleared.
    renderLeads(); // Rendering the empty list.
})

// Saving the values to the array.
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

// Rendering the entiries to the list.
function renderLeads() {
    // Loop to display the values saved.
    let listItems = "";
    for (let i =0; i < myLeads.length; i++) {
        //listItems += "<li><a target = '_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
        // Using Template String to represent above code.
        listItems += `
            <li>
                <a target = '_blank' href='${myLeads[i]}'> 
                    ${myLeads[i]}
                </a>
            </li>
        `;

        /* Can also be written as:
        const liEl = document.createElement("li");
        liEl.innerHTML = myLeads[i];
        ulEl.appendChild(liEl);*/
    }
    ulEl.innerHTML = listItems;
}


