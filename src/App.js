import './App.css';
import { useEffect } from 'react';

export default function App() {
  class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre= nombre
        this.apellido= apellido
        this.mascotas= mascotas
        this.libros= libros
    }

    newUser() {
      this.nombre=prompt("nombre del usuario:")
      if (!this.nombre) {this.nombre="?"}
      this.apellido=prompt("apellido del usuario:")
      if (!this.apellido) {this.apellido="?"}
    }

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`)
        return `${this.nombre} ${this.apellido}`
    }

    addMascota() {
        let mascotaNueva= prompt("nombre:")
        if (mascotaNueva) {this.mascotas.push(mascotaNueva)} // no es agregada si no se ingresa un nombre
    }

    countMascotas() {
        console.log(this.mascotas.length)
        return this.mascotas.length
    }

    addBook() {
        let libroNuevo= {titulo: prompt("titulo:"), autor: prompt("autor:")} 
        if (libroNuevo.titulo && libroNuevo.autor) {this.libros.push(libroNuevo)} // no es agregado si no ingresan ambos datos
    }

    getBookNames() {
        console.log(this.libros.map(libro => libro.titulo))
        return this.libros.map(libro => libro.titulo)
    }
  }
 
  const usuario= new Usuario("?","?",[],[])
  
  return (
      <div className="botones">
        <button onClick={()=> usuario.newUser()}>crear usuario</button>
        <button onClick={()=> usuario.getFullName()}>nombre completo</button>
        <button onClick={()=> usuario.addMascota()}>agregar mascota</button>
        <button onClick={()=> usuario.countMascotas()}>contar mascotas</button>
        <button onClick={()=> usuario.addBook()}>agregar libro</button>
        <button onClick={()=> usuario.getBookNames()}>nombres de libros</button>
      </div>
  )
}
