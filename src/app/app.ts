import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ListaProductos } from './pages/lista-productos/lista-productos';

@Component({
  imports: [RouterOutlet, Header, ListaProductos ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ProyectoAng');
  protected readonly author = signal('Santiago Pila');


}
