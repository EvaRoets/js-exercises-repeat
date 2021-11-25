// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    // your code here


    for (let i = 0; i < keys.length; i++) {
        let entries = new Map([
            [keys[i], values[i]]
        ])

        const obj = Object.fromEntries(entries)

        let run = document.getElementById('run');
        run.addEventListener('click', () => {
            console.log(obj)
        })
    }
})();