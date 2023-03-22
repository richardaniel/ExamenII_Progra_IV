export class Plato {
    descripcion: string;
    nombre: string;
    categoria: string;
    precio: number;
    
  
    constructor(descripcion: string, nombre: string, categoria: string, precio: number) {
      this.descripcion = descripcion;
      this.nombre = nombre;
      this.categoria = categoria;
      this.precio = precio;
    }
  }