// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let run = document.getElementById('run');
    run.addEventListener('click', () => {
        fetch("../../_shared/api.json")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    })

})();
