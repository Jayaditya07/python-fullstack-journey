
// Initial Data

let tableEntries = [
    {
        type: 1,
        name: "income",
        amount: 25000
    },

    {
        type: 0,
        name: "rent",
        amount: 18000
    },

    {
        type: 0,
        name: "food",
        amount: 5000
    }
];


// Update Expense Summary

function updateSummary() {

    let totalIncome = tableEntries.reduce((total, entry) => {

        if (entry.type === 1) {
            total += entry.amount;
        }

        return total;

    }, 0);


    let totalExpense = tableEntries.reduce((total, entry) => {

        if (entry.type === 0) {
            total += entry.amount;
        }

        return total;

    }, 0);


    updatedInc.innerText = totalIncome;

    updatedExp.innerText = totalExpense;

    updatedBal.innerText = totalIncome - totalExpense;
}


// Add New Entry

function addItem() {

    let type = itemType.value;

    let name = document.getElementById("name");

    let amount = document.getElementById("amount");


    // Input Validation

    if (name.value === "" || Number(amount.value) === 0) {

        return alert("Incorrect Input");

    }


    if (Number(amount.value) <= 0) {

        return alert("Incorrect amount! Can't add negative");

    }


    // Add New Data

    tableEntries.push({

        type: Number(type),

        name: name.value,

        amount: Number(amount.value)

    });


    updateTable();


    name.value = "";

    amount.value = 0;
}


// Load Items

function loadItems(entry, index) {

    let table = document.getElementById("table");

    let row = table.insertRow(index + 1);


    let cell0 = row.insertCell(0);

    let cell1 = row.insertCell(1);

    let cell2 = row.insertCell(2);

    let cell3 = row.insertCell(3);

    let cell4 = row.insertCell(4);


    cell0.innerHTML = index + 1;

    cell1.innerHTML = entry.name;

    cell2.innerHTML = entry.amount;


    cell4.innerHTML = "&#9746;";

    cell4.classList.add("zoom");


    cell4.addEventListener("click", () => {

        del(entry);

    });


    if (entry.type === 0) {

        cell3.innerHTML = "&#10138;";

        cell3.style.color = "red";

    } 
    
    else {

        cell3.innerHTML = "&#10136;";

        cell3.style.color = "green";

    }
}


// Remove Table Rows

function remove() {

    while (table.rows.length > 1) {

        table.deleteRow(-1);

    }
}


// Delete Entry

function del(element) {

    remove();


    tableEntries = tableEntries.filter(

        (entry) => entry.name !== element.name

    );


    tableEntries.map((entry, index) => {

        loadItems(entry, index);

    });


    updateSummary();
}


// Update Table

function updateTable() {

    remove();


    tableEntries.map((entry, index) => {

        loadItems(entry, index);

    });


    updateSummary();
}


// Initial Load


updateTable();
