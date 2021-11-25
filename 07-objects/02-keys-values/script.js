// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here
    let run = document.getElementById('run');
    run.addEventListener('click', () => {
        console.log(Object.keys(person));
        console.log(Object.values(person));
    });


})();
