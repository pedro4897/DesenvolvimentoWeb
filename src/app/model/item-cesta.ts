import { Produto } from './produto';

export class ItemCesta {
  codigo: number = 0;
  produto: Produto = new Produto();
  quantidade: number = 0;
}
