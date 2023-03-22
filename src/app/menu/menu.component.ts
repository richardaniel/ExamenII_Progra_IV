import { Component } from '@angular/core';
import {Plato} from 'src/app/compartida/examen';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  plato1: Plato = new Plato("Descripción del primer plato", "Nombre del primer plato", "Categoría del primer plato", 10.99, );
  plato2: Plato = new Plato("Descripción del segundo plato", "Nombre del segundo plato", "Categoría del segundo plato", 12.99, );
  plato3: Plato = new Plato("Descripción del tercer plato", "Nombre del tercer plato", "Categoría del tercer plato", 15.99, );
}
