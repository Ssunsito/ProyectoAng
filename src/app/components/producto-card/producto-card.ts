import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
    selector: 'producto-card',
    standalone: true,
    imports: [CurrencyPipe],
    templateUrl: './producto-card.html',
    styleUrl: './producto-card.css',
  })
  export class ProductoCard {
    @Input({ required: true }) producto!: Producto;
    @Output() agregar = new EventEmitter<Producto>();

  onAgregar(): void {
    this.agregar.emit(this.producto);
  }
}