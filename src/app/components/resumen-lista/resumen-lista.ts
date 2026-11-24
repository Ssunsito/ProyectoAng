import { Component, input } from '@angular/core';

@Component({
  selector: 'app-resumen-lista',
  standalone: true,
  template: `
    <p>
      📦 Hay {{ total() }} productos en el catálogo · ❤️ {{ favoritos() }} favoritos
    </p>
  `,
})
export class ResumenLista {
  total = input.required<number>();
  favoritos = input(0);
}
