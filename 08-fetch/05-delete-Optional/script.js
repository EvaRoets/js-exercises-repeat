// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    fetch("../../_shared/api.json")
        .then(response => response.json())
        .then(data => {
            let run = document.getElementById('run');
            run.addEventListener('click', () => {
                let allHeroes = data.heroes;
                let input = +document.getElementById('hero-id').value;
                // console.log(input)
                let lastHeroes = allHeroes.filter((hero, id) => {
                    return (hero.id !== input)
                });
                console.log(lastHeroes)
            });
        });
})();
