// Table element
const table = document.getElementById("myTable");

// Add a new record to the table
function addRecord(name, email, phone) {
    // Create a new row and cells for the record
    const newRow = document.createElement("tr");
    const cell1 = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const cell4 = document.createElement("td");
    
    // Populate the cells with data
    cell1.textContent = table.rows.length + 1 + "."; // Incremental number for each row
    cell2.textContent = name;
    cell3.textContent = email;
    cell4.textContent = phone;

    // Append cells to the new row
    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    
    // Append the new row to the table body
    table.getElementsByTagName("tbody")[0].appendChild(newRow);
}

// Add a header row to the table
function addTableHeader(headerData) {
    // Create the header row and cells
    const tableHeader = document.createElement("thead");
    const headerRow = document.createElement("tr");
    
    // Populate the header cells with data
    for (const headerText of headerData) {
        const headerCell = document.createElement("th");
        headerCell.textContent = headerText;
        headerRow.appendChild(headerCell);
    }
    
    // Append the header row to the table header
    tableHeader.appendChild(headerRow);

    // Insert the header before the table body
    const tableBody = table.getElementsByTagName("tbody")[0];
    table.insertBefore(tableHeader, tableBody);
}

// Add a sample record to the table
addRecord("Mukhriz Jamil Asoka", "mukriz@corp.jo", "651181187223");

// Add a header to the table
addTableHeader(["", "Name", "Email", "Phone"]);

// Event listener for click events on table body
table.getElementsByTagName("tbody")[0].addEventListener("click", event => {
    // Check if the clicked element is a table cell
    if (event.target.tagName === "TD") {
        // Remove the parent row if a cell is clicked
        event.target.parentNode.remove();
    }
});