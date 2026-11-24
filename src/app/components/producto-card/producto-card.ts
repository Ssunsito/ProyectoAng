import { CurrencyPipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
    selector: 'producto-card',
    standalone: true,
    imports: [CurrencyPipe],
    templateUrl: './producto-card.html',
    styleUrl: './producto-card.css',
  })
  export class ProductoCard {
      producto = input.required<Producto>();
      mostrarDescripcion = input(false);
      agregar = output<Producto>();
      favorito = output<number>();
      destacado = input(false);

  onAgregar(): void {
      this.agregar.emit(this.producto());
    }

    onFavorito(): void {
      this.favorito.emit(this.producto().id);
  }
}