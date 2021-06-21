// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.
// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.


//Definire un array di oggetti; ogni oggetto rappresenta un gatto, 
//che è caratterizzato da: 
//nome, età, colore e sesso.
document.getElementById("container").innerHTML += "Milestone 1<br/>";
const cats = [
    {
        name : "Wookiee",
        age : 4,
        color: "#F75C1E",
        gender: "male"
    },
    {
        name : "Birba",
        age : 3.5,
        color: "#F75C1E",
        gender: "female"
    },
    {
        name : "Portos",
        age : 8,
        color: "#000000",
        gender: "male"
    },
    {
        name : "Sam",
        age : 1.5,
        color: "#AAA5A2",
        gender: "male"
    },
    {
        name : "Shiro",
        age : 9,
        color: "#753000",
        gender: "female"
    },
    {
        name : "Minù",
        age : 2,
        color: "#B900F6",
        gender: "female"
    }
];

// Tramite il forEach(), 
// stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

cats.forEach((element) => {
    document.getElementById("container").innerHTML += `
        ${element.name} : <i class="fas fa-cat" style="color:${element.color}"></i>,
    
    `;
});

document.getElementById("container").innerHTML += "<br/><br/>Milestone 2";
// e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. 
const pink = "#E7120F";
const blue = "#211CBB";
// Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.

const newCats = cats.map((element) => {
    // const name = element.name;
    // const age = element.age;
    // const color = element.color;
    // const gender = element.gender;
    const{name, age, color, gender} = element;
    
    // let ribbonColor = blue;
    // if(gender == "female"){
    //     ribbonColor = pink;
    // }

    // let ribbonColor = (gender == "female") ? pink : blue;

    const opacity = element.age / 9;

    return {
        name,
        age,
        color,
        gender,
        ribbon : {
            color: (gender == "female") ? pink : blue,
            opacity : opacity
        }
    }
});

const printCatsRibbon = (array) => {
    array.forEach((element) => {
        document.getElementById("container").innerHTML += `<br/><br/>
            ${element.name} : <i class="fas fa-cat" style="color:${element.color}"></i> 
            <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>,
        
        `;
    });
} 

// Dividere i gatti in due contenitori distinti in base al sesso 
const maleCats = newCats.filter((element) => {
    return element.gender === "male";
});
document.getElementById("container").innerHTML += "<br/><br/>Maschi";
printCatsRibbon(maleCats);


const femaleCats = newCats.filter((element) => {
    return element.gender === "female";
});
document.getElementById("container").innerHTML += "<br/><br/>Femmine";
printCatsRibbon(femaleCats);


document.getElementById("container").innerHTML += "<br/><br/>Milestone 3";
// Creare un nuovo array con prima tutti i gattini femmina 
// e poi tutti i gattini maschio, 
let catsFemaleMale = [...femaleCats, ...maleCats];
// inserendo solamente nome, colore e opacità del fiocco per ogni gatto.
const catsFemaleMaleZip = catsFemaleMale.map((element) => {
   const {name, color, ribbon} = element;

   return {
        name,
        color,
        ribbon
   } 
});

// catsFemaleMaleZip.forEach((element) => {
//     document.getElementById("container").innerHTML += `<br/><br/>
//         ${element.name} : <i class="fas fa-cat" style="color:${element.color}"></i> 
//         <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>,
    
//     `;
// });

printCatsRibbon(catsFemaleMaleZip);


// function printCatsRibbon(array){
//     array.forEach((element) => {
//         document.getElementById("container").innerHTML += `<br/><br/>
//             ${element.name} : <i class="fas fa-cat" style="color:${element.color}"></i> 
//             <i class="fas fa-ribbon" style="color:${element.ribbon.color}; opacity:${element.ribbon.opacity}"></i>,
        
//         `;
//     });
// }

