// Milestone 1:
// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: 
// nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

const cats = [
    {  
        nome: 'Romeo',
        eta: 5,
        colore: 'orange',
        sex: 'male'
    },

    {
        nome: 'Duchessa',
        eta: 3,
        colore: 'white',
        sex: 'female'
    },

    {
        nome: 'Bizet',
        eta: 1,
        colore: 'grey',
        sex: 'male'
    },

    {
        nome: 'Matisse',
        eta: 1,
        colore: 'dark_orange',
        sex: 'male'
    }

];

// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// stampa per ogni gatto nome e colore
let printCats = "";
cats.forEach((cat) => {
    printCats += `${cat.nome} è di colore ${cat.colore} <br>`;
});
document.getElementById('item').innerHTML = printCats;