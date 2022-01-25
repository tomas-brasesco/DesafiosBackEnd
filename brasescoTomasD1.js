class Libro{
    constructor (titulo, autor){
        this.titulo=titulo;
        this.autor=autor;
    }
}
 class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre= nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }
    getFullName(){
        return `Mi nombre es ${this.nombre} ${this.apellido}`;
    };
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    };
    countMascota(){
        return `Actualmente tengo  ${this.mascotas.length} mascotas, son ${this.mascotas}.`;
    };
    getBookNames(){
        const librosQmeGustan = []
		for (let i of this.libros){ 
			librosQmeGustan.push(i.titulo)
		}
		return `Mis libros preferidos son ${librosQmeGustan}.`; 
    };
    addBook(titulo, autor){
        let libro= new Libro(titulo, autor);
        this.libros.push(libro);
	};
}


let usuario1= new Usuario("Tomas","Brasesco",[{titulo:"crimen y castigo", autor:"Fiódor Dostoyevski"},{titulo:"The Great Gatsby",autor:"F. Scott Fitzgerald"},{titulo:"Lazarillo de Tormes", autor:"fray Juan de Ortega"}],["Perro","Gato"]);

usuario1.addBook("La teoria del todo","Stephen Hawking");
usuario1.addMascota("canguro");
console.log(usuario1.getFullName());
console.log(usuario1.countMascota());
console.log(usuario1.getBookNames());