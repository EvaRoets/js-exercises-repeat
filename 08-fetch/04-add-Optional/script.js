// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    fetch("../../_shared/api.json")
        .then(response => response.json())
        .then(data => {
            let run = document.getElementById('run');
            run.addEventListener('click', addNewHero);

            async function addNewHero(e) {
                e.preventDefault();
                let allHeroes = data.heroes;
                let name = document.getElementById('hero-name')
                let alterEgo = document.getElementById('hero-alter-ego')
                let powers = document.getElementById('hero-powers')
                const newHero = {};
                newHero['id'] = allHeroes.length + 1;
                newHero['name'] = name.value;
                newHero['alterEgo'] = alterEgo.value;
                newHero['abilities'] = powers.value.split(', ');
                allHeroes.push(newHero);
                console.log(allHeroes);
            }
        });
})();