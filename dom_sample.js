/**
 * dom_sample.js: Reads in a JSON array. Displays data within the array as a HTML DOM table.
 * Author: Sue Nopachinda (seumoo.com)
 */



/**
 * Gets the sample data for the DOM table
 * @returns {Object[]} tableData - object array if length > 0; otherwise, null
 */
function getTableData() {
    const tableData = sample_table_data;       // object array from table_data.js imported via index.html
    console.log(tableData);                    // displays the object array in your developer console

    if (tableData.length <= 0) return null;    // if there are no items in the array, then return null
    else return tableData;                     // otherwise, return the JSON array
}

/**
 * Counts the number of items in an object array and displays the count as a <p> element
 * @param {Object[]} tableDataArray - object array of table data
 */
function createNotificationDom(tableDataArray) {
    const notificationElement = document.createElement("p");

    if (tableDataArray === null || tableDataArray.length === 0) {
        notificationElement.innerText = "There is no data to display!";
    }
    else {
        notificationElement.innerText = `There are ${tableDataArray.length} items in the table:`;       // display table length using a template string
    }

    document.body.appendChild(notificationElement);     // attach the notification DOM to the body
}

/**
 * Creates a table row <tr> DOM element with table header <th> DOM elements. Appends the <tr> DOM element to a <table> DOM element
 * @param {Object} firstDataObject - first item of a object array
 * @param {HTMLElement} tableDomElement - <table> DOM element
 */
function createTableHeader(firstDataObject, tableDomElement) {
    const tableHeaderRowElement = document.createElement("tr");         // creates <tr> HTML DOM element

    for (const [key, value] of Object.entries(firstDataObject)) {
        const tableHeaderElement = document.createElement("th");        // creates <th> HTML DOM element
        tableHeaderElement.innerHTML = key;                             // sets the text contents of <th>
        tableHeaderRowElement.append(tableHeaderElement);               // appends the <th> element to the <tr> element
    }

    tableDomElement.append(tableHeaderRowElement);                      // appends <tr> to the <table> element
}

/**
 * Creates a table row <tr> DOM element with table data <td> DOM elements. Appends the <tr> DOM element to a <table> DOM element
 * @param {Object} dataItem - an object containing table data
 * @param {HTMLElement} tableDomElement - <table> DOM element
 */
function createTableData(dataItem, tableDomElement) {
    const tableRowElement = document.createElement("tr");             // creates <tr> HTML DOM element

    for (const [key, value] of Object.entries(dataItem)) {
        const tableDataElement = document.createElement("td");        // creates <td> HTML DOM element
        tableDataElement.innerHTML = value;                           // sets the text contents of <td>
        tableRowElement.append(tableDataElement);                     // appends the <td> element to the <tr> element
    }

    tableDomElement.append(tableRowElement);                          // appends <tr> to the <table> element
}

/**
 * (Optional)
 * Creates a table header <th> or row <tr> DOM element. Appends the <tr> DOM element to a <table> DOM element
 * @param {Object} dataItem - an object containing table data
 * @param {HTMLElement} tableDomElement - <table> DOM element
 * @param {boolean} isHeader - true if object is processed as a header row; false if the object is processed as a data row
 */
 function createTableRow(dataItem, tableDomElement, isHeader = false) {
    const tableRowElement = document.createElement("tr");                   // creates <tr> HTML DOM element
    const tableDataTag = `${isHeader ? "th" : "td"}`;                       // "th" if isHeader = true; else "td"

    for (const [key, value] of Object.entries(dataItem)) {
        const tableDataElement = document.createElement(tableDataTag);      // creates a <th> or <td> HTML DOM element
        tableDataElement.innerHTML = `${isHeader ? key : value}`;           // set the text contents of <td>
        tableRowElement.append(tableDataElement);                           // a the <td> element to the <tr> element
    }

    tableDomElement.append(tableRowElement);                                // append <tr> to the <table> element
}

/**
 * Creates a table <table> DOM element containing data from an object array. Appends the <table> element to the document body
 * @param {Object[]} tableDataArray - object array of table data
 */
function createTableDom(tableDataArray) {
    const tableElement = document.createElement("table");           // create the table DOM element

    // loop through each object in the object array
    for (let index = 0; index < tableDataArray.length; index++) {
        const tableDataObject = tableDataArray[index];              // an object in the array

        // if this is the first item in the table, create table headers <th>
        if (index === 0) {
            createTableRow(tableDataObject, tableElement, true);
        }

        // process each item in the array into a table row <tr>
        createTableRow(tableDataObject, tableElement);
    }

    document.body.appendChild(tableElement);     // attach the table DOM to the body
}

/**
 * Gets an object array and displays an HTML DOM table of the array contents
 */
function displayDomTable() {
    const tableDataArray = getTableData();      // get the object array which stores the table data
    createNotificationDom(tableDataArray);      // display the number of elements in the object array

    if (tableDataArray !== null) {
        createTableDom(tableDataArray);         // create an HTML DOM table using the objects in the array
    }
}

displayDomTable();      // create the HTML DOM array and display it