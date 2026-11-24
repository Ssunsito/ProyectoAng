import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ListaProductos } from './pages/lista-productos/lista-productos';

@Component({
  imports: [Header, ListaProductos, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ProyectoAng');
  protected readonly author = signal('Santiago Pila');


}
