class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre= nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }
    getFullName(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`)
    };
    addMascota(){
        console.log(`Mis mascotas son ${this.mascotas}`);
    };
    countMascota(){
        console.log(`Actualmente tengo  ${this.mascotas.length}`);
    };
    getBookNames(){
        console.log(`Mis libros preferidos son ${this.libros}`);
    };
}

let usuario1= new Usuario("Tomas","Brasesco",["crimen y castigo","The Great Gatsby","Lazarillo de Tormes"],["Perro","Gato"]);

usuario1.getFullName();
usuario1.addMascota();
usuario1.countMascota();
usuario1.getBookNames();