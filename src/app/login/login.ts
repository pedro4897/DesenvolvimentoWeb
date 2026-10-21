import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  mensagem: string = "";
  obj: Cliente = new Cliente();

  gravar(){
    this.mensagem = "Seu Login foi realizado com sucesso!";
    let json = JSON.stringify(this.obj);
    localStorage.setItem("login", json);
  }
}
