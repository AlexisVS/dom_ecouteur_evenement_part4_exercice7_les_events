// > Event Target

// ### 1. Créer un programme en utilisant e.target, qui permet au click de la souris de : 
// - Mettre une bordure a la div
// - Mettre le paragraphe en gras et en rouge
// - Surligné le h1
// - Effacer le h2, a chaque fois que l'on clique dessus il perd une lettre.
let div = document.querySelector('div');
div.addEventListener('click', (e) => {
    console.log(e.target);
    switch (e.target.localName) {
        case "div":
            e.target.style.border = "1px solid black"
            break;
        case "p":
            e.target.style.cssText = 'font-weight: bold; color: red;'
            break;
        case "h1":
            e.target.style.textDecoration = "underline";
            break;
        case "h2":
            e.target.innerHTML = e.target.innerHTML.slice(0, -1)
            break;
    }
})

// ### 2. 
// - Créer une variable contenant le texte suivant : "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !"
// - Rajoute au hover de la section le texte contenu dans la variable dans son paragraphe 
let section = document.querySelector('section');
section.addEventListener('mouseover', () => {
    let texte = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice !";
    let p = document.querySelectorAll('p')[1];
    p.innerHTML = texte;
})