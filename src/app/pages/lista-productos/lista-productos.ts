import { Component, signal} from '@angular/core';
import { ProductoCard } from '../../components/producto-card/producto-card';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [ProductoCard],
  styleUrl: './lista-productos.css',
  templateUrl: './lista-productos.html',
})
export class ListaProductos {

  ultimoAgregado = signal<Producto | null>(null);

  protected readonly productos = signal<Producto[]>([
    {id: 1, nombre: 'Laptop Pro 14', precio: 1250, categoria: 'Computación', stock: 5, emoji: '💻', descripcion: 'Laptop de alto rendimiento para profesionales.'},
    {id: 2, nombre: 'Smartphone X', precio: 999, categoria: 'Telefonía', stock: 0, emoji: '📱', descripcion: 'El último smartphone con cámara avanzada.'},
    {id: 3, nombre: 'Auriculares Inalámbricos', precio: 199, categoria: 'Audio', stock: 15, emoji: '🎧', descripcion: 'Auriculares con cancelación de ruido y sonido envolvente.'},
    {id: 4, nombre: 'Smartwatch Series 5', precio: 299, categoria: 'Wearables', stock: 8, emoji: '⌚', descripcion: 'Reloj inteligente con seguimiento de salud y notificaciones.'},
    {id: 5, nombre: 'Tablet Pro 12.9', precio: 1099, categoria: 'Tablets', stock: 6, emoji: '📱', descripcion: 'Tablet de gran tamaño con pantalla de alta resolución y soporte para lápiz óptico.'},
  ]);


  onAgregar(producto: Producto): void {
    this.ultimoAgregado.set(producto);
  }
}

