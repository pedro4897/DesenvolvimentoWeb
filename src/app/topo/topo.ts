import { Component } from '@angular/core';
import { BarraBusca } from '../barra-busca/barra-busca';
import { Cliente } from '../model/cliente';

@Component({
  imports: [BarraBusca],
  selector: 'app-topo',
  styleUrl: './topo.css',
  templateUrl: './topo.html',
})
export class Topo {
  mensagem : string = "";
  

  ngOnInit(){
    let json = localStorage.getItem("cadastro");
    if(json!=null){
      let obj:Cliente = new Cliente();
      obj = JSON.parse(json);
      this.mensagem = "Ola, "+ obj.nome;
    }
  }

  sair(){
    localStorage.removeItem("cadastro");
    location.href="./login";
  }


}
