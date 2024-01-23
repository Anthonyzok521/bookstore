//Arreglos [Que almacenan muchos datos dinámicos]
let books = ["Salomón", "Resiliencia", "Vaqueros", "El Sol", "Caballeros del Horizonte", "El Último"];
let search = prompt("Inserte el libro que desea buscar:");
let exists = false;

//DOM (Document Object Model)
//document.write(search);

//Iterando sobre los libros para encontrar el especificado
for(let i = 0; i < books.length; i++){
    //Salomón  == Vaquera ...
    if(search == books[i]){         //Comparando cada posición
        document.write(`<h1 class="yes">Si el libro ${books[i]} fue encontrado.</h1>`);
        exists = true;              //Diciendo que fue encontrado.
        break;                      //Deteniendo el bucle
    } 
}

if(!exists){ //Si esto no existe haz... (!exists) es lo mismo que (exists == false)
    document.write(`<h1 class="no">El libro que está tratando de buscar no fue encontrado.</h1>`);
}