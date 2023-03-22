import { Component } from '@angular/core';

@Component({
  selector: 'app-plato-adicional',
  templateUrl: './plato-adicional.component.html',
  styleUrls: ['./plato-adicional.component.css']
})
export class PlatoAdicionalComponent {

    adicional = {
    nombre: "Plato Adicional",s
    descripcion: "Descripción del plato adicional",
    precio: 10.99,
    comentarios: [
      {
        usuario: "Usuario1",
        comentario: "Comentario sobre el plato adicional",
        fecha: new Date()
      },
      {
        usuario: "Usuario2",
        comentario: "Otro comentario sobre el plato adicional",
        fecha: new Date()
      }
    ]
  };
  
}
