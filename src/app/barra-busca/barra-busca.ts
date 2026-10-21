import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-barra-busca',
  styleUrl: './barra-busca.css',
  templateUrl: './barra-busca.html',
})
export class BarraBusca {
  busca: string = '';

  ngOnInit(): void {
    this.carregar();
  }

  salvarBusca(): void {
    localStorage.setItem('busca', this.busca);
  }

  carregar(): void {
    this.busca = localStorage.getItem('busca') ?? '';
  }
}