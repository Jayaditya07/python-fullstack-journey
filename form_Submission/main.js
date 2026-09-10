// Module: Student Form Handler
// Purpose: Capture student data from the form, store entries in an array, and render each student as a card in the display section.




// ==== Config ====


let studentform = document.getElementById("studentform"); // Form element for student input
let displysection = document.getElementById("displysection"); // Container where student cards will be rendered


// ==== State ====


let arr = [];                  // In‑memory collection of submitted student objects


// ==== Handlers ====

// Render all student cards from the `arr` collection
/**
 * Updates the display section with the current list of students.
 * Clears previous content and injects a card for each student object.
 */



function disply() {
    // Reset the container before re‑rendering
    displysection.innerHTML = "";

    // Iterate over each student entry and append its markup
    for (let i of arr) {
        // Template literal builds a card; note the use of backticks for multi‑line HTML
        displysection.innerHTML += `
            <div class="student-card">
                <h2>${i.name}</h2>
                <p>Age: ${i.Age}</p>
                <p>Class: ${i.class}</p>
            </div>
        `;
    }
}




// Process form submission, create a student object, store it, and refresh the UI
/**
 * Form submit event handler.
 *
 * @param {Event} e - The submit event object.
 */


function fun(e) {
    e.preventDefault(); // Prevent default form submission (page reload)

    // Assemble student data from form fields (indexed by input order)
    let data = {
        name: e.target[0].value,
        Age: e.target[1].value,
        Avtar: e.target[2].value,
        class: e.target[3].value
    };

    console.log(data); // Debug: output the captured data

    arr.push(data); // Persist the new student entry

    disply(); // Re‑render the updated student list
}



// ==== Event Bindings ====
studentform.addEventListener("submit", fun); // Attach submit handler to the form