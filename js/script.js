// Milestone 1:
// Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: 
// nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

const cats = [
    {  
        nome: 'Romeo',
        eta: 5,
        colore: '#FF8000',
        gender: 'male'
    },

    {
        nome: 'Duchessa',
        eta: 3,
        colore: '#F8F8FF',
        gender: 'female'
    },

    {
        nome: 'Bizet',
        eta: 1,
        colore: '#808A87',
        gender: 'male'
    },

    {
        nome: 'Matisse',
        eta: 1,
        colore: '#FF8C00',
        gender: 'male'
    }
];

// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// stampa per ogni gatto nome e colore
let printCats = "";
cats.forEach((element) => {
    document.getElementById('item').innerHTML += `${element.nome }
    <i class="fas fa-cat" style="color: ${element.colore}"></i> <br>
    `;
});


// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso 
// e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, 
// se femmina, o di blu, se maschio. 
// Il colore del fiocco deve essere più tenue se il gatto è più giovane, 
// più scuro se il gatto è più vecchio.

// fiocchi
const blue = '#0000FF';
const pink = '#FF1493';

// Il colore del fiocco deve essere più tenue se il gatto è più giovane, 
const opacity = cats.eta / 5;
const newCats = cats.map((element) => {
    const {nome, eta, colore, gender} = element;

    return {
        nome,
        eta,
        colore,
        gender,
        ribbon :{
            color : (gender == "female") ? pink : blue,
            opacity : opacity
        }
    }
});
newCats.forEach((element) => {
    document.getElementById('item').innerHTML += `</br>
    ${element.nome} : <i class= "fas fa-cat" style="color: ${element.colore}"></i>
    <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>,  
    `;
});

// array per sesso
const catsM = [];
const catsF = [];




// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e 
// poi tutti i gattini maschio, inserendo solamente nome, 
// colore e opacità del fiocco per ogni gatto.
// Fate la prima Milestone da soli e poi attendete in comunicazioni 
// l'orario del collegamento.