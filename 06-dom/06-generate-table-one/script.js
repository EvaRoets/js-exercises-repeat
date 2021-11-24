// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let target = document.getElementById('target')
    let table = document.createElement('table')

    let tableBody = document.createElement("tbody");
    for (let i = 0; i <10; i++){
        let row = document.createElement('tr')
        let cell = document.createElement('td');
        cell.style.height = '4px'
        row.appendChild(cell);
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    target.appendChild(table)








})();
