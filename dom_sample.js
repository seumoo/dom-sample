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
    const tableHeaderRowElement = document.createElement("tr");          // creates <tr> HTML DOM element

    for (const [key, value] of Object.entries(firstDataObject)) {
        const tableHeaderElement = document.createElement("th");        // creates <th> HTML DOM element
        tableHeaderElement.innerHTML = key;                             // set the text contents of <th>
        tableHeaderRowElement.append(tableHeaderElement);               // add the <th> element to the <tr> element
    }

    tableDomElement.append(tableHeaderRowElement);
}

/**
 * Creates a table row <tr> DOM element with table data <td> DOM elements. Appends the <tr> DOM element to a <table> DOM element
 * @param {Object} dataItem - an object containing table data
 * @param {HTMLElement} tableDomElement - <table> DOM element
 */
function createTableRow(dataItem, tableDomElement) {
    const tableRowElement = document.createElement("tr");                // creates <tr> HTML DOM element

    for (const [key, value] of Object.entries(dataItem)) {
        const tableHeaderElement = document.createElement("td");        // creates <th> HTML DOM element
        tableHeaderElement.innerHTML = value;                           // set the text contents of <th>
        tableRowElement.append(tableHeaderElement);                     // Add the <th> element to the <tr> element
    }

    tableDomElement.append(tableRowElement);
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
            createTableHeader(tableDataObject, tableElement);
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
    const tableDataArray = getTableData();       // get the JSON array
    createNotificationDom(tableDataArray);      // display the number of elements in the JSON array

    if (tableDataArray !== null) {
        createTableDom(tableDataArray);
    }
}

displayDomTable();      // create the HTML DOM array and display it