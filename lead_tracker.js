let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("input-btn");

// Adding new leads to the list.
inputBtn.addEventListener("click", function() {
    const lead = inputEl.value;
    myLeads.push(lead);
    inputEl.value = ""; // Clearing the input field.
    renderLeads();    
})

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


