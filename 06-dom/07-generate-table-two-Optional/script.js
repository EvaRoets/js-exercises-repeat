// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    let target = document.getElementById('target')
    let table = document.createElement('table')
    let tableBody = document.createElement("tbody");

    for (let i = 1; i < 11; i++) {
        let row = document.createElement('tr')
        for (let j = 1; j < 11; j++) {
            let cell = document.createElement('td');
            cell.style.height = '4px'
            cell.innerHTML = i * j
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    target.appendChild(table)

})();
