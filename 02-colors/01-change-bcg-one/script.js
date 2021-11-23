// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById('red').addEventListener('click', function() {
        document.body.style.backgroundColor = "red";
    })

    document.getElementById('green').addEventListener('click', function() {
        document.body.style.backgroundColor = "green";
    })

    document.getElementById('yellow').addEventListener('click', function() {
        document.body.style.backgroundColor = "yellow";
    })

    document.getElementById('blue').addEventListener('click', function() {
        document.body.style.backgroundColor = "blue";
    })

})();
