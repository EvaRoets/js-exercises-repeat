// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let run = document.getElementById('run');
    let intro = {
        firstName: 'Eva',
        lastName: 'Roets',
        age: 34,
        city: 'Ghent',
        country: 'BE'
    }

    run.addEventListener('click', ()=>{
        console.log(`${intro.firstName}, ${intro.lastName}, ${intro.age}, ${intro.city}, ${intro.country}`);
    })
})();
